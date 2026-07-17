# Forex & Prop-Trading Glossary

Every term you're likely to meet on charts, in broker documentation, and in
prop-firm rulebooks — grouped by topic, plain-English definitions.

## Market basics

- **Base / quote currency** — in EURUSD, EUR is the base (what you're buying
  or selling), USD is the quote (what it's priced in).
- **Pip** — the standard price increment: 0.0001 for most pairs, 0.01 for JPY
  pairs. Profit/loss is usually counted in pips.
- **Pipette (point)** — one-tenth of a pip; the fifth decimal brokers quote.
- **Lot** — 100,000 units of base currency. **Mini lot** = 10,000 (0.1),
  **micro lot** = 1,000 (0.01), **nano** = 100 (0.001, rare).
- **Bid / ask** — the price you can sell at / buy at, respectively.
- **Spread** — ask minus bid; your built-in cost on every trade.
- **Majors / crosses / exotics** — USD pairs with tight spreads / non-USD
  pairs / thin emerging-market pairs (avoid the last on funded accounts).
- **Long / short** — betting the base currency rises / falls. Both are
  equally natural in forex.
- **Bullish / bearish** — expecting price up / down.
- **Liquidity** — how much can be traded without moving price. Deepest at
  the London/NY overlap; thinnest at rollover and holidays.
- **Volatility** — how much price moves. Measured e.g. by ATR. More
  volatility = wider stops = smaller positions for the same risk.
- **Rollover** — the daily settlement moment (~22:00 UTC) when swap is
  charged and spreads briefly widen.
- **Gap** — price jumping over levels with no trading between, mainly at the
  weekly open. Stops execute at the next available price, not the stop price.

## Orders & execution

- **Market order** — execute immediately at the current price.
- **Limit order** — execute at your price or better: buy below / sell above
  the market. Used for pullback and retest entries.
- **Stop order** — becomes a market order at your trigger: buy above / sell
  below. Used for breakout entries.
- **Stop-loss (SL)** — the order that closes a losing position at your
  pre-chosen invalidation price. Non-negotiable on every trade.
- **Take-profit (TP)** — the order that banks the win at your target.
- **Trailing stop** — a stop that follows price at a distance, locking in
  gains on runners.
- **Breakeven (BE)** — moving the stop to the entry price, making the worst
  case ≈ 0R.
- **Partial close** — closing a fraction of the position (e.g. half at 1.5R)
  and letting the rest run.
- **Slippage** — difference between requested and filled price; expect it
  around news.
- **Requote** — broker rejecting your price in fast markets (mostly a
  market-maker phenomenon).
- **Execution types** — *market maker* (broker takes the other side), *STP/ECN*
  (orders passed to liquidity providers; raw spreads + commission).

## Account & sizing

- **Balance** — closed-trade account value. **Equity** — balance ± open
  P/L. **Free margin** — equity minus margin in use. *Prop-firm limits are
  measured on equity.*
- **Leverage** — exposure multiple vs your capital (1:30–1:100 typical).
  Enables oversizing; doesn't cause it.
- **Margin** — collateral locked while a position is open. **Margin call /
  stop-out** — broker warning / forced liquidation when equity can't support
  open positions.
- **Notional value** — full size of the position (lots × 100,000 × price).
- **Pip value** — dollars per pip for your position size; depends on pair and
  account currency (the app calculates it).
- **Position sizing** — choosing lots so that stop distance × pip value =
  your fixed dollar risk. The core survival skill.
- **Risk per trade** — the % of the account lost if the stop is hit (0.25–1%
  for funded accounts).
- **R / R-multiple** — profit measured in units of initial risk: +2R = twice
  the risk, −1R = a full stop-out.
- **Risk:reward (R:R)** — planned target distance ÷ stop distance.
- **Breakeven win rate** — the win rate needed to net zero at a given R:R =
  1 ÷ (1 + R:R).
- **Expectancy** — average R per trade: (win% × avg win) − (loss% × avg
  loss). Positive expectancy over a large sample = an edge.
- **Drawdown** — decline from an equity peak, in % or dollars.
- **Risk of ruin** — probability of hitting a fatal loss level given your
  risk %, win rate, and payoff — the math behind "risk small."

## Chart & technical analysis

- **Candlestick (OHLC)** — one bar showing open, high, low, close for the
  period. **Wick/shadow** — the high/low tails. **Body** — open-to-close.
- **Timeframes** — M1–M15 (scalping), H1–H4 (intraday/swing), D1/W1
  (position). Higher timeframes carry more signal per candle.
- **Support / resistance** — horizontal zones where price repeatedly
  reversed. The skeleton of technical trading.
- **Trend** — sequence of higher highs & higher lows (up) or lower highs &
  lower lows (down). **Range** — neither; price oscillating between levels.
- **Swing high / swing low** — local price extremes; where stops typically go.
- **Structure break (BOS)** — price taking out the previous swing in trend
  direction; **CHOCH (change of character)** — first break against the trend.
- **Breakout / fakeout (false break)** — price leaving a range / immediately
  returning, trapping the chasers.
- **Retest** — a return to a broken level before continuation; the quality
  entry after breakouts.
- **Pullback / retracement** — a counter-move within a trend; the entry zone
  for trend-following.
- **Reversal** — a genuine change of trend direction (rarer than it looks).
- **Consolidation** — tight sideways price action; energy building before a
  move.
- **Round numbers** — psychological levels (1.1000, 150.00) that act as
  magnets and barriers.
- **Confluence** — several independent signals at one price — where edges
  concentrate.
- **Moving average (MA/EMA/SMA)** — smoothed price line; EMA weights recent
  candles more. Used for trend filters and pullback zones.
- **Golden / death cross** — 50 MA crossing above / below the 200 MA.
- **RSI** — momentum oscillator (0–100); >70 overbought, <30 oversold —
  meaningful mainly at levels and in divergence.
- **MACD** — trend-momentum indicator built from EMA differences.
- **ATR (Average True Range)** — average candle range; the standard
  volatility yardstick for stops.
- **ADX** — trend-strength gauge (>20–25 = trending, below = ranging).
- **Bollinger Bands** — volatility envelope around a 20 MA.
- **Fibonacci retracement / extension** — ratio grid (38.2/50/61.8% …) for
  mapping pullbacks / projecting targets.
- **Divergence** — price makes a new extreme, oscillator doesn't; momentum
  fading.
- **Candlestick patterns** — *engulfing* (body swallows prior body),
  *pin bar / hammer* (long rejection wick), *doji* (indecision), *inside bar*
  (compression). Meaningful at levels, noise elsewhere.
- **Chart patterns** — head & shoulders, double top/bottom, flag, triangle,
  wedge: recurring structures traders read for continuation/reversal.
- **Supply / demand zones** — areas where strong moves originated; expected
  to react on first return.
- **Order block** — the last opposing candle before an impulsive move
  (smart-money vocabulary for a refined supply/demand zone).
- **Liquidity pool / sweep / stop hunt** — clustered resting stops (equal
  highs/lows, day extremes) / a spike through them that reverses.
- **PDH/PDL, PWH/PWL** — previous day/week high/low; reference levels and
  liquidity markers.
- **Fair value gap (FVG) / imbalance** — a three-candle gap left by an
  impulsive move; often partially refilled.
- **Premium / discount** — upper / lower half of a range; smart-money
  shorthand for "expensive / cheap within structure."

## Smart Money Concepts (ICT) vocabulary

Terms specific to the SMC/ICT school (see `08-smart-money-concepts.md`):

- **Buy-side / sell-side liquidity (BSL/SSL)** — the order clusters resting
  above highs / below lows: stop-losses plus breakout entries.
- **Draw on liquidity** — the pool price is currently "reaching for" —
  session highs/lows, PDH/PDL, equal highs/lows; both entry triggers and
  targets.
- **Sweep / raid / stop hunt** — price trading through a pool and closing
  back inside — the trap that fuels a reversal.
- **Manipulation** — the engineered false move that performs the sweep.
- **Displacement** — a fast, full-bodied impulse that breaks structure and
  leaves gaps behind; the footprint of real institutional interest.
- **Break of structure (BOS)** — a candle close beyond the most recent swing
  in the prevailing trend's direction (continuation signal).
- **Change of character (CHOCH)** — the first structure break *against* the
  prevailing trend — the earliest reversal evidence.
- **Fair value gap (FVG) / imbalance** — the gap left inside a three-candle
  impulse; often revisited ("filled") before continuation.
- **Inverse FVG (IFVG)** — an FVG that price closes through against its
  original direction — old support/resistance logic flipping.
- **Order block** — the last opposing candle before a displacement; a
  refined supply/demand zone for entries.
- **Breaker block** — an order block that failed and flipped to the other
  side after a sweep.
- **Equilibrium** — the 50% of the current dealing range; retraces to it are
  the standard continuation entry zone.
- **Premium / discount arrays** — sell zones above equilibrium, buy zones
  below it.
- **Optimal trade entry (OTE)** — the 62–79% retracement pocket of an
  impulse leg.
- **Killzone** — the time windows where these setups cluster: London open
  ≈ 07:00–10:00 UTC, New York open ≈ 12:30–15:30 UTC (09:30–10:30 ET for
  indices).
- **Judas swing** — the false move at a session open that sweeps one side of
  the overnight range before the real move runs the other way.
- **Power of Three (AMD)** — the daily cycle: accumulation (range) →
  manipulation (sweep) → distribution (the true directional leg).
- **Silver Bullet** — ICT's fixed-window model: the first FVG in the
  direction of the draw during a set hour (e.g. 10–11 AM ET).
- **SMT divergence** — correlated instruments disagreeing (one sweeps a
  level, the other doesn't) — evidence a move is manipulation, not strength.
- **Equal highs / equal lows (EQH/EQL)** — two-plus touches at one price;
  the most obvious liquidity pools on any chart.

## Fundamentals & news

- **Economic calendar** — schedule of data releases with expected impact;
  check it every session.
- **NFP** — US Non-Farm Payrolls (first Friday, 13:30 UTC); the classic
  volatility bomb.
- **CPI** — inflation print; drives rate expectations, moves everything.
- **FOMC / ECB / BoE / BoJ** — the major central banks; their rate decisions
  and statements set currency direction for months.
- **Hawkish / dovish** — leaning toward higher rates (currency-positive) /
  lower rates (currency-negative).
- **Interest-rate differential & carry** — the rate gap between two
  currencies; holding the higher-yielder earns swap ("carry trade").
- **Risk-on / risk-off** — global mood: risk-on lifts AUD/NZD/equities;
  risk-off lifts JPY/CHF/USD.
- **Safe havens** — JPY, CHF, USD, gold — bid in stress.
- **GDP, PMI, retail sales, unemployment** — second-tier data that shapes the
  rate story between the big prints.
- **Intervention** — a central bank directly buying/selling its currency
  (JPY's specialty); violent, unannounced moves.

## Prop firms & funded accounts

- **Prop(rietary) firm** — company granting traders access to firm capital
  for a profit split, after an evaluation.
- **Evaluation / challenge** — the test phase: profit target without
  breaching loss limits. **Phase 1 / Phase 2** — the typical two steps
  (larger, then smaller target).
- **Funded account** — the post-evaluation account whose profits are split.
- **Profit target** — required % gain to pass a phase (commonly 8–10%, then
  4–5%).
- **Max daily loss** — the equity floor for a single day (commonly 4–5%);
  crossing it = instant breach. Check how your firm anchors the "day."
- **Max overall drawdown** — the account-level floor (commonly 8–10%).
- **Static drawdown** — floor fixed below the starting balance.
- **Trailing drawdown** — floor follows your equity peak upward (sometimes
  locking at breakeven once you're up ~X%); far stricter.
- **Breach / violation** — breaking any hard rule; account terminated.
- **Minimum trading days** — required active days per phase (3–5 typical).
- **Consistency rule** — cap on how much of total profit may come from one
  day (e.g. 40%); relevant near targets.
- **News-trading rule** — restrictions on opening/closing within minutes of
  high-impact releases; violating can void profits.
- **Weekend-holding rule** — whether positions may be held Friday→Monday.
- **Profit split** — your share of funded profits (70–90%). **Payout cycle**
  — the withdrawal schedule (weekly to monthly).
- **Scaling plan** — the firm raising your account size after consistent
  months — the intended growth path (not raising risk %).
- **Refundable fee** — some firms return the evaluation fee at first payout.
- **Prohibited practices** — martingale, latency/HFT arbitrage, copy-passing,
  group accounts, one-sided hedging across accounts — read the specific list;
  breaches forfeit fees and payouts.
- **Drawdown breach vs soft rule** — hard rules end the account; soft rules
  (e.g. stop-loss required) may warn first. Know which is which at your firm.

## Trading process & psychology

- **Edge** — a repeatable condition under which your expectancy is positive.
- **Backtest / forward test (demo)** — testing a strategy on history / live
  markets without money. Both precede paying for an evaluation.
- **Journal** — the record of every trade in R with notes; the only honest
  mirror.
- **A-grade trade** — one that followed every rule regardless of result.
- **Tilt** — emotion-hijacked decision-making after losses.
- **Revenge trading** — oversized re-entry to "win it back"; account-killer #1.
- **FOMO** — chasing moves that already left.
- **Overtrading** — trading frequency driven by boredom, not setups.
- **Analysis paralysis** — so many indicators that no trade is ever clear.
- **Martingale** — doubling after losses; mathematically ruinous, and banned
  by most prop firms.
- **Circuit breaker / daily stop** — your self-imposed session kill-switch
  (two losses or −1.5%).
- **Flat** — holding no positions. A position too.

*Educational reference, not financial advice.*
