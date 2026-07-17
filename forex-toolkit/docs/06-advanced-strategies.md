# Advanced Strategies

Five more strategies beyond the core four in `03-strategies.md`. "Advanced"
means they demand more chart-reading judgment or stricter filters — not that
they make more money. The same laws apply: pick one, trade it exclusively for
30+ journaled trades, keep it only if expectancy is positive, and run every
trade through the standard risk framework (0.5% risk, chart-derived stops,
≥1.5R, daily circuit breaker).

Numbering continues from the core four.

---

## Strategy 5 — Break and Retest

Best for: traders who keep getting trapped chasing breakouts · Pairs: majors · Timeframes: H1–H4

**Idea:** most clean breakouts pull back to the broken level before the real
move. Entering on the retest instead of the break improves both your price and
your information — a level that holds on retest has *proven* the flip from
resistance to support.

**Rules**

1. Level quality first: the level must have been respected at least twice
   before the break, and be obvious enough that you could mark it blindfolded.
   Obscure levels don't get retested; obvious ones do, because everyone sees
   them.
2. The break: a full-bodied H1/H4 **close** through the level — not a wick.
   Stronger if accompanied by a session open (London/NY) or a fresh daily
   high/low.
3. Entry: limit order at the broken level (or the nearest untested M15 supply/
   demand zone just in front of it). No entry without the retest — if price
   runs without you, the strategy worked; missing non-setups is the point.
4. Invalidation/stop: beyond the swing that formed after the break, or beyond
   the level by ~1× ATR(14) of your entry timeframe. A retest that closes back
   through the level is a failed break — exit immediately, don't wait for the
   stop.
5. Target: next structural level; minimum 2R or skip. Optional runner behind
   H1 swings.
6. Skip: ranging days (level breaks without follow-through), and any break
   caused directly by a news spike — those retrace unpredictably.

---

## Strategy 6 — Liquidity Sweep Reversal (stop-hunt fade)

Best for: experienced traders during London/NY opens · Pairs: EURUSD, GBPUSD, GBPJPY · Timeframes: M15–H1 entries off H4/D1 map

**Idea:** obvious price extremes (equal highs, yesterday's low, Asian range
edges) accumulate resting stop orders — a liquidity pool. Price is routinely
pushed *through* such pools, fills the larger players, and reverses. The
tradeable event is not the sweep — it's the **failure** to continue: a close
back inside the range that traps everyone who chased.

**Rules**

1. Map liquidity the night before: equal highs/lows, previous day high/low
   (PDH/PDL), previous week high/low, session extremes. Two or more markers
   clustered together = a high-quality pool.
2. The sweep: price spikes through the pool and **closes back inside the
   prior range within 1–3 candles** (M15/H1). The wick beyond the level is
   the signature. A close that holds beyond the level is a breakout, not a
   sweep — stand down.
3. Entry: on the close of the reclaim candle, or on the retest of the swept
   level from the other side. Confluence bonus: the sweep tags a higher-
   timeframe level or a fib zone of the prior leg.
4. Stop: a few pips beyond the sweep's extreme wick. This is naturally tight —
   which is exactly what gives the setup its 2–4R potential.
5. Targets: first the mid-range, then the opposite side of the range /
   opposing liquidity pool. Take half at ~1.5R, trail the rest.
6. Filters: trade it **with** the higher-timeframe bias when possible (sweep
   of lows in an uptrend = best case). Counter-trend sweeps: half risk. Never
   fade a sweep driven by a scheduled news release.

**Why it works when it works:** it's the mechanical footprint of stop-runs —
you're entering where the crowd was just forced out, with their stops as your
fuel. Why it fails: in strong trends, "sweeps" are just continuation; the
reclaim-close requirement and the trend filter are what keep the win rate
acceptable.

---

## Strategy 7 — Fibonacci Confluence Pullback

Best for: pullback traders wanting a more precise entry map · Pairs: any trending major · Timeframes: H4 context, H1 entry

**Idea:** a fib retracement drawn over the last impulse leg gives you a
graduated map of the pullback. Fib levels have no magic — their value is that
enough traders watch them; the edge only appears where a fib level **stacks
with independent evidence**.

**Rules**

1. Context: established H4 trend (as in the core pullback strategy). Draw the
   fib from the start to the end of the most recent impulse leg.
2. Zone of interest: 38.2%–61.8%. Shallow (38.2%) pullbacks appear in strong
   trends; deep (61.8%) in tired ones. Beyond 70% → trend in doubt, no trade.
3. **Confluence requirement (the actual rule):** act only where a fib level
   coincides within a few pips with at least one of — prior structure
   (old high/low), the H4 20/50 EMA zone, a round number (1.0900), or an
   untested demand/supply zone. No confluence, no order.
4. Trigger: H1 rejection candle at the confluence zone (engulfing / pin).
   Aggressive variant: resting limit at the zone with half size, other half
   on the trigger candle.
5. Stop: beyond the 78.6% level or the swing low/high, whichever is nearer.
6. Targets: prior extreme first, then the 127%/162% extensions for runners.
   Measured expectation: 2R standard, 3R+ in strong trends.

---

## Strategy 8 — Divergence Reversal at Higher-Timeframe Levels

Best for: patient counter-trend traders with solid risk discipline · Pairs: majors, gold · Timeframes: D1/W1 levels, H4 confirmation

**Idea:** momentum fades before price turns. When price grinds to a new
extreme at a *major* level but RSI refuses to confirm, the move is running on
fumes. Divergence is a weak signal in isolation and a decent one at a weekly
level — location does most of the work.

**Rules**

1. Location gate: price must be **at** a weekly/daily level or a well-defined
   channel extreme. Mid-range divergence is not a setup; skip regardless of
   how pretty the RSI looks.
2. The signal: price makes a higher high (lower low) while RSI(14) makes a
   lower high (higher low), on H4 or D1. Multi-touch divergence (three peaks)
   is stronger than two.
3. Confirmation is mandatory: wait for a reversal candle (engulfing, pin) or
   a break of the most recent minor swing on H4. Divergence without
   confirmation "resolves" by trending another 200 pips more often than
   beginners believe.
4. Stop: beyond the extreme plus buffer. Size at **half your normal risk** —
   counter-trend trades carry structurally lower win rates.
5. Targets: nearest H4 structure (≈1.5–2R) as the base case; hold a partial
   for the 50% retrace of the prior trend leg only if a new structure forms.
6. Hard filters: no divergence trades on days with major news for the pair,
   never against a fresh central-bank policy shift, and never as an "it's too
   high" opinion — the level, the divergence, and the confirmation must all
   be present.

---

## Strategy 9 — Moving-Average Crossover Baseline (fully mechanical)

Best for: measuring your discretion, algorithmic temperaments, absolute beginners · Pairs: 2–3 trending majors · Timeframes: H4

**Idea:** a fully mechanical system with zero judgment. Its expectancy is
modest, but it serves two real purposes: (1) a training-wheels system whose
every rule is objective, and (2) a **benchmark** — if your discretionary
results can't beat it over 50 trades, your discretion is subtracting value.

**Rules**

1. Regime filter: trade longs only while price is above the daily 200 EMA and
   its slope is up (shorts mirrored).
2. Entry: H4 20 EMA crosses above the 50 EMA; enter at the close of the
   crossover candle.
3. Stop: below the most recent H4 swing low (max 1.5× ATR(14)).
4. Exit: opposite crossover, or a fixed 2R — pick ONE variant and keep it for
   the whole 30-trade test.
5. Anti-whipsaw filter: skip signals when ADX(14) < 20, and skip pairs inside
   an obvious multi-week range.
6. Expect: low win rate (35–45%), occasional large winners, painful sideways
   stretches. The system's entire edge is that it never misses the big trend
   — which only materializes if you take *every* qualifying signal.

---

## Picking from the full menu (strategies 1–9)

| Your situation | Best fit |
|---|---|
| Learning execution & discipline | 9 (mechanical), then 2 (pullback) |
| Limited screen time | 4 (HTF swing), 2 |
| Morning session availability | 1 (London breakout), 6 (sweep reversal) |
| Want precision entries in trends | 5 (break & retest), 7 (fib confluence) |
| Experienced, comfortable counter-trend | 6, 8 — at half risk |

Trend-following setups (1, 2, 5, 7, 9) forgive imperfect entries; reversal
setups (6, 8) punish them. Whatever you pick: one strategy at a time, 30
journaled trades, expectancy decides — and near a prop-firm loss limit, only
trend setups, never reversals.

*Educational content, not financial advice. No strategy has a guaranteed
outcome; all involve risk of loss.*
