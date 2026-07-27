# G2S Trades — Continuation Model

A step-by-step trade flow with built-in confluences, transcribed from the
G2S Trades checklist sheet and expanded with execution notes. Unlike the
reversal-style sweep models (docs 08/10), this one uses a liquidity sweep as
**fuel to rejoin the existing trend**: the stop hunt clears out weak hands,
smart money displaces price back in the trending direction, and you enter on
the gap it leaves behind.

**Summary flow:**
1. Liquidity sweep → 2. Displacement toward the trending direction →
3. FVG respected → 4. Trade execution + risk.
Each ✓ is one step closer to a high-probability trade. **If any stage fails →
WAIT or REASSESS.** Nothing about this model chases.

---

## The six steps

### Step 1 — Look for a liquidity sweep (required)
- Did price take out a recent high or low?
- Qualifying pools: **Asia high/low, London high/low, PDH/PDL**, or any form
  of higher-timeframe buy-side/sell-side liquidity.
- You're looking for a **stop hunt** — a poke through the level, not a clean
  breakout that keeps running.

### Step 2 — Is there a higher-timeframe FVG? (optional confluence)
- Did the sweep happen **inside or near** a HTF fair value gap (1H, 4H+)?
- Is price *reacting/rejecting* from that zone?
- Adds confluence — but it's not required.

### Step 3 — Check for SMT divergence (optional confluence)
- Divergence between correlated instruments (ES vs NQ for indices;
  EURUSD vs GBPUSD, or your pair vs inverted DXY for forex)?
- One made the higher high / lower low and the other didn't?
- Use as a **confidence booster — not a dealbreaker**.

### Step 4 — Displacement candle in the trending direction (required)
- After the sweep, did price **displace back toward its trend**? (Still
  bullish? Still bearish? — the sweep must NOT have changed the trend.)
- You want **huge candle bodies with clear imbalances creating a fresh FVG**.
- This is the signal that smart money is still pushing price with the trend —
  the sweep was fuel, not a reversal.

### Step 5 — Wait for a confirmed FVG entry (required)
- Let price retrace into the fresh FVG from Step 4.
- Did price **respect the FVG on the same timeframe** — a candle closing
  outside it, respecting the gap?
- Once confirmed, **that gap is your entry area**. No confirmation = no entry.

### Step 6 — Set targets & stop-loss (required)
- Minimum **1R** — skip anything less; prefer clearly more.
- Bonus check: are there clear liquidity zones above/below for price to
  reach? Mark them **in advance** as take-profit levels:
  recent swing highs/lows · fair value gaps · session highs/lows · BSL/SSL.

**Stop-loss placement (from the sheet):**
- Below/above the order block, the FVG, or the rejection wick
- 1–2 structure legs behind the entry
- Protected by internal liquidity

**Take-profit plan:**
- **Partial TP at internal liquidity** (the first FVG/minor swing in the way)
- **Final TP** at the 1.0 / 1.272 / 1.618 fib extensions, or at external
  liquidity (equal highs/lows, the swing high/low)

---

## Fibonacci integration at every step (the bonus column)

| Step | Fib use |
|---|---|
| 1 | Identify HTF premium/discount zones (sweep should occur in premium for shorts, discount for longs) |
| 2–3 | Measure the displacement move to project the retrace zone |
| 4 | Confirm the entry inside the **0.50 – 0.705 retrace** of the displacement leg (the FVG usually sits there) |
| 5 | Use **1.0 / 1.272 / 1.618 extensions** as targets |

## Risk & management (built-in discipline)

- **Only trade 1 setup per session** — unless another clean A+ appears.
- **Move stop to breakeven:** after **1R** is achieved, OR when price
  reaches the **first liquidity zone** — whichever comes first.
- All of the toolkit's base rules still apply underneath: 0.25–0.5% risk
  during evaluations, the daily circuit breaker, and news windows checked.

## How it fits with what you already have

- It **shares the prep** with the mentor routine (doc 10): the same
  session/PDH/PDL level map from your 21:00 PHT pre-market checklist feeds
  Step 1 directly.
- It's the **with-trend mirror** of the reversal sweep models: same
  ingredients (sweep, displacement, FVG), opposite intent. On a trending day
  this model keeps you on the right side; on a ranging day the reversal
  models fit better. Manipulation vs displacement (doc 10) is how you tell
  which day you're in.
- Trade it in the killzones — **21:30–23:30 PHT** (NY) or 14:00–17:00 PHT
  (London) — and log every attempt with setup tag `g2s` so the Journal's
  edge-by-setup table can judge it after 30 demo trades.

*Educational notes on third-party material; not financial advice.*
