# Trading Strategies

Four complete strategies, each with a defined market context, entry trigger,
stop, target, and management rules. They are starting frameworks, not
guarantees — validate any of them with 30+ journaled trades (demo is fine and
free) before risking evaluation fees.

**Meta-rule:** pick ONE strategy and one or two pairs. Trade only that, journal
everything, and judge it on expectancy after 30 trades — not on the last three
results. Strategy-hopping after a losing streak is the most common way to never
find an edge.

---

## Strategy 1 — London Breakout (session momentum)

Best for: traders available 07:00–11:00 UTC · Pairs: EURUSD, GBPUSD · Timeframes: M15/M30

**Idea:** the Asian session builds a tight range; the London open often resolves
it with a directional push.

**Rules**

1. Mark the high and low of 00:00–07:00 UTC (the Asian range).
2. Valid day: range is roughly 15–50 pips and no high-impact EUR/GBP/USD news
   before 10:00 UTC. Skip otherwise.
3. Entry: after 07:00 UTC, wait for an M15/M30 candle **close** beyond the
   range (not just a wick). Preferred entry is the **retest** — a limit order
   at the broken level. Aggressive: enter on the closing candle.
4. Stop: below the retest swing (conservative: mid-range). Typically 10–20
   pips.
5. Target: 1.5–2R fixed, or the previous day's high/low if closer. Optional:
   take half at 1R, trail the rest behind M15 swings.
6. Time stop: nothing by 11:00 UTC → close the trade; the edge is the opening
   drive.

**Fails when:** ranging/holiday markets produce fake breaks both ways. The
close-beyond + retest requirement filters most; the daily-stop rule absorbs the
rest.

---

## Strategy 2 — Pullback Trend-Following (the evaluation workhorse)

Best for: almost everyone; ideal risk profile for funded accounts · Pairs: any major · Timeframes: D1/H4 context, H1 entry

**Idea:** trade with an established trend, entering on retracements to value
instead of chasing extension.

**Rules**

1. Trend filter (both must agree): price above a rising 50 EMA on D1 **and**
   H4 → longs only. Below a falling 50 EMA on both → shorts only. Mixed → no
   trade on this pair.
2. Setup zone: price pulls back to the 20–50 EMA area on H4/H1, **or** to the
   most recent broken structure level (old resistance retested as support).
3. Trigger: a rejection candle at the zone on H1 — bullish engulfing or a pin
   bar with its wick into the zone (mirror image for shorts). No trigger, no
   trade; a zone alone is not an entry.
4. Stop: beyond the pullback swing low/high, plus a few pips' buffer.
   Typically 20–40 pips on H1 entries.
5. Target: the prior trend high/low, or fixed 2R — whichever is nearer.
   Runner variant: half off at 2R, trail the rest behind H4 swings.
6. Filter: skip if the pullback has retraced more than ~70% of the prior leg —
   deep retracements signal a weakening trend.

**Why it suits evaluations:** few trades, high average R, low screen time, and
losses arrive singly rather than in session-long clusters.

---

## Strategy 3 — Range Trading at Extremes

Best for: patient traders during news-quiet weeks · Pairs: EURGBP, AUDNZD, or majors in consolidation · Timeframes: H1/H4

**Idea:** in a well-defined range, price spends most of its time rejecting the
extremes; fade them with confirmation.

**Rules**

1. Qualify the range: at least two clear touches of both a horizontal support
   and resistance, at least ~40 pips apart, on H4.
2. Entry: price touches an extreme **and** prints a rejection signal there
   (pin bar/engulfing on H1). Never fade a level without the signal — a
   touch that doesn't reject is often the breakout starting.
3. Stop: beyond the extreme plus buffer (just past the range's most recent
   false-break wick).
4. Target: mid-range (conservative, ~1–1.5R) or the opposite extreme
   (aggressive, 2R+). Mid-range partial + far-side runner is a good blend.
5. Kill switch: an H4 **close** outside the range voids it — close any open
   fade, delete pending orders, and stand aside (or switch to breakout-retest
   logic in the new direction).
6. Never fade the range immediately before high-impact news for either
   currency; ranges break on news.

---

## Strategy 4 — Higher-Timeframe Swing (small time budget)

Best for: traders with a day job — 20–30 min/evening · Pairs: majors + EURJPY/GBPJPY · Timeframes: W1 context, D1 entry

**Idea:** the pullback strategy, one level up: daily-chart entries at weekly
levels, positions held days to weeks.

**Rules**

1. Context: weekly trend direction (higher highs/lows or lower highs/lows).
   Mark weekly support/resistance levels — there are only a few that matter.
2. Entry: daily close showing rejection (pin/engulfing) at a weekly level in
   the trend direction. Enter next day at market or on a 50% retrace limit of
   the signal candle.
3. Stop: beyond the signal candle's extreme — usually 40–80 pips. The position
   size calculator makes wide stops safe: same 0.5% risk, just fewer lots.
4. Target: next weekly level, minimum 2R; hold for 3R+ when the weekly trend
   is strong. Trail behind daily swings once past +1.5R.
5. Housekeeping: check swap costs on held pairs (JPY crosses can be
   expensive); confirm your funded account allows weekend holding — if not,
   flatten Friday and re-enter on a fresh signal.

---

## Choosing between them

| You have… | Start with |
|---|---|
| Mornings free (UTC), like fast feedback | London Breakout |
| A few flexible hours, want the best risk profile | Pullback Trend-Following |
| Patience and a quiet news calendar | Range at Extremes |
| A day job and 30 min/evening | Higher-Timeframe Swing |

All four obey the same risk framework (see `02-risk-management.md`): 0.5%
risk, chart-derived stops, ≥1.5R targets, daily circuit breaker. The strategy
decides *where*; risk management decides *how much* — and how much is what
keeps the funded account.
