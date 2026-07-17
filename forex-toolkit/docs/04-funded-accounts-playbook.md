# Funded-Account Playbook

How prop-firm evaluations (Equity Edge, FTMO-style programs, and similar
work: the rules that actually decide pass/fail, the math of passing, and the
discipline that keeps the account after you're funded.

> Rules differ between firms and change over time. Everything below describes
> the *typical* structure — always verify the exact numbers, drawdown type and
> prohibited practices on your own firm's dashboard and terms.

## 1. How the business works (know what you're buying)

You pay a fee for an evaluation on a demo-like account. Hit a profit target
without breaking loss rules and you get a "funded" account whose profits are
split with the firm (typically 70–90% to you). The fee is the firm's product;
most attempts fail, which is priced in. Two consequences:

- Treat evaluation fees as a cost you can afford to lose entirely.
- Your edge over the statistics is *rule compliance*, not trading brilliance —
  most failures are breaches, not bad strategies.

## 2. The typical rule set

| Rule | Phase 1 | Phase 2 | Funded |
|---|---|---|---|
| Profit target | 8–10% | 4–5% | none (payouts instead) |
| Max daily loss | 4–5% | 4–5% | 4–5% |
| Max overall drawdown | 8–10% | 8–10% | 8–10% |
| Minimum trading days | 3–5 | 3–5 | per payout cycle |
| Time limit | often none now | often none | — |

### Read the fine print on these five things

1. **Daily loss anchor** — is the day's limit measured from the day-start
   *balance* or day-start *equity*, and when does the "day" reset (usually
   17:00 EST / 21:00–22:00 UTC)? Floating open profit that evaporates can
   breach a daily limit even if you never had a closed loss.
2. **Drawdown type — static vs trailing.** Static: the floor is fixed below
   the starting balance. Trailing: the floor follows your highest equity up
   (sometimes locking at the starting balance once you're X% up). Trailing is
   far stricter: after a good run, a normal pullback can breach. The app's
   Funded Tracker models both.
3. **News rules** — many firms prohibit opening/closing positions within a few
   minutes of high-impact releases, or void profits made that way.
4. **Weekend holding & consistency rules** — some firms forbid holding over
   the weekend; some cap how much of your total profit may come from a single
   day (e.g. 40%) — relevant if you're near target after one big winner.
5. **Prohibited styles** — HFT/latency arbitrage, group/copy passing, and
   martingale are commonly banned and forfeit fees.

## 3. The math of passing

At 0.5% risk per trade with 2R average winners, each win nets ~1%. An 8%
target needs roughly **8 net wins** — e.g. 20 wins and 12 losses over 32
trades (a 62% win rate at 2R is generous; even 45% at 2R gets there over more
trades, because expectancy per trade is +0.35R ≈ +0.175%).

The target is not the hard part. **The daily loss limit is.** Model it:

- Risk 0.5%, daily stop after 2 losses → worst day = −1%. You'd need 4–5
  maximum-bad days *in a row*, plus more losses, to approach a 10% drawdown.
- Risk 2% with no daily stop → two bad trades = −4%; one tilted afternoon can
  end the evaluation. Same strategy, same entries — dead account.

Survival is a sizing decision, made before the first trade.

## 4. Phase-by-phase tactics

### Phase 1 (the big target)

- Risk 0.5% standard, 0.25% after any losing day.
- Only A-grade setups from your one chosen strategy. Minimum trading days
  mean you *cannot* be penalized for patience.
- **Milestone throttle:** at 75% of target, cut risk to 0.25% — the worst
  outcome in an evaluation is round-tripping +6% back to breach.
- No target-chasing on the last stretch with oversized positions. The math
  that got you to 6% gets you to 8%.

### Phase 2 (the easy-looking one where people die)

- The target halves but the loss limits don't — so halve the aggression.
  Same 0.25–0.5% risk; boredom is the enemy here, not the market.
- Most Phase-2 failures are impatience after the Phase-1 high. Nothing about
  your edge changed; keep the pace.

### Funded (the actual job)

- **Change nothing.** The same risk that passed keeps the account.
- Withdraw on every payout cycle at first — banked money is the only real
  money in this game; account balances can be lost, payouts can't.
- Scale through the firm's scaling plan (they raise the account when you're
  consistent), never by raising your risk %.
- Keep obeying your personal daily stop even though there's no target — the
  funded account's only job is to still exist next month.

## 5. Daily operating procedure

Before the session (5 min):

1. Open the Funded Tracker: update day-start balance, equity, and (if
   trailing) the equity peak. Note your **room left today** and the suggested
   max risk per trade.
2. Check the economic calendar for high-impact events in your pairs' hours.
3. Review your one strategy's checklist; mark levels/ranges in advance.

During the session:

- Plan every trade in the Trade Planner *before* the entry; require 5/6 on
  the checklist.
- After each closed trade, update equity in the tracker. Two losses or −1.5%
  → close the platform, done.

After the session (5 min):

- Journal every trade in R with one honest sentence about execution.
- If any firm rule was even *near* — news window, daily anchor, consistency —
  write down what you'll change tomorrow.

## 6. Failure modes ranked (what actually breaches accounts)

1. **Oversizing after losses** (revenge trading) — the #1 killer. The daily
   stop exists precisely because you can't trust future-you at −2 trades.
2. **Trailing-drawdown ignorance** — winning for a week, then a normal 3%
   pullback hits a floor that moved up silently. Recompute every session.
3. **Floating-loss breaches** — a held loser drifts through the daily line
   intraday. Your hard stop must sit *inside* today's room, always.
4. **News-window violations** — profits voided or account closed on a
   technicality. Calendar discipline is free.
5. **Milestone round-trips** — full risk at 90% of target.
6. **Strategy-hopping mid-evaluation** — resets your edge to zero while the
   fee clock keeps running.

## 7. Before you pay for any evaluation

- 30+ journaled trades of one strategy with positive expectancy — on demo,
  under the *same* rules (simulate the daily stop) — or you're buying a
  lottery ticket.
- Verify the firm itself: payout proofs, realistic rules, clear terms, how
  long they've operated, what their trader community reports. A profit split
  is worthless from a firm that doesn't pay.
- Budget for 2–3 attempts. Even good traders fail evaluations on variance;
  plan finances so one failure changes nothing about your process.

---

*Educational content, not financial advice. Trading foreign exchange on margin
carries a high level of risk and may not be suitable for all investors. Past
performance is not indicative of future results.*
