# Yumoto Trades — Forex Trading Planner & Risk Toolkit

A self-contained toolkit for forex traders working toward (and managing) funded
prop-firm accounts such as Equity Edge, FTMO-style challenges, and similar
evaluation programs.

## What's inside

| Path | What it is |
|---|---|
| `index.html` | The app — open it in any browser, no install, no server, no dependencies. |
| `docs/01-forex-fundamentals.md` | How the market, pips, lots, sessions and spreads actually work. |
| `docs/02-risk-management.md` | The risk rules and math that keep accounts alive. |
| `docs/03-strategies.md` | Four core strategies with entry/exit/stop rules. |
| `docs/04-funded-accounts-playbook.md` | How evaluations work and how to pass them without breaching. |
| `docs/05-trading-psychology.md` | Biases, tilt, and the protocols that keep rules followed. |
| `docs/06-advanced-strategies.md` | Five more strategies: break &amp; retest, liquidity sweeps, fib confluence, divergence, mechanical crossover. |
| `docs/07-glossary.md` | Full A–Z of forex, technical-analysis, prop-firm and ICT terms. |
| `docs/08-smart-money-concepts.md` | The ICT / Smart Money playbook prop traders favor: the 4-step liquidity-sweep model, Silver Bullet, London Judas swing, Power of Three. |

## The app (`index.html`)

Open the file directly in a browser. Five sections:

- **Funded Tracker** — enter your challenge rules (account size, profit target,
  daily loss limit, max drawdown, static or trailing) and your current equity;
  it shows live buffers to each breach level, progress to target, and a
  suggested max risk per trade. Includes a live **market clock in Philippine
  time** showing every session and ICT killzone converted to PHT, with
  open/closed status and daylight-saving handled automatically.
- **Calculators** — position size (lot sizing from % risk and stop distance,
  with correct pip-value math for USD-quote, USD-base, JPY-cross and GBP-quote
  pairs), risk:reward with breakeven win rate, pip value, margin/leverage,
  drawdown-recovery, and compound growth.
- **Trade Planner** — plan entries with auto R:R and sizing, a six-point
  pre-trade checklist, saved plans, and one-click copy as text.
- **Journal** — log results in R-multiples; get win rate, average win/loss,
  expectancy and total R, plus a per-trade result chart.
- **Guide & Strategies** — condensed reference of the `docs/` content:
  fundamentals, risk rules, nine strategies, psychology, the funded-account
  playbook, and a glossary.

Everything is stored in your browser's localStorage only — nothing leaves your
machine. The interface uses a committed black-and-orange terminal theme.

## Disclaimer

This is an educational tool, not financial advice. Forex and leveraged trading
carry a high risk of losing money; most prop-firm evaluation attempts fail.
Calculator outputs are estimates that ignore spread, slippage, swap and
commission. Always verify your firm's current rules on their own dashboard.
