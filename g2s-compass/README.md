# G2S Compass · Community Rebuild (Pine Script v6)

An original, open implementation of the **G2S Compass** workflow for TradingView,
written from the public script description, the *Quick White Paper*, the
*Customer Field Guide* and the *G2S Trading Checklist*. The invite-only script's
source is protected and was never seen; this file re-creates the behaviour those
documents describe, module by module, in Pine Script v6.

File: `G2S_Compass.pine`

> Decision support only. The indicator does not place trades, size positions or
> guarantee anything. "Ready" means review, "Pending" means a saved reference has
> not activated, "ACTIVE" means the saved reference activated.

## Install

1. Open TradingView → **Pine Editor** (bottom panel).
2. Paste the full contents of `G2S_Compass.pine`, click **Add to chart**.
3. Use an intraday candlestick chart (1m–15m is the design target; NQ/ES/YM style futures or index CFDs).
4. Optional: **Save** the script so it appears under *Indicators → My scripts*.

### Alerts
Create Alert → Condition **G2S** → **Any alert() function call** → choose App / Email.
One alert fires per confirmed bar close when a complete plan is saved:

```
NEW IDEA · G2S Bull · Grade B · Value Rotation · VP Hold (VP-led) · NQ1! 1m · Entry 29460.00 · SL 29405.00 · TP1 29540.00 · TP2 29567.00 · TP3 29585.00 · ACTIVE
```
Classic `alertcondition` entries are also available (sweep, reaction, SMT, plan ready).
Alerts are timeframe-specific, so create one per chart timeframe you want monitored.

## What is on the chart

| Module | What it draws |
|---|---|
| Session levels | Asia · London · NY AM · NY Lunch · NY PM · Full NY highs/lows and PDH/PDL as lines with end-tabs. A line stops where the level is taken. |
| Sweeps | Small circle on the sweep candle (wick through a tracked level, body back on the other side). |
| FVGs (chart TF) | Shaded boxes labelled `1m FVG`. A confirmed close through the far edge turns the box purple and relabels it `IFVG`. |
| HTF FVG map | Six slots (default 3m · 5m · 15m · 1H · 4H, Daily off). Dotted boundaries, 50% line, light fill, source-timeframe label. On 1m/3m/5m charts the 15m+ gaps are parked to the right of live price. |
| SMT | Black connector between the two primary pivots plus a centred `ES SMT` / `ES/YM SMT` label. |
| Volume Profile | Session profiles: **DEV** (developing), **OV** (previous session), **PD** (same session type, previous day), **PW** (previous week, levels only). Histogram for DEV plus the last 1–3 completed sessions; VAH / POC / VAL lines with role labels. |
| Trade plan | One plan at a time: entry line labelled `B · Rotation VP Hold`, dashed SL, dotted TP1–TP3 (ticked when hit). |
| Checklist panel | Header `G2S · Bull · Grade B`, then Setup Type · Entry Model · Liquidity Sweep · Price Reaction · HTF FVG (opt.) · SMT (opt.) · VP Context · Status · Macro Window. |
| Liquidity panel | `G2S Liquidity` table with High/Low check marks per range; prices and taken-time in tooltips. |

## Reading the panel

Read in the documented order: **Direction → Setup → Confirmation → Entry → Optional confluence → Liquidity Left.**

* **Direction** comes from the latest recognised sweep (low swept → Bull, high swept → Bear, both → Review). Without a sweep it comes from the live VP context.
* **Setup Type** – Value Rotation · Value Continuation · Liquidity Inversion (auto-classified, no mode to pick).
* **Entry Model** – FVG Retest · IFVG Close · IFVG Retest · VP Retest · VP Hold, tagged `VP-led` or `Price-action-led`.
* **Status** – Scanning · Waiting for reaction · Waiting for FVG / IFVG entry · Waiting for VP retest/hold · Pending · ACTIVE · TP1 ✓ … · Setup Invalid · Complete.
* **Macro Window** – countdown to the hourly :50 → :10 macro in New York time ("Bar time" is appended on historical bars).

## Engine rules (how each checklist step is decided)

**1 · Liquidity sweep.** Tracked levels are completed session highs/lows, PDH/PDL (external) and confirmed pivot highs/lows (internal, `pivLen` bars each side). A high-side sweep needs a wick through the level with the candle body closing back below it; a low-side sweep is the mirror. External beats internal when both occur on one candle. A two-sided candle is surfaced as *Review* instead of forcing a bias. Levels that are simply closed through are marked *taken* but are **not** sweeps. The sweep context expires after `Reaction window` bars without a reaction, after `Trade idea window` bars once a reaction exists, or when price closes beyond the sweep extreme.

**2 · HTF FVG (optional).** A slot gap counts as confluence when price is inside it, or touched it within the last six bars, and the gap points in the working direction.

**3 · SMT (optional).** Primary makes a higher pivot high while the comparison symbol's high at the same pivot is lower → bearish SMT; mirror for lows. Valid for `SMT valid for` bars.

**4 · Displacement / sharp reversal.** Displacement: body ≥ `ATR ×` input, body/range ≥ 0.5, closes beyond the prior candle in the sweep direction. Sharp reversal: rejection wick ≥ `wick ×` body, range ≥ 0.8 ATR, close past the candle midpoint.

**5 · Entry models.**
* *FVG Retest* – a fresh same-direction FVG (formed after the context started) is tapped at its near edge and the candle closes back beyond it.
* *IFVG Close* – after sweep + reaction, an opposing FVG gets a confirmed close through its far edge.
* *IFVG Retest* – a later retest of that inverted zone that closes back in direction.
* *VP Retest* – after price crosses a mapped VP level into value (VAL up, VAH down, or POC either way), price wicks back to the level and closes on the setup side.
* *VP Hold* – N consecutive confirmed closes (`VP Hold · confirmed closes`) on the setup side of that level. A wick against the level keeps the count; a close against it resets the count.

FVG entries use the near boundary by default (switchable to 50%, far edge, or confirmation close). VP Hold activates on the confirmation close; VP Retest uses the level. Boundary-based plans sit **Pending** until price trades to the entry, and expire after `Pending expires after` bars.

**6 · Stop & targets.** Stop = model invalidation (FVG far edge, hold/retest extreme) ± `Stop buffer`; ATR fallback if that lands on the wrong side of the entry. Targets are picked nearest-to-farthest from: VP levels of every shown role, untaken session highs/lows and PDH/PDL, internal pivots, and opposing active FVGs. TP1 must be ≥ `TP1 minimum (R)`; later targets keep ≥ `TP separation (R)` apart. Rotation setups try their own profile's POC and far boundary first.

**Grades.** **B** = one complete model. **A** = VP context and G2S price action agree on direction. **A+** = A plus at least two of: aligned HTF FVG, aligned SMT, external liquidity sweep with reaction, stacked VP levels near the entry. Grades describe evidence, not probability.

**Plan lifecycle.** SL hit → *Setup Invalid* (the sweep thesis stays alive, so a fresh FVG can produce another plan). TP3 (or the last available target) hit → *Complete* and the engine resumes scanning. Only one plan is drawn at a time.

## Settings worth knowing

* **G2S View** – Compass · Complete / Playbook · Price Action (no VP) / Value · Volume Profile (no checklist, FVG or SMT) / Minimal · Clean Chart.
* **Display layout** – Complete / Mobile Compact (single combined table with *Liq Left*) / Minimal.
* **Checklist layout** – Full (adds the six questions and TP rows) / Compact (default) / Minimal / Off; location Auto or any corner.
* **Sessions** – every session string is editable, in New York time. VP sessions default to Asia/London 18:00–09:29 and New York 09:30–16:59.
* **Volume Profile** – target rows (actual rows are tick-aligned so the count varies), value-area %, histogram mode, Left/Right placement, per-level colours, DEV eligibility delay.
* **FVGs** – middle-close filter, minimum size in points or ATR fraction, six HTF slots, right-side offset/width.

## Known differences from the invite-only script

* No LTF → HTF "promotion ladder" for linked 1m→3m→5m→15m gaps; every enabled slot draws its own gaps.
* Volume at price is estimated from chart bars (volume split evenly across the rows a bar covers, up/down by candle colour), the same class of estimate the original describes.
* The reaction, hold and target heuristics follow the documents' descriptions; exact thresholds of the original are not public, so expect some setups to grade or time differently.
* Pine Script cannot be compiled outside TradingView. The script was written against the v6 reference and reviewed line by line, but it has not been run in the Pine Editor from this environment. If the editor reports an error, note the line and message; fixes are usually one-liners.
