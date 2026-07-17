# Smart Money Concepts (ICT) — The Liquidity Playbook

The strategy school most visible among successful prop-firm traders today:
**Smart Money Concepts (SMC)**, popularized by ICT (Inner Circle Trader /
Michael Huddleston) and by prop traders like TJR who trade variations of it
live. Instead of indicators, it reads price through *liquidity* — where stop
orders cluster and how the market trades through them before reversing.

Honest framing before the models: SMC is a **descriptive framework**, not a
proven causal theory, and social-media profit claims (including the big ones)
are not verifiable by you. What makes these models genuinely well-suited to
prop evaluations is structural: tight, objective invalidation points (high
R-multiples), a short time-boxed session, and a checklist that mostly tells
you *not* to trade. Backtest 30+ trades yourself before risking an evaluation
fee — the journal tab exists for exactly this.

Further reading: the LiteFinance ICT strategy primer
(litefinance.org/blog/for-beginners/trading-strategies/ict-trading-strategy/)
and the core vocabulary in `07-glossary.md`.

---

## 1. The market logic in one page

Every obvious high and low in the market has orders resting beyond it:

- **Above old highs:** stop-losses of short sellers (which are *buy* orders)
  plus breakout buyers' entries. Together: **buy-side liquidity (BSL)**.
- **Below old lows:** stop-losses of longs plus breakout sellers. Together:
  **sell-side liquidity (SSL)**.

Large participants who want to sell size need buyers to sell *to*. A push
**through** an old high fills the market with forced and eager buyers — the
counterparties a large seller needs. That's why price so often spikes above a
well-watched high, stalls, and reverses: the move's purpose was the orders,
not the level. The same logic mirrors below lows.

Two consequences drive every model below:

1. **Sweeps of liquidity are entry signals** — *after* confirmation that the
   reversal is actually underway (a sweep alone is not a trade; strong trends
   sweep levels and keep going).
2. **Pools of liquidity are targets** — the market that filled sell orders
   above a high needs to travel to opposing liquidity (old lows) to profitably
   unwind them. Your take-profits belong at the same kinds of levels your
   entries come from.

---

## 2. Model 1 — The intraday liquidity-sweep model (the "4-step")

The TJR-style model, adapted from index futures to forex. Timeframes: 15m/1H
for the map, 5m for confirmation, 1m for entry.

### Step 0 — Build the liquidity map (before the session)

Mark, on 15m–1H: Asian session high/low, London session high/low, previous
day's high/low (PDH/PDL), previous week's high/low, and untaken 1H/4H swing
highs/lows. These are your **draws on liquidity** — both the levels whose
sweep can trigger an entry *and* the targets you'll exit into. Equal highs or
equal lows (two+ touches at the same price) are the highest-grade pools.

### Step 1 — Manipulation: a draw gets swept

During a killzone (below), price pushes **through** one of your marked levels.
You are watching for the push to *fail*: a wick beyond the level with a close
back inside — the trapped-trader signature. A clean close that holds beyond
the level is a breakout, not a sweep; stand down.

### Step 2 — 5-minute confirmation the reversal is real

After the sweep, demand a change of order flow on the 5m chart — either:

- **Break of structure (BOS):** a candle *close* beyond the most recent
  opposing swing (below the last higher-low after a sweep of highs; above the
  last lower-high after a sweep of lows), or
- **Inverse fair value gap (IFVG):** the nearest FVG that was supporting the
  old trend gets closed through in the new direction. A bullish gap that
  price closes *below* has been "disrespected" — the old order flow failed.

No 5m confirmation = no trade, no matter how pretty the sweep.

### Step 3 — The retrace (patience checkpoint)

Do **not** enter on the confirmation candle — that's where late entries and
instant stop-outs come from. Wait for the 5m trend to pull back: into the 5m
fair value gap it just created, or to the **equilibrium** (50%) of the
impulse leg. On the 1m chart this retrace looks like a small break of
structure *against* your intended direction. That 1m counter-BOS is not a
threat; it's the signal the retrace is underway.

### Step 4 — 1-minute entry trigger

When the retrace has reached your zone, wait for the 1m chart to break
structure **back in your direction** (or print a 1m IFVG the same way).
That closure is the entry.

- **Stop:** beyond the retrace swing (conservatively, beyond the sweep's
  extreme wick). This is naturally tight — the source of the model's 2–4R
  potential.
- **Targets:** the *opposite* draws on liquidity from your Step-0 map —
  nearest session low/high first, then PDH/PDL. Take partials at each pool;
  after the first partial, move the stop to breakeven. (Accept that some
  runners will stop at breakeven — that's the cost of the free ride, and a
  breakeven result is a win for the evaluation's loss limits.)

### The filters that make it work (the actual edge)

- **Killzones only.** Forex volume concentrates where sessions open. ICT
  defines killzones in market-local time, so the PHT conversion shifts with
  UK/US daylight saving (Manila never changes): **London killzone =
  07:00–10:00 London time → 14:00–17:00 PHT in UK summer, 15:00–18:00 PHT in
  winter**; **New York killzone = 08:30–11:30 New York time → 20:30–23:30 PHT
  in US summer, 21:30–00:30 PHT in winter**. Setups outside these windows are
  structurally lower probability. Index traders use 09:30–10:30 ET after the
  equity open — same idea. The app's Market clock shows the live conversion.
- **Correlation alignment.** The transcript's rule "if ES and NASDAQ
  disagree, no trade" translates directly to forex: check a correlated pair
  or the dollar side. Long EURUSD is higher-probability when GBPUSD shows the
  same 5m structure shift (or DXY shows the mirror image). One instrument
  sweeping while its twin doesn't (SMT divergence) can *support* a reversal
  read — but a 5m *trend* disagreement between the two means the market is
  undecided: no trade.
- **Time-box the session.** If no aligned setup appears within ~60–90
  minutes of the killzone open, you're done — the best moves come from the
  opening sequence, and forcing trades into midday chop is how green
  mornings become breached afternoons.
- **One or two trades a day, maximum.** The model's main function, in its
  author's own words, is telling you what *not* to take.

---

## 3. Model 2 — Silver Bullet (time-window FVG model)

A stripped-down ICT model built on a fixed clock window — useful for traders
who want maximum structure and minimum discretion.

1. **Window:** the classic is 10:00–11:00 ET (14:00–15:00 UTC); London
   traders use 07:00–08:00 UTC. Only entries inside the window count.
2. **Context:** note which liquidity was taken most recently (did the session
   just sweep a low or a high?) and where the *opposing* untaken pool sits —
   that's the draw.
3. **Entry:** the first clean **fair value gap** that forms in the direction
   of the draw inside the window. Limit order at the gap's edge, stop beyond
   the swing that created it.
4. **Target:** the opposing liquidity pool; take the trade only if that
   distance clears **2R minimum**.
5. One setup per window. No gap, no trade — the window closing is a full
   exit of the idea, not a reason to loosen criteria.

---

## 4. Model 3 — London Judas swing (the session fake-out)

The forex-native ICT classic, built on the Asian range:

1. Mark the **Asian range** (roughly 00:00–06:00 UTC) high and low on
   EURUSD/GBPUSD.
2. At the London open, watch for the **Judas swing**: an early push that
   sweeps *one side* of the Asian range — the false move that traps the
   early crowd.
3. Require **displacement** back through the range in the opposite
   direction: a fast, full-bodied 5m/15m move that leaves an FVG behind and
   breaks structure. Weak drift back inside is not displacement — skip.
4. Entry on the retrace into that FVG (or the broken structure), stop beyond
   the Judas extreme.
5. Target the opposite side of the Asian range first, then the previous
   day's high/low. The daily one-directional move of London frequently runs
   from one side's sweep to beyond the other side.
6. Skip entirely when high-impact London-morning news (UK CPI, ECB) lands
   inside the window — and check your firm's news rule.

---

## 5. Model 4 — Power of Three (daily bias framework)

Not an entry model — a lens for the whole day that tells Models 1–3 which
direction deserves your attention. ICT's **AMD** cycle:

- **Accumulation:** the quiet range (Asia) where positions build.
- **Manipulation:** the engineered false move at a session open that sweeps
  the range's liquidity (the Judas swing).
- **Distribution:** the real directional leg of the day, away from the trap.

Practical use: on a day you expect to close bullish (higher-timeframe
structure, above the daily open's discount), *expect* an early drop that
sweeps sell-side liquidity — and treat that sweep as your Model 1/3 long
setup rather than a reason to panic. Add **premium/discount**: within the
current dealing range, longs are only interesting from the lower half
(discount), shorts from the upper half (premium). Equilibrium (50%) is the
dividing line — the same 50% level Step 3 retraces target.

---

## 6. Why this suits prop-firm evaluations specifically

- **Tight, objective invalidation.** Stops go beyond a specific wick, not a
  feeling — so 0.25–0.5% risk routinely buys 2–4R targets. A 64%-win-rate,
  ~1:1.3 profile like the transcript's, or a 40%-win-rate 2.5R profile, both
  clear an 8% target within normal drawdown limits *if sized correctly*.
- **Time-boxed exposure.** One killzone a day caps how much damage any
  session can do — it enforces the daily circuit breaker mechanically.
- **A checklist that mostly says no.** Four sequential conditions + an
  alignment filter + a clock filter = most days produce zero or one trade.
  For an account where losses are capped and patience is free (minimum
  trading days!), a strategy that filters *out* trades is the right shape.
- **Breakeven management fits loss limits.** Partial at the first pool +
  stop to breakeven converts open risk to zero fast — exactly what a
  trailing-drawdown account wants.

## 7. The caveats that keep you funded

1. **Verify nothing by faith.** Big P/L screenshots — anyone's — are not
   your data. Your 30-trade demo backtest in the journal tab is.
2. **1-minute entries live inside the spread.** A 3-pip stop on a pair with
   a 1-pip spread has given up a third of its edge before the trade starts.
   Check stop distance ≥ ~5× spread, or take the 5m-structure entry instead.
3. **Killzones overlap news windows.** NY killzone contains most US data
   drops; your firm's news rule may prohibit exactly these entries. Calendar
   first, always.
4. **Sweeps in strong trends are continuation, not reversal.** The 5m
   confirmation step is not optional, and counter-trend days (against the
   daily bias) deserve half risk.
5. **The models multiply screen discipline, not replace it.** All the risk
   rules in `02-risk-management.md` — 0.25–0.5% risk, two-loss daily stop,
   correlated exposure counted once — sit *underneath* every model here.

---

## Session checklist (print this)

- [ ] Liquidity map drawn: Asia/London H-L, PDH/PDL, PWH/PWL, equal highs/lows
- [ ] Daily bias set (Power of Three, premium/discount)
- [ ] Economic calendar checked against firm's news rule
- [ ] Funded Tracker updated — today's max risk known
- [ ] In killzone? If not: hands off
- [ ] Sweep of a mapped level with close back inside?
- [ ] 5m BOS or IFVG confirming?
- [ ] Correlated pair / DXY aligned?
- [ ] Retrace into FVG/equilibrium, 1m BOS trigger?
- [ ] Stop beyond swing; target = opposing pool; ≥2R (Model 1/2)?
- [ ] After entry: partial at first pool → stop to breakeven → done for day
  after 1–2 trades

*Educational content, not financial advice. No income shown by any online
trader is evidence of what you will earn; most evaluation attempts fail.
Backtest before you pay.*
