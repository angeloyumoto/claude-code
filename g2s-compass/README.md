# G2S Compass · Community Rebuild (Pine Script v6)

An original, open implementation of the **G2S Compass** workflow for TradingView,
written from the public script description, the *Quick White Paper*, the
*Customer Field Guide* and the *G2S Trading Checklist*. The invite-only script's
source is protected and was never seen; this file re-creates the behaviour those
documents describe, module by module, in Pine Script v6.

Files: `G2S_Compass.pine` (indicator) · `G2S_Compass_Strategy.pine` (same engine as a strategy, for the Strategy Tester)

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
The alert does not depend on any setting, so it cannot be silenced by a stale checkbox. Classic `alertcondition` entries are also available (sweep, reaction, SMT, plan ready).
Alerts are timeframe-specific, so create one per chart timeframe you want monitored.

## What is on the chart

| Module | What it draws |
|---|---|
| Session levels | Asia · London · NY AM · NY Lunch · NY PM · Full NY highs/lows and PDH/PDL as lines with end-tabs. The **last completed** instance of each session is the ledger record (sweepable, target, ✓/☐ in the panel); the developing instance is drawn lighter and only becomes liquidity when it completes. Lines end just past their label; a taken level fades but keeps extending, and the panel shows the tick. NY Lunch lines are off by default (its levels still count). |
| Sweeps | Small circle on the sweep candle (wick through a tracked level, body back on the other side). |
| FVGs (chart TF) | Shaded boxes labelled `1m` (or `1m FVG`), ending a few bars past the last candle. Gaps from earlier sessions are hidden until price comes within 1 ATR. A confirmed close through the far edge under sweep + reaction ownership turns the box purple and relabels it `IFVG`; without ownership the gap simply ends. |
| HTF FVG map | Six slots (default 3m · 5m · 15m · 1H · 4H, Daily off), drawn like the chart gaps with the source-timeframe label, minimum size 10 points by default, hidden until price is within 3 ATR. Placement *Price Action* (default, as in the original's screenshots) or *Right Side* (parked right of live price on 1m/3m/5m). With *Promote linked LTF FVGs* (Auto = on in Mobile Compact / Minimal) a chart-TF, 3m or 5m gap covered by a same-direction gap of the next ladder step is hidden. |
| SMT | Black connector between the two primary pivots plus a centred `ES SMT` / `ES/YM SMT` label. The comparison symbol's swing over the same pivot window is used, and bars the comparison does not have are ignored. |
| Volume Profile | Session profiles: **DEV** (developing), **OV** (previous session), **PD** (same session type, previous day), **PW** (previous week, levels only). Sessions: Asia/London 18:00–09:29, New York 09:30–13:29 and a NY PM restart 13:30–16:59 (switchable off, then NY runs to 16:59). During the PM profile the overnight profile stays OV, as in the original; the morning profile returns the next day as PD. DEV becomes eligible after 20 bars or a quarter of the session, whichever is less. Histogram for DEV (never painted past the last bar) plus the last 1–3 completed sessions; VAH / POC / VAL lines, DEV labels at the right end, OV/PD/PW labels at the start, caption `DEV - New York VP [live]`. |
| Trade plan | One plan at a time, drawn only once it is ACTIVE: entry line labelled `B · Rotation VP Hold`, red dotted SL, grey dotted TP1–TP3 (ticked when hit). Drawings are removed at once on a stop hit, invalidation or timeout, and shortly after completion. |
| Checklist panel | Header `G2S · Bull · Grade B`, then Setup Type · Entry Model · Liquidity Sweep · Price Reaction · HTF FVG (opt.) · SMT (opt.) · VP Context · Status · Macro Window · Stats (ideas, TP1 win rate, TP3 rate, stops, expired). |
| Liquidity panel | `G2S Liquidity` table with High/Low check marks per range; prices and taken-time in tooltips. |

## Reading the panel

Read in the documented order: **Direction → Setup → Confirmation → Entry → Optional confluence → Liquidity Left.**

* **Direction** comes from the latest recognised sweep (low swept → Bull, high swept → Bear, both → Review). Without a sweep it comes from the live VP context.
* **Setup Type** – Value Rotation · Value Continuation · Liquidity Inversion (auto-classified, no mode to pick).
* **Entry Model** – FVG Retest · IFVG Close · IFVG Retest · VP Retest · VP Hold, tagged `VP-led` or `Price-action-led`.
* **Status** – Scanning · Waiting for reaction · Waiting for FVG / IFVG entry · Waiting for VP retest/hold · Pending · ACTIVE · TP1 ✓ … · Setup Invalid · Complete.
* **Macro Window** – countdown to the hourly :50 → :10 macro in New York time ("Bar time" is appended on historical bars).

## Engine rules (how each checklist step is decided)

**1 · Liquidity sweep.** Tracked levels are the last completed instance of each session's high/low, PDH/PDL (external) and confirmed pivot highs/lows (internal, `pivLen` bars each side). A high-side sweep needs a wick through the level with the candle body closing back below it; a low-side sweep is the mirror. External beats internal when both occur on one candle (a candle that sweeps an external level on one side and only a pivot on the other takes the external side). A two-sided candle is surfaced as *Review* instead of forcing a bias. Levels that are simply closed through are marked *taken* but are **not** sweeps. A shallower sweep in the same direction while a reaction is already confirmed is fresh evidence for the same trade idea: the thesis sweep, its extreme and its reaction are kept. The sweep context expires after `Reaction window` bars without a reaction, after `Trade idea window` bars once a reaction exists, or when price closes beyond the trade-idea extreme (the lowest/highest print since the sweep).

**2 · HTF FVG (optional).** A 15m-or-higher slot gap counts as confluence when price is inside it, or touched it within the last six bars, and the gap points in the working direction (3m / 5m gaps are drawn but do not count). Mapped gaps are anchored at their displacement candle and end only on a confirmed close of their own timeframe through the far edge; they are never relabelled IFVG.

**3 · SMT (optional).** Primary makes a higher pivot high while the comparison symbol's swing high over the same pivot window is lower → bearish SMT; mirror for lows. Valid for `SMT valid for` bars.

**4 · Displacement / sharp reversal.** Evaluated in the working direction: the sweep direction, otherwise the VP-context direction (so a Value Rotation can show *Displacement ✓* with *No qualifying sweep*, as the original does). Displacement: body ≥ `ATR ×` input, body/range ≥ 0.5, closes beyond the prior candle. Sharp reversal: rejection wick ≥ `wick ×` body, range ≥ 1.2 ATR, close past the candle midpoint; a later displacement replaces a sharp reversal. An internal-pivot sweep against an external, reaction-confirmed idea does not overturn it.

**5 · Entry models.**
* *FVG Retest* – a fresh same-direction FVG (formed after the context started, at least 0.25 ATR tall) is tapped at its near edge and the candle closes back beyond it. Under a VP context it still needs a displacement or sharp reversal in that direction first (Step 4 before Step 5).
* *IFVG Close* – after sweep + reaction, an opposing FVG gets a confirmed close through its far edge. A chart-TF gap only inverts (purple `IFVG`) while a sweep in the inversion direction is live; otherwise a close-through simply ends it. An inverted zone starts unused, so a gap already traded as a retest can still trade as an IFVG. The plan activates on the confirming close.
* *IFVG Retest* – a later retest of a zone that inverted under the current sweep, closing back in direction.
* *VP Retest* – after price crosses a mapped VP level into value (VAL up, VAH down, or POC either way), price wicks back to the level and closes on the setup side. Crosses are measured against each level's value on the previous bar, so a moving DEV level cannot fake a cross, and when several levels are crossed on one candle the one nearest the close is the reference.
* *VP Hold* – N consecutive confirmed closes (`VP Hold · confirmed closes`) at least 0.1 ATR beyond that level. A wick against the level keeps the count; a close back inside resets it. Crosses are only counted when price was on the far side of both the previous and the current level value, so a jumping developing POC cannot fake one.

FVG entries use the near boundary by default (switchable to 50%, far edge, or confirmation close). Retest models whose bar already tapped the entry are live at once; VP Hold activates on the confirmation close; VP Retest uses the level. Only references price has not reached yet sit **Pending** (header stays *Ungraded*), and they expire after `Pending expires after` bars. No target is credited on the activation bar itself.

**6 · Stop & targets.** Stop = model invalidation ± `Stop buffer`: for FVG models the chosen *Stop reference* (FVG far edge by default; Trade Idea High/Low = sweep extreme, Latest High/Low = reaction extreme, Internal High/Low = protected pivot, ATR Stop) pushed beyond the retest bar's wick; for VP models the hold/retest extreme or the VP level, whichever is farther. The ATR fallback (`ATR stop fallback ×`, default 1.0) is used when the structural stop lands on the wrong side, within 0.25 ATR of the entry, or farther than `Max stop distance (ATR ×)` (default 3): on a 1H chart that is what keeps a VP-level stop from sitting hundreds of points away. Targets farther than `Max target distance (ATR ×)` are ignored. Targets: rotation setups reserve slots for their own profile's POC and far boundary; the rest is filled nearest-first from VP levels of every shown role, untaken session highs/lows and PDH/PDL and internal pivots; opposing chart-TF FVG edges only fill slots that are still empty. TP1 must be ≥ `TP1 minimum (R)`, targets keep ≥ `TP separation (R)` apart, and the final list is ordered nearest → farthest.

**Grades.** **B** = one complete model. **A** = VP context in the setup direction **and** real G2S evidence (sweep + reaction) in that direction. **A+** = A plus at least two of: aligned HTF FVG, aligned SMT, external liquidity sweep with reaction, stacked VP levels near the entry. Grades describe evidence, not probability.

**Plan lifecycle.** SL hit → *Setup Invalid* (the sweep thesis stays alive, so a fresh FVG can produce another plan). TP3 (or the last available target) hit → *Complete*. An ACTIVE plan that reaches no target within `Active plan times out after` bars ends as *Stale*. The result stays in the panel for `Show plan result for` bars, then the live scanning state is shown again. Only one plan is drawn at a time, a new plan is never saved on the bar the previous one ended (except an opposite-direction idea on the bar a plan was stopped, which is the reversal itself), and a spent VP rotation must be re-earned with a fresh cross. Pending plans (reference not yet reached) show *Waiting for … entry* and draw nothing.

**Selectivity.** These gates decide which qualified models become saved ideas (and alerts). Defaults are conservative; every one is an input under Trade plan:

* `Quality floor` (default *External sweep or VP context*): an idea needs a session / PDH / PDL sweep in its direction, or a VP level cross in that direction. Internal-pivot-only sweeps no longer make ideas unless you set it to *Off*.
* `Minimum grade to save` (B / A / A+) and `during` (Any / NY AM + PM / NY AM only).
* `HTF bias filter` (default *Off*): refuse ideas against the newest active 15m+ mapped gap and/or against price location relative to the last completed value area.
* `Cooldown`: after a stop-out, no same-direction idea from the same sweep or the same VP cross.
* Quiet periods: no ideas in the first 5 minutes of a shown session, nor for 15 bars after a two-sided sweep.
* `Zone retest within` 40 bars and `min gap to trade` 0.5 ATR: late retests and thin gaps are drawn but not traded.
* `VP Hold · max distance from level` 1.5 ATR: a hold that already ran away from value is not chased.
* `TP1 minimum when the stop is the ATR fallback` 1.5R and `Targets need a liquidity / VP level`.

Fewer, better-aligned ideas is the usual effect; measure it with the Stats row and the strategy build before trusting it.

## Settings worth knowing

* **G2S View** – Compass · Complete / Playbook · Price Action (no VP) / Value · Volume Profile (no checklist, FVG or SMT) / Minimal · Clean Chart.
* **Checklist** – Full (adds the six questions and TP rows) / Compact (default) / Minimal / Mobile (single combined table with *Liq Left*) / Off; location Auto or any corner. Every non-obvious input has a tooltip.
* **Sessions** – every session string is editable, in New York time. VP sessions default to Asia/London 18:00–09:29 and New York 09:30–16:59.
* **Volume Profile** – target rows (200 by default; actual rows are tick-aligned so the count varies), value-area %, histogram mode, Left/Right placement (Right = next to live price / right-aligned at session end), width in bars (scaled down automatically on higher timeframes), per-level colours, NY PM restart, DEV eligibility delay in bars. DEV levels are drawn from the first bar and carry a `*` until eligible.
* **FVGs** – middle-close filter, minimum size in points or ATR fraction, label mode (`1m` or `1m FVG`), six HTF slots with their own 10-point minimum, placement and right-side offset/width, `Show older gaps within (ATR ×)`, linked-FVG promotion (Auto/On/Off).
* **Trade plan** – FVG entry reference, stop reference, buffer, ATR fallback, max stop and target distance, TP1 minimum and spacing, pending expiry, active timeout, result window, stats row, minimum grade, trading window.

## Backtesting and win rate

Nothing here guarantees a win rate; the G2S documents say it plainly ("A+ can lose. B can win."). Two ways to measure instead of guess:

1. **Stats row** on the panel: ideas saved on the loaded history, win rate (TP1 reached before the stop), TP3 rate, stop-outs, expired/stale ideas. It updates live and resets when the chart reloads.
2. **`G2S_Compass_Strategy.pine`**: the same engine declared as a `strategy`. Add it to a chart and open the Strategy Tester for net profit, profit factor, win rate and the trade list. It enters at the close of the bar on which a plan becomes ACTIVE, scales out a third at each target with the shared stop, moves the stop to breakeven after TP1 (switchable), and flattens when the plan ends. Fills use TradingView's intrabar model, so counts can differ slightly from the indicator's bar-close tracking. Regenerate it from the indicator with `gen_strategy.py` whenever the indicator changes.

Use the grade and session filters, the stop cap and the timeframe to tune selectivity, and compare symbols and timeframes before trading any of it.

## Known differences from the invite-only script

* Volume at price is estimated from chart bars (volume split evenly across the rows a bar covers, up/down by candle colour), the same class of estimate the original describes.
* The reaction, hold and target heuristics follow the documents' descriptions; exact thresholds of the original are not public, so expect some setups to grade or time differently.
* Pine Script cannot be compiled outside TradingView. The script was written against the v6 reference and went through an eight-lens review (compile rules, data requests, liquidity, Volume Profile, plan logic, performance, presentation, spec coverage) with every finding fixed, but it has not been run in the Pine Editor from this environment. If the editor reports an error, note the line and message; fixes are usually one-liners.
