# Risk Management

Risk management isn't a topic in trading — it *is* trading. Entries decide how
often you win; risk decides whether you survive long enough for it to matter.
On a funded account with a daily loss limit, this file is the difference
between passing and paying for another evaluation.

## 1. The one formula that matters

```
Position size (lots) = (Account × Risk %) ÷ (Stop distance in pips × Pip value per lot)
```

Worked example: $100,000 account, 0.5% risk ($500), 25-pip stop on EURUSD
($10/pip/lot):

```
$500 ÷ (25 × $10) = 2.00 lots
```

Non-negotiables baked into this formula:

- **The stop comes from the chart** (beyond the level or swing that
  invalidates the trade) — then the size comes from the stop. Never the
  reverse.
- **Risk is a fixed fraction** of the account, identical on every trade.
  Confidence is not a position-sizing input.

## 2. Choosing your risk percentage

| Risk/trade | 5-loss streak costs | Verdict for funded accounts |
|---|---|---|
| 0.25% | ~1.2% | Very safe; use near limits or after losses |
| 0.5% | ~2.5% | **The evaluation sweet spot** |
| 1.0% | ~4.9% | Ceiling — one bad day ≈ an entire 5% daily limit |
| 2.0% | ~9.6% | One streak ≈ a 10% max drawdown. Not viable |

Losing streaks are not a possibility, they're a schedule: with a 50% win rate,
the chance of at least one 5-loss streak in 100 trades is ~81%. Size for the
streak, not for the average day.

## 3. Drawdown math is asymmetric

Losses require disproportionate gains to recover:

| Loss | Gain to break even |
|---|---|
| −5% | +5.3% |
| −10% | +11.1% |
| −20% | +25% |
| −50% | +100% |

Formula: `required gain = loss ÷ (1 − loss)`. This is why the pros' first
question is never "how much can I make?" but "how much can I lose?"

## 4. Expectancy — the only score that counts

```
Expectancy (R/trade) = (Win% × Avg win in R) − (Loss% × Avg loss in R)
```

- 40% win rate, +2R winners, −1R losers → (0.4×2) − (0.6×1) = **+0.20R/trade**
- 70% win rate, +0.3R winners, −1R losers → (0.7×0.3) − (0.3×1) = **−0.09R/trade**

High win rates can lose money; low win rates can print. Corollary — the
**breakeven win rate** for a given reward:risk is `1 ÷ (1 + R:R)`:

| R:R | Breakeven win rate |
|---|---|
| 1:1 | 50% |
| 1.5:1 | 40% |
| 2:1 | 33% |
| 3:1 | 25% |

Demand ≥1.5R from every setup and you only need to be right 4 times in 10.
The journal tab of the app computes your live expectancy.

## 5. The daily stop — your personal circuit breaker

Prop firms breach you at −4% or −5% in a day. Don't let it get close:

- **Stop trading after 2 consecutive losses or −1.5% on the day, whichever
  comes first.**
- The reason is tilt, not math: after two losses your next trade is
  statistically your worst — revenge sizing, early entries, moved stops.
- The market reopens tomorrow with the same spreads. An evaluation lost to
  discipline costs a new fee; a day sat out costs nothing.

## 6. Correlation — one trade in three costumes

EURUSD, GBPUSD and AUDUSD often move together; short USDCHF is nearly long
EURUSD. Three "diversified" 0.5% positions can be one 1.5% bet on the dollar
falling.

Rules:

- Count strongly correlated positions as **one risk unit** — split your normal
  risk across them, don't stack it.
- JPY crosses (GBPJPY, EURJPY) all share the yen leg; gold (XAUUSD) is heavily
  dollar-driven. Same rule.

## 7. Stop-loss discipline

- **Never widen a stop.** Moving a stop away from price converts a planned 1R
  loss into an unplanned catastrophe. If the stop is wrong, the trade is wrong.
- Move stops only in your favor — e.g. to breakeven after +1R, or trailing
  behind swings on runners.
- Beware moving to breakeven too early: getting wicked out at +0.0R on trades
  that then hit target destroys expectancy. Journal it and check.
- Mind weekend gaps: stops don't protect against Monday-open gaps. Many funded
  traders flatten on Friday; some firms require it.

## 8. Position sizing near prop-firm limits

Your effective room is `min(daily buffer, overall drawdown buffer)` — the app's
Funded Tracker computes it live. Then:

- **Suggested max risk per trade ≈ 25% of that buffer** — four full losses
  still don't breach you.
- As buffers shrink, risk shrinks: at 50% of a limit used, halve your risk; at
  80%, stop for the day regardless of setup quality.
- After a profitable run on a **trailing** drawdown account, your floor has
  moved up behind you — recompute before every session, not every week.

## 9. The weekly risk review (10 minutes)

Every weekend, from your journal:

1. Expectancy this week vs last 30 trades — trending up or down?
2. Any rule broken (risk %, daily stop, correlated stacking, moved stop)?
   Count them; broken rules predict blowups better than losses do.
3. Biggest loss — was it exactly 1R? If bigger, find out why (slippage? sizing
   error? no stop?) and fix the mechanism, not the memory.
4. Are you within your firm's rules on news, weekend holds, and consistency
   requirements?

## The rules on one card

1. Risk 0.5% per trade (0.25% near limits). Size from the stop.
2. Hard stop-loss on every trade. Never widened.
3. Minimum 1.5R planned reward. Know your breakeven win rate.
4. Two losses or −1.5% in a day → done for the day.
5. Correlated positions share one risk unit.
6. Recompute buffers before every session (Funded Tracker).
7. Journal every trade in R. Review weekly.
