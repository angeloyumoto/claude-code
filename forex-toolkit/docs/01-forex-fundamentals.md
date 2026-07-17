# Forex Fundamentals

The minimum working knowledge you need before risking money — including someone
else's, on a funded account.

## 1. What you're actually trading

A currency pair is a price: how much of the **quote** currency one unit of the
**base** currency buys. EURUSD = 1.0850 means 1 euro costs 1.0850 dollars.

- **Buy (long) EURUSD** → you profit if the euro strengthens vs the dollar.
- **Sell (short) EURUSD** → you profit if the euro weakens vs the dollar.

There's no "uptick rule" or borrowing — shorting is as natural as buying,
because every trade is simultaneously buying one currency and selling another.

### Pair groups

| Group | Examples | Traits |
|---|---|---|
| Majors | EURUSD, GBPUSD, USDJPY, USDCHF, USDCAD, AUDUSD, NZDUSD | Tightest spreads, deepest liquidity — trade these first |
| Crosses | EURJPY, GBPJPY, EURGBP, AUDNZD | No USD leg; wider spreads, sometimes cleaner trends/ranges |
| Exotics | USDTRY, USDZAR, USDMXN | Wide spreads, gap risk — avoid on funded accounts |

## 2. Pips, lots, and pip value

- A **pip** is 0.0001 for most pairs, 0.01 for JPY pairs. Brokers quote an
  extra digit (a "pipette" = 0.1 pip) — don't confuse the two.
- A **standard lot** = 100,000 units of base currency. Mini = 10,000 (0.1 lot),
  micro = 1,000 (0.01 lot).

**Pip value per standard lot, in a USD account:**

| Pair type | Example | Pip value per 1.00 lot |
|---|---|---|
| USD is the quote | EURUSD, GBPUSD | $10 fixed |
| USD is the base | USDJPY, USDCAD | (pip size × 100,000) ÷ current rate |
| JPY cross | EURJPY, GBPJPY | ¥1,000 ÷ current USDJPY |
| Other cross | EURGBP | 10 × quote-currency-to-USD rate |

Example: USDJPY at 150.00 → pip value = (0.01 × 100,000) ÷ 150 ≈ **$6.67/lot**.

The position-size calculator in `index.html` handles all four cases.

## 3. Leverage and margin

Leverage lets you control a large notional with a small deposit: at 1:100, a
1-lot EURUSD position (~$108,500 notional) locks up ~$1,085 of margin.

Leverage does **not** change your risk — your stop distance and position size
do. Two traders with 1:30 and 1:500 leverage who both risk 0.5% with a 20-pip
stop have identical risk. High leverage only matters because it *lets* you
oversize. On a funded account, think entirely in "% of account risked per
trade" and let margin be an afterthought (checked with the margin calculator).

## 4. Sessions and when to trade

Forex trades 24/5, but volume is very uneven (times in UTC):

| Session | Hours (UTC) | Character |
|---|---|---|
| Sydney | 21:00–06:00 | Thin; spreads widest right at the open after rollover |
| Tokyo | 00:00–09:00 | Range-bound; JPY/AUD pairs most active |
| London | 07:00–16:00 | ~35% of global volume; trends and breakouts start here |
| New York | 13:00–22:00 | USD news; strong moves, afternoon often fades |
| **London/NY overlap** | **13:00–16:00** | Deepest liquidity of the day — best fills, tightest spreads |

Practical rule: if you can only trade two hours a day, make it the London open
(07:00–09:00 UTC) or the overlap (13:00–16:00 UTC). Avoid the rollover hour
(~21:00–22:00 UTC) when spreads spike.

### Philippine time cheat sheet (PHT = UTC+8, no daylight saving)

Times below are for UK/US **summer** (roughly late March–early November).
Manila's clock never changes, but London and New York fall back an hour in
winter — so add **one hour** to every London/NY row from November to March.
The Market clock in the app computes the exact current conversion for you.

| Market event | UTC (summer) | Philippine time |
|---|---|---|
| Sydney session | 21:00–06:00 | 05:00–14:00 PHT |
| Tokyo session | 00:00–09:00 | **08:00–17:00 PHT** — your morning |
| London open / session | 07:00–16:00 | **15:00–24:00 PHT** — your afternoon |
| London killzone (ICT) | 06:00–09:00 | **14:00–17:00 PHT** |
| New York session | 13:00–22:00 | **21:00–06:00 PHT** — your evening |
| NY killzone (ICT) | 12:30–15:30 | **20:30–23:30 PHT** |
| NYSE stock-market open | 13:30 | 21:30 PHT |
| London/NY overlap | 13:00–16:00 | **21:00–24:00 PHT** — deepest liquidity |
| NFP / CPI releases | 12:30 | 20:30 PHT |
| FOMC rate decisions | 18:00 (stmt) | 02:00 PHT (next day) |
| New York close / rollover | 21:00–22:00 | **05:00–06:00 PHT** — avoid: widest spreads |
| Weekly open (Mon) / close (Sat) | Sun 21:00 / Fri 21:00 | Mon 05:00 / Sat 05:00 PHT |

**Best windows from the Philippines:**

1. **20:30–24:00 PHT** — NY killzone + London/NY overlap. Prime liquidity in
   your evening; the most practical window around a day job.
2. **15:00–18:00 PHT** — London open. The other world-class window, in your
   afternoon.
3. **08:00–11:00 PHT** — Tokyo morning, for JPY/AUD pairs if you trade early.

Avoid 04:00–08:00 PHT (rollover then thin Sydney-only hours) and be careful
after midnight PHT — late-NY drift plus your own fatigue is a poor mix.

## 5. Costs: spread, commission, swap, slippage

- **Spread** — the buy/sell gap; your entry cost. On majors, 0.1–1.5 pips.
  A 1-pip spread against a 10-pip stop is 10% of your risk — one reason
  very tight stops underperform.
- **Commission** — raw-spread accounts charge ~$3–3.50 per lot per side instead
  of a wider spread. Prop accounts usually mirror this.
- **Swap/rollover** — interest paid or earned for holding overnight (charged
  ~22:00 UTC, triple on Wednesdays). Matters for swing trades.
- **Slippage** — fills worse than requested, mainly around news. Assume it;
  never size so a few pips of slippage breaks a limit.

## 6. News and the economic calendar

High-impact releases — **NFP** (first Friday, 13:30 UTC), **CPI**, central-bank
rate decisions (**FOMC**, ECB, BoE) — move majors 30–100+ pips in seconds, with
spreads widening 5–10× at the moment of release.

- Keep an economic calendar open every session; filter to high-impact events
  for the currencies you trade.
- Many prop firms restrict opening trades within minutes of high-impact news —
  a rule breach can void a payout even on a winning trade. **Read your firm's
  news rule.**

## 7. Reading a chart — the minimal toolkit

You need less than you think:

1. **Trend** on the daily and H4: higher highs & higher lows = uptrend, the
   reverse = downtrend, neither = range. (A 50-period EMA slope is a decent
   proxy.)
2. **Levels**: horizontal lines where price clearly reversed more than once.
   Round numbers (1.1000, 150.00) act as magnets and barriers.
3. **One confirmation signal** you trust — e.g. engulfing candles or pin bars
   *at a level*, or a fast/slow EMA cross. Candlestick signals mean little in
   the middle of nowhere; they matter at levels.

Add indicators only when your journal shows a specific, recurring problem they
would solve.

## 8. Order types you'll actually use

- **Market order** — fill now at current price.
- **Limit order** — buy below / sell above current price (entering on
  pullbacks).
- **Stop order** — buy above / sell below (entering on breakouts).
- **Stop-loss / take-profit** — attached to the position; on a funded account a
  hard stop-loss on *every* trade is non-negotiable (some firms mandate it).

## Glossary quick-reference

| Term | Meaning |
|---|---|
| R / R-multiple | Profit measured in units of initial risk (+2R = won twice what you risked) |
| Drawdown | Decline from an equity peak |
| Equity vs balance | Balance = closed trades; equity = balance ± open P/L. **Limits are checked on equity.** |
| Breakeven win rate | Win rate needed to net zero at a given R:R = 1 ÷ (1 + R:R) |
| Position sizing | Choosing lots so stop distance × pip value = your fixed dollar risk |
