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
| FVGs (chart TF) | Shaded boxes labelled `1m` (or `1m FVG`). Small-timeframe gaps (chart TF, 3m, 5m) are shown only while they matter: formed inside the current idea, used by the live plan, inverted under the live sweep, or younger than 20 bars; a gap that served a past idea stays as a short block; everything else is hidden. A confirmed close through the far edge while a sweep in that direction is live turns the box purple and relabels it `IFVG`; otherwise the gap simply ends. |
| HTF FVG map | Six slots (default 3m · 5m · 15m · 1H · 4H, Daily off), drawn like the chart gaps with the source-timeframe label, minimum size 10 points by default. 15m-and-higher gaps keep long blocks, dimmed until price is within 3 ATR; 3m / 5m gaps follow the small-timeframe rule above. Gaps covered by a bigger same-direction gap of the next slot are hidden by default. Placement *Price Action* (default, as in the original's screenshots) or *Right Side* (parked right of live price on 1m/3m/5m). With *Promote linked LTF FVGs* (Auto = on in Mobile Compact / Minimal) a chart-TF, 3m or 5m gap covered by a same-direction gap of the next ladder step is hidden. |
| SMT | Black connector between the two primary pivots plus a centred `ES SMT` / `ES/YM SMT` label. The comparison symbol's swing over the same pivot window is used, and bars the comparison does not have are ignored. |
| Volume Profile | Session profiles: **DEV** (developing), **OV** (previous session), **PD** (same session type, previous day), **PW** (previous week, levels only; on by default because the original uses PW VAL / VAH / POC as entry basis). Sessions: Asia/London 18:00–09:29, New York 09:30–13:29 and a NY PM restart 13:30–16:59 (switchable off, then NY runs to 16:59). During the PM profile the overnight profile stays OV, as in the original; the morning profile returns the next day as PD. Volume lands in the rows from the bar's intrabar candles by default (1m on charts up to 15m, 5m on 1H, 15m on 4H, 1H on daily; a 1m chart and bars older than TradingView's ~100,000-intrabar limit fall back to the bar range), switchable to bar range or close only; the value area grows from the POC by the larger of the two rows above vs the two rows below (the classic CBOT method), switchable to single rows. Two profile scripts that pick different options here disagree on VAH / POC / VAL by a few points. DEV becomes eligible after 20 accumulated bars or a quarter of the session, whichever is less; until then its labels carry a `*` and the caption shows `bars/needed`. Histogram for DEV (never painted past the last bar) plus the last 1–3 completed sessions; VAH / POC / VAL lines, DEV labels at the right end, OV/PD/PW labels at the start, caption `DEV - New York VP [live]`. |
| Trade plan | One plan at a time, drawn only once it is ACTIVE: entry line labelled `B · LONG · Rotation VP Hold`, red dotted SL, grey dotted TP1–TP3 (ticked when hit). Status reads `ACTIVE · LONG` / `TP1 ✓ · SHORT`, past-idea tags read `B L ✓` / `A S ✗`. After TP1 the stop line moves to the entry and reads `SL · BE`. Drawings are removed at once on a stop hit, invalidation or timeout, and shortly after completion. |
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

**3 · SMT (optional).** Primary makes a higher pivot high while the comparison symbol's swing high over the same pivot window is lower → bearish SMT; mirror for lows. Valid for `SMT valid for` bars. The chart tag reads `Bullish SMT · ES` / `Bearish SMT · ES` in the bull / bear colour, the panel row reads `Bullish ✓ · ES`, and there are separate bullish / bearish alerts next to the generic one.

**4 · Displacement / sharp reversal.** Evaluated in the working direction: the sweep direction, otherwise the VP-context direction (so a Value Rotation can show *Displacement ✓* with *No qualifying sweep*, as the original does). Displacement: body ≥ `ATR ×` input, body/range ≥ 0.5, closes beyond the prior candle. Sharp reversal: rejection wick ≥ `wick ×` body, range ≥ 1.2 ATR, close past the candle midpoint; a later displacement replaces a sharp reversal. An internal-pivot sweep against an external, reaction-confirmed idea does not overturn it. **Market structure shift** (`Require a market structure shift`, default on): before any FVG / IFVG entry counts, price must also *close* beyond the short-term high (low sweep) or low (high sweep) that preceded the sweep, the highest high / lowest low of the `lookback` bars (default 10) before the sweep candle; a deeper sweep resets the reference. The checklist shows it as `MSS ✓` / `MSS ☐`.

**5 · Entry models.**
* *FVG Retest* – a fresh same-direction FVG (formed after the context started, at least 0.25 ATR tall) is tapped at its near edge and the candle closes back beyond it. Under a VP context it still needs a displacement or sharp reversal in that direction first (Step 4 before Step 5).
* *IFVG Close* – after sweep + reaction, an opposing FVG gets a confirmed close through its far edge. A chart-TF gap only inverts (purple `IFVG`) while a sweep in the inversion direction is live; otherwise a close-through simply ends it. An inverted zone starts unused, so a gap already traded as a retest can still trade as an IFVG. By default (`IFVG Close entry` = *Pending at the IFVG*) the confirmed inversion arms a **pending** plan at the IFVG itself, the checklist's "entry area", and waits for price to come back; *At the inversion close* enters at the inversion candle's close instead (the original behaviour, the worst price and the one most often stopped on the retest).
* *IFVG Retest* – a later retest of a zone that inverted under the current sweep, closing back in direction.
* *VP Retest* – after price crosses a mapped VP level into value (VAL up, VAH down, or POC either way), price wicks back to the level and closes on the setup side. Crosses are measured against each level's value on the previous bar, so a moving DEV level cannot fake a cross, and when several levels are crossed on one candle the one nearest the close is the reference.
* *VP Hold* – N consecutive confirmed closes (`VP Hold · confirmed closes`) at least 0.1 ATR beyond that level. A wick against the level keeps the count; a close back inside resets it. Crosses are only counted when price was on the far side of both the previous and the current level value, so a jumping developing POC cannot fake one.

FVG entries use the near boundary by default (switchable to 50%, far edge, or confirmation close). Retest models whose bar already tapped the entry are live at once; VP Hold activates on the confirmation close; VP Retest uses the level. Only references price has not reached yet sit **Pending** (header stays *Ungraded*), and they expire after `Pending expires after` bars. With `Pending entry needs a close back beyond the entry` (default on) a pending plan activates only on a bar that touches the entry **and closes back on the trade side of it** (the checklist's "candle close respecting the gap"); a close through the far edge of the zone before activation expires the plan, and a wick to the stop before activation is a miss, not a loss, because no fill was taken. Off = a touch fills, like a resting limit order. No target is credited on the activation bar itself.

**6 · Stop & targets.** Stop = structure ± buffer. For FVG / IFVG models the default *Stop reference* is **Structure (sweep wick → pivot → gap)**: the sweep wick (the trade-idea extreme, where the thesis actually fails) while it is within `Max stop (ATR ×)` (default 3), else the nearest protected pivot between the entry and that wick, else the far edge of the zone; the checklist's "below / above the rejection wick, 1–2 structure legs behind the entry, protected by internal liquidity". The other references (FVG far edge, Trade Idea High/Low, Latest High/Low = the displacement candle's extreme, Internal High/Low, ATR Stop) remain selectable. The stop is always pushed beyond the entry bar's wick, then beyond the structure by the larger of `Stop buffer (ticks)` and `or ATR ×` (default 4 ticks / 0.1 ATR). For VP models the stop is the hold/retest extreme or the VP level, whichever is farther. A structural stop that is missing, tighter than 0.25 ATR or wider than the cap now **skips the idea** (Status: *Waiting · no structural stop*) instead of substituting an ATR distance; `ATR stop when no structure fits` restores the old fallback (`× ATR`, default 1.0). **Breakeven** (`Breakeven`, default *After TP1*): once TP1 (the first liquidity target) is reached the stop moves to the entry (`SL · BE`); *After 1R or TP1* moves it as soon as price has travelled one risk unit. Targets farther than `max target (ATR ×)` are ignored. Targets: rotation setups reserve slots for their own profile's POC and far boundary; the rest is filled nearest-first from VP levels of every shown role, untaken session highs/lows and PDH/PDL and internal pivots; opposing chart-TF FVG edges only fill slots that are still empty. TP1 must be ≥ `TP1 minimum (R)`, targets keep ≥ `TP separation (R)` apart, and the final list is ordered nearest → farthest.

**Grades.** **B** = one complete model. **A** = VP context in the setup direction **and** real G2S evidence (sweep + reaction) in that direction. **A+** = A plus at least two of: aligned HTF FVG, aligned SMT, external liquidity sweep with reaction, stacked VP levels near the entry. Grades describe evidence, not probability.

**Plan lifecycle.** SL hit → *Setup Invalid* (the sweep thesis stays alive, so a fresh FVG can produce another plan); a stop at the entry after the breakeven move reads *Breakeven · stopped at entry after TP1* and still counts as a win (TP1 reached), or *Breakeven · scratch* (counted with the expired ideas) when 1R was reached but no target. TP3 (or the last available target) hit → *Complete*. An ACTIVE plan that reaches no target within `Active plan times out after` bars ends as *Stale*. The result stays in the panel for `Show plan result for` bars, then the live scanning state is shown again. Only one plan is drawn at a time, a new plan is never saved on the bar the previous one ended (except an opposite-direction idea on the bar a plan was stopped, which is the reversal itself), and a spent VP rotation must be re-earned with a fresh cross. Pending plans (reference not yet reached) show *Waiting for … entry* and draw nothing.

**Selectivity preset.** The first Trade-plan input chooses the rule set. **Strict · A setups only** (default) applies every gate below. **Original · every graded setup** reproduces the invite-only script's behaviour: every complete model is saved as B or better, in any session, internal sweeps count, and there is no bias, confluence, leg, structure-shift, cap or quiet-period gate (IFVG Close enters at the close). Expect several times more ideas and a lower win rate. **Custom** uses the individual inputs. Stops, targets, breakeven and drawings are identical in every preset, and the panel header names the preset in use.

**Selectivity.** These gates decide which qualified models become saved ideas (and alerts). Under *Custom* every one is an input under Trade plan:

* `Quality floor` (default *External sweep (VP-led ideas pass)*): a price-action idea needs a session / PDH / PDL sweep in its direction; VP Hold / VP Retest ideas pass on their own. *External sweep or VP context* is looser, *Off* allows internal-pivot sweeps too.
* `Minimum grade to save` (default **A**: only complete setups with VP alignment are saved and alerted; the Playbook view has no VP, so there the floor is B) and `during` (default **Killzones**, 09:30–11:00 and 13:30–16:00 New York, both editable; Any / NY AM + PM / NY AM only).
* `Require an HTF FVG or SMT confluence` (default on): checklist steps 2 and 3 are optional in the checklist, but an idea is only saved when the sweep or the entry touched a mapped 15m+ gap in its direction, or a fresh SMT points the same way. The grade is unchanged; this is a gate.
* `Displacement leg ≥ ATR ×` (default 2): from the sweep extreme to the farthest print since; no entry until the reversal has actually travelled.
* `Retest must not fill the whole gap` (default on): a retest whose wick trades through the far edge of the zone does not count.
* `Require a market structure shift` (default on, 10-bar lookback): no FVG / IFVG entry before price closes beyond the short-term high / low that preceded the sweep.
* `Ideas per session` (default 1, `A+ may add one`): the checklist's "only trade 1 setup per session unless another A+ appears". A session is a Volume Profile session (AL / NY / PM restart); 0 = unlimited.
* `HTF bias filter` (default *15m+ FVG map*): refuse ideas against the newest active 15m+ mapped gap, and/or against price location relative to the last completed value area. Set to *Off* to allow counter-trend ideas.
* `Cooldown`: after a stop-out, no same-direction idea from the same sweep or the same VP cross.
* Quiet periods: no ideas in the first 5 minutes of a shown session, nor for 15 bars after a two-sided sweep.
* `Zone retest within` 40 bars and `min gap to trade` 0.5 ATR: late retests and thin gaps are drawn but not traded.
* `VP Hold · max distance from level` 1.5 ATR: a hold that already ran away from value is not chased.
* `TP1 minimum when the stop is the ATR fallback` 1.5R and `Targets need a liquidity / VP level`.

Fewer, better-aligned ideas is the usual effect; measure it with the Stats row and the strategy build before trusting it.

**Shadow ideas (past setups stay visible).** With `Shadow ideas` at *Same grade or better* (default) every complete candidate at or above the minimum grade that the other gates refuse (session cap, confluence, HTF bias, outside the window, cooldown, or while a plan is live) is followed through the same lifecycle as a saved plan, without drawings, alerts or session counting; *All grades* follows B setups too, *Off* tags saved ideas only. When it ends it gets the same tag as a saved idea (`B L ✓`, `A S ✗`, `○` expired or scratch) drawn faint beyond its original stop, and the hover text says why it was filtered. One shadow runs at a time and the same zone or level is not followed twice. The panel shows two stats lines: `Saved · …` for the ideas the floor kept and `Filtered · …` for the shadows, so the effect of the gates can be read directly. Tags (saved and shadow, up to 200) stay on the chart for `Keep idea tags for (days)` (default 3) at the chosen `tag size`.

## Settings worth knowing

* **G2S View** – Compass · Complete / Playbook · Price Action (no VP) / Value · Volume Profile (no checklist, FVG or SMT) / Minimal · Clean Chart.
* **Checklist** – Full (adds the six questions and TP rows) / Compact (default) / Minimal / Mobile (single combined table with *Liq Left*) / Off; location Auto or any corner. Every non-obvious input has a tooltip.
* **Sessions** – every session string is editable, in New York time. VP sessions default to Asia/London 18:00–09:29 and New York 09:30–16:59.
* **Volume Profile** – volume distribution (intrabar / bar range / close), value-area method (classic two-row / single-row), target rows (200 by default; actual rows are tick-aligned so the count varies), value-area %, histogram mode, Left/Right placement (Right = next to live price / right-aligned at session end), width in bars (scaled down automatically on higher timeframes), per-level colours, NY PM restart, DEV eligibility delay in bars. DEV levels are drawn from the first bar and carry a `*` until eligible.
* **FVGs** – middle-close filter, minimum size in points or ATR fraction, label mode (`1m` or `1m FVG`), six HTF slots with their own 10-point minimum, placement and right-side offset/width, `Show older gaps within (ATR ×)`, linked-FVG promotion (Auto/On/Off).
* **Trade plan** – FVG entry reference, stop reference (structure ladder by default), buffer in ticks / ATR, optional ATR fallback, max stop and target distance, TP1 minimum and spacing, pending expiry and close confirmation, active timeout, breakeven rule, result window, stats row, minimum grade, trading window, market structure shift, ideas per session, shadow tracking of filtered setups, tag retention and size.

## Backtesting and win rate

Nothing here guarantees a win rate; the G2S documents say it plainly ("A+ can lose. B can win."). Two ways to measure instead of guess:

1. **Stats rows** on the panel: `Saved` = ideas saved on the loaded history, win rate (TP1 reached before the stop), TP3 rate, stop-outs, expired/stale ideas; `Filtered` = the same for the shadow ideas the gates refused. Both update live and reset when the chart reloads. Read it as a filter gauge: more stops than wins means loosen nothing and tighten the gates (quality floor, HTF bias, minimum grade, trading window) until the mix flips, then confirm in the Strategy Tester, where breakeven-after-TP1 and scale-outs decide the actual expectancy.
2. **`G2S_Compass_Strategy.pine`**: the same engine declared as a `strategy`. Add it to a chart and open the Strategy Tester for net profit, profit factor, win rate and the trade list. It enters at the close of the bar on which a plan becomes ACTIVE, scales out a third at each target with the shared stop, moves the stop to breakeven after TP1 (switchable), and flattens when the plan ends. Fills use TradingView's intrabar model, so counts can differ slightly from the indicator's bar-close tracking. Regenerate it from the indicator with `gen_strategy.py` whenever the indicator changes.

Use the grade and session filters, the stop cap and the timeframe to tune selectivity, and compare symbols and timeframes before trading any of it.

### Why the stop was hit so often, and what changed

A review of the engine against the G2S checklist (IFVG model and Continuation model) and the public ICT material found five reasons the earlier builds produced more stop-outs than TP1 hits on a 1m NQ chart, and each has a fix that is now the default:

1. **The stop sat at the displacement candle's extreme** (*Latest High/Low*). On a 1m chart the normal 50–70 % retrace of the displacement leg, which the checklist itself expects ("confirm entry at 0.50–0.705 retrace"), runs through that level. The stop now sits beyond the **sweep wick** (then a protected pivot, then the zone's far edge), where the thesis really fails.
2. **A four-tick buffer** was tagged by ordinary retest spikes and by the second, slightly deeper sweep of the same low. The buffer is now the larger of 4 ticks and 0.25 ATR.
3. **The ATR fallback invented stops** that no structure protected whenever the structural stop was too tight or too wide. Those ideas are now skipped.
4. **IFVG Close entered at the inversion candle's close**, the worst price of the move, and the retest of the zone took the stop. The inversion now arms a pending plan at the IFVG and waits for the retest; pending plans fill only on a close back beyond the entry.
5. **B-grade ideas and all sessions were allowed.** The defaults are now grade A, the two killzones, a required market structure shift, a displacement leg of at least 2 ATR, retests that do not fill the whole gap, an HTF FVG or SMT confluence, one idea per session (A+ may add one) and breakeven after TP1.

None of this guarantees a win rate. Reload the chart and read the Stats row, then the Strategy Tester, before trusting the new mix.

Public references used for the rules (secondary ICT material, not primary): [innercircletraders.net on IFVGs](https://innercircletraders.net/ict-inversion-fair-value-gap/), [theinnercircletraders.com IFVG guide](https://www.theinnercircletraders.com/ict-ifvg-inversion-fvg/), [tradingstrategyguides.com IFVGs in NQ](https://tradingstrategyguides.com/the-complete-guide-to-trading-ict-inversion-fair-value-gaps-in-nq/), [grandalgo.com ICT playbook](https://grandalgo.com/blog/ict-trading-strategy), [quantum-algo.com 2022 model](https://www.quantum-algo.com/blog/guides/ict-2022-model-complete-guide/), [innercircletrader.net 2022 model](https://innercircletrader.net/tutorials/complete-ict-trading-strategy-2022/), [theinnercircletraders.com SMT divergence](https://www.theinnercircletraders.com/ict-smt-divergence/), [smartmoneytrader.co SMT](https://www.smartmoneytrader.co/blog/ict-smt-divergence), [nqbacktest.online Turtle Soup](https://nqbacktest.online/learn/turtle-soup), [smartmoneytrader.co Turtle Soup](https://www.smartmoneytrader.co/blog/ict-turtle-soup-pattern), [ictkillzone.com FVG rules](https://www.ictkillzone.com/ict-fair-value-gap), [thesimpleict.com FVGs](https://thesimpleict.com/fair-value-gaps-fvg-imbalance-ict/).

## Known differences from the invite-only script

* Volume at price is estimated from chart bars (volume split evenly across the rows a bar covers, up/down by candle colour), the same class of estimate the original describes.
* The reaction, hold and target heuristics follow the documents' descriptions; exact thresholds of the original are not public, so expect some setups to grade or time differently.
* Pine Script cannot be compiled outside TradingView. The script was written against the v6 reference and went through an eight-lens review (compile rules, data requests, liquidity, Volume Profile, plan logic, performance, presentation, spec coverage) with every finding fixed, but it has not been run in the Pine Editor from this environment. If the editor reports an error, note the line and message; fixes are usually one-liners.
