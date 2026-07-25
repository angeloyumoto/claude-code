# Mentor Course Notes — The "Level-to-Level" ICT System

Distilled from a mentor's full ICT course (mind-map + video course). This is
a *variant* of the smart-money school in `08-smart-money-concepts.md` with
its own vocabulary and several genuinely distinctive ideas — most notably:
**no daily bias**, **time-based liquidity as the level filter**, and
**flip logic** that turns failed levels into the next trade.

> Same honesty rule as always: the income claims around this material are
> not verifiable, and the course is also a funnel for a paid mentorship.
> That doesn't make the method wrong — it's coherent and testable — but the
> proof that matters is your own 30-trade demo backtest in the Journal tab.

---

## 1. The core lens: Manipulation vs Displacement (MvD)

Everything in this system reads price through how it treats highs and lows:

- **Manipulation** — price pokes *beyond* a high/low but **fails to
  displace**: no energetic follow-through, no fair value gap left behind,
  often just a long wick. Smart money used the level's liquidity →
  **expect reversal**.
- **Displacement** — price pushes through structure **rapidly**, leaving
  fair value gaps. No one opposed the move at the level → **expect
  continuation**.

Practical rules that fall out of this:

1. Every time price takes a high, ask: did it displace (continue) or
   manipulate (reverse)?
2. When a leg **fails to displace** through a level, expect the swing point
   that the failed leg created to get traded back into.
3. When a leg **displaces**, the next high/low in that direction is the
   target, and the FVGs it left are your continuation entries.
4. **Consistency theory:** one-sided candles (all same direction) =
   displacement = high probability to continue. Indecisive mixed candles =
   low probability — leave it alone.

## 2. Structure toolkit (his FVG taxonomy)

- **FVG** — 3-candle formation; expansive middle candle leaves a gap between
  wick 1 and wick 3. Shows displacement and a desire to reach further.
- **BSG (Break-in-Structure Gap)** — an FVG created *while breaking
  structure*; "the lifeblood of a trend" and the highest-probability gap.
  Must obey consistency theory.
- **Failed BSG** — a BSG that gets closed through / inverted → target the
  opposing swing point; the level flips to the other side.
- **Inflection Point (IP)** — extend the level of the structure that was
  broken *into* the gap; where trapped traders' breakeven stops cluster.
  IP + BSG = key level; expect displacement away from an IP if the move is
  real.
- **iFVG (inverted FVG)** — an FVG that price closes through against its
  direction. High-probability when it happens at two-sided gaps, at BSGs, or
  **after a liquidity sweep**. Confirmed iFVG → look for opposing liquidity.
  Used for entries and bias.
- **Premium/Discount** — fib drawn over the leg with only 0 / 0.5 / 1
  marked. 0.5 = fair value. Sell legs from premium FVGs, buy from discount.
  Reversals are likely in premium/discount *of the previous leg*.

## 3. IRL → ERL: how price actually travels

"Price is always moving to a high, a low, or an FVG."

- **External Range Liquidity (ERL)** = highs/lows.
- **Internal Range Liquidity (IRL)** = FVGs inside the range.
- The cycle: price trades into IRL (an FVG), then moves to ERL (the
  high/low), creating fresh IRL on the way — repeat. Higher-timeframe IRL
  tapped → look on the lower timeframe for the reversal/continuation
  (his "market maker model": HTF IRL/ERL = LTF MMXM).
- **Timeframe alignment pairs:** Monthly→Daily, Weekly→H4, Daily→H1,
  H4→M15, H1→M5, **M15→M1** (the pairing his intraday model runs on).

## 4. Time-based liquidity (the mechanical filter)

His biggest claim: which highs/lows matter is decided by **time**. Sessions
are marked in **New York time** — note these are *his* session blocks, not
the UK-London hours used elsewhere in this toolkit:

| Block (NY time) | In Philippine time (summer; +1h Nov–Mar) |
|---|---|
| True week open — Mon 18:00 Sun | Mon 06:00 PHT |
| Asia session 18:00–00:00 | **06:00–12:00 PHT** |
| London session 00:00–06:00 (focus 01:30–04:30) | **12:00–18:00 PHT** (focus 13:30–16:30) |
| NY AM session 06:00–12:00 (focus 09:00–10:30) | **18:00–24:00 PHT** (focus 21:00–22:30) |
| NY PM session 12:00–18:00 | 00:00–06:00 PHT |
| Midnight open 00:00 | 12:00 PHT |
| NY open price 07:30 · equities open 09:30 | 19:30 PHT · **21:30 PHT** |

**Levels to mark every day (the whole list):** previous week high/low,
previous day high/low, Asia session high/low, London session high/low,
the opening prices above, and 1H/4H/Daily swing points + FVGs. Only levels
**not yet traded into** count. Mark session levels after 09:00 NY
(21:00 PHT); trading starts 09:30 NY (21:30 PHT).

**Weekly rhythm:** Monday accumulation, Tuesday manipulation, Wednesday
manipulation/distribution, Thursday distribution/continuation/reversal —
expect AMDX or XAMD in any defined range based on the previous cycle.

## 5. No daily bias — scenarios instead

His most contrarian teaching, backed by his own journal data (55% win rate
trading *with* his bias vs ~70% with no bias): **don't pick a direction
before the session.** Instead:

- Map the levels, then write **scenarios**: "if price rejects level A →
  trade toward level B; if A flips → trade toward C."
- Your job is to *react* to how price treats each level, not predict which
  one gets hit. Locking in a bias makes your brain filter out
  contradicting evidence (his "IKEA effect" — you defend the plan because
  you built it).
- You may *lean* a direction to size risk up/down — but never refuse the
  opposite trade the market hands you.

## 6. Confirmations (what you need at a level)

At a key level you need **2+ lower-timeframe confirmations** before entry.
The menu, roughly in order of earliness:

1. **SFP (swing failure pattern)** — a candle takes a high/low and can't
   even close beyond it. Earliest, most aggressive; pair with others.
2. **CSD (change in the state of delivery)** — candle *bodies* flipping:
   a down-close candle's body gets engulfed by an up-close candle (or vice
   versa) at the level. Turn candle wicks off to see it. His favorite
   entry — best risk:reward.
3. **iFVG** — a gap inverting against its direction at the level.
4. **MSS (market structure shift)** — displacement through a swing against
   the old trend. The latest, most conservative confirmation. (SFP, CSD,
   and iFVG all typically happen *before* the MSS prints.)
5. **Unicorn** — breaker block + FVG overlapping after a sweep — his
   highest-grade single pattern.
6. **SMT divergence** — correlated market disagreement (indices together;
   FX vs inverted DXY) at the level.

## 7. The all-in-one intraday model (step by step)

His actual daily trading procedure (15m levels → 1m entries):

1. **Prep (30 min before the 21:30 PHT open):** mark previous day/week
   highs/lows on the daily; mark session blocks (12:00 AM / 6:00 AM /
   6:00 PM NY = 12:00 / 18:00 / 06:00 PHT) on the 15m; mark Asia + London
   block highs/lows; keep only untapped levels. Check ForexFactory red
   folder — red news days = expansion (he *wants* them, sized properly);
   no-news days = likely chop, risk less. Never *in* a trade right before
   a red release (slippage).
2. **Wait for 21:30 PHT.** Confirmations that print before the open don't
   count — waiting raises the win rate.
3. **When price reaches (or moves away from) a key level**, drop to the 1m
   and demand: a **run on minor liquidity against the move** (a small sweep
   — bonus if into an FVG), then **CSD or iFVG** in the trade's direction.
4. **Enter on the confirmation close.** Stop: beyond the candle bodies for
   scalps *between* levels (tight — the move shouldn't come back); beyond
   the swing for reversals *at* levels (more room). Target: the **next
   untapped time-based level**. He takes trades down to ~1.5R because the
   win rate carries it.
5. **Manage:** every time a swing gets run against your direction and price
   continues ("stop run"), trail your stop behind it. At the target level,
   don't auto-exit — **price-waiting**: keep trailing 1m swings and let the
   expansion pay 5R–8R when it runs. Trimming beats breakeven stops.
6. **Flip logic:** if a level gives you full bullish confirmation, you
   enter, and sellers *immediately* print a bearish CSD — cut at once
   (tiny loss) and reverse toward the next level down. A failed level is
   information, not an insult: it names the next destination.

## 8. Risk management (his numbers)

- **Position sizing formula:** allowed R per trade = *total drawdown you'll
  tolerate ÷ number of consecutive losses you consider likely*.
- **Ascending/descending risk:** start ~1%; drop to 0.5% while in
  drawdown; rise to ~2% only when 2%+ in profit on the period (funded
  accounts: risk the firm's money, not your floor).
- **Hard daily stop: 2 losses OR 1 banked win = walk away.** (The one-win
  variant is optional in the app's Discipline Guard — it's a
  prop-evaluation pacing tactic, not a law.)
- Trimming > breakeven stops; move stops only behind structure/stop-runs.
- Beginner phase: tiny fixed size, one micro, same every time — the goal
  is surviving and collecting data, not earning.
- His losing-streak table point: even at a 70% win rate, a 3-loss streak
  in a career is ~certain. Streaks are normal; the rules absorb them.

## 9. SOP (the boring parts he credits for the results)

- Morning: sleep + a deliberate routine, or don't trade. 30 minutes of
  prep before the open, every day.
- Journal **by setup and by time of day** — his breakthroughs (dropping
  daily bias, finding his losing hours) came from filtering journal data,
  not from new concepts. The Journal tab's setup/session breakdowns do
  exactly this.
- Review winners for how much further they ran → justify price-waiting.

## 10. How this fits the rest of the toolkit

| Topic | This mentor | Toolkit baseline (docs 02/08) |
|---|---|---|
| Bias | None — scenarios | Power-of-Three daily bias lens |
| Session marks | NY-time blocks (18:00/00:00/06:00) | UK/UTC sessions + ICT killzones |
| Entry confirm | CSD / iFVG / SFP, 2+ required | 5m BOS or iFVG → 1m BOS |
| After a loss | Flip toward next level | Stand down, re-evaluate |
| Daily stop | 2 losses or 1 win | 2 losses or −1.5% |
| Risk | 1% ↓0.5% ↑2% dynamic | Flat 0.25–0.5% for evaluations |

They're compatible: the toolkit's flat 0.5% + 2-loss stop is the *safer*
evaluation profile; his dynamic risk and flip logic are things to graduate
into **after** your journal proves the base edge. Where they disagree
(session times, bias), pick one convention per 30-trade test — never mix
mid-test.

---

## Appendix — Daily pre-trade routine in Philippine time (print this)

Built into the app's Planner tab as a daily checklist. Your schedule:

| PHT | What happens |
|---|---|
| **21:00** | Start pre-market analysis (30 min, his rule) |
| **21:30** | New York open — trading begins |
| **21:30–23:30** | Your prime window (his NY AM focus 09:00–10:30 ET = 21:00–22:30 PHT sits inside it) |
| **23:30–00:00** | Wind down — late chop isn't worth your sleep |
| 14:00–17:00 | Afternoon alternative: London killzone, if evenings are busy |
| 20:30 | NFP / CPI releases · FOMC at 02:00 — check the calendar first |

**1 · Head check**
1. Slept properly + ran your routine — if not, no trading tonight. Non-negotiable.
2. ForexFactory red folder checked for your pairs/USD. News day = expansion
   (fine, size properly); quiet day = likely chop, risk less. Never *in* a
   trade going into a red release; check the firm's news rule.

**2 · Mark the levels (15m chart)**
3. Previous day's high & low (from the daily chart).
4. Previous week's high & low.
5. Vertical session lines at **06:00, 12:00, 18:00 PHT** (= 6 PM, midnight,
   6 AM New York).
6. Asia block (06:00–12:00 PHT) high & low.
7. London block (12:00–18:00 PHT) high & low.
8. Grey out anything already tapped — only untouched levels are draws.

**3 · Higher-timeframe read**
9. 4H: mark FVGs, swing points, inflection points; classify recent legs —
   displacement (continuation) or manipulation (reversal)?
10. 1H: swings and gaps. Obvious levels only; a clean chart is a decision aid.

**4 · Scenarios & risk (no bias)**
11. Write if-then scenarios: "reject A → toward B; flip A → toward C."
12. Update the Funded Tracker; know today's max risk; guard armed
    (2 losses or 1 banked win = done).

**From 21:30:** watch the 15m for a tap of a marked level → drop to the 1m →
demand the mini-sweep against the move plus CSD or iFVG → enter on the close,
stop past the wick/bodies, target the next untapped level. Journal it, grade
it, close the platform.

*Educational notes on third-party material; not financial advice, and no
affiliation with or endorsement of the course's paid programs.*
