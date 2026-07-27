# Trading NASDAQ (NQ / MNQ / US100)

Everything NASDAQ-specific in one place. Good news first: this is the *home
market* of both models you're following — the mentor's level-to-level system
was demonstrated bar-by-bar on NASDAQ, and the G2S sheet's SMT check ("ES vs
NQ") assumes indices. Almost everything in the toolkit transfers directly;
what changes is the instrument math, the clock, and the news profile.

## 1. Know which product you're actually trading

| Product | Where | Value per point | Tick | Notes |
|---|---|---|---|---|
| **NQ** (E-mini Nasdaq-100 futures) | Futures prop firms (Topstep, Apex, etc.) & futures brokers | **$20 / point / contract** | 0.25 pt = $5 | The instrument in the mentor's videos |
| **MNQ** (Micro Nasdaq) | Same venues | **$2 / point / contract** | 0.25 pt = $0.50 | 1/10th of NQ — the correct beginner size |
| **US100 / NAS100 CFD** | CFD prop firms (Equity Edge-style) & MT4/MT5 brokers | **Varies by broker** — often $1 or $10 per point per 1.0 lot | broker-set | Check your firm's contract specs page before sizing anything |

All three are in the app's Position Size and Pip Value calculators — pick the
instrument, enter your stop in **points**, and it returns contracts (with a
round-down line, since futures trade whole contracts). For US100 CFD, enter
your broker's per-point value once you've confirmed it.

**Sizing feel (why MNQ first):** a normal NQ intraday stop is 20–60 points.
At $20/pt, a 40-point stop = **$800 risk per contract** — on a $100k account
that's 0.8% with just one contract, and unreachable on small accounts. The
same trade on MNQ = $80 risk. Trade MNQ (or the smallest US100 lot) until
your journal proves the edge.

## 2. The NASDAQ clock in Philippine time

NQ futures trade nearly 23 hours, but the tradeable structure is made in a
few windows (summer times; +1h November–March):

| Event (NY time) | PHT |
|---|---|
| Futures reopen (18:00 Sun–Thu) | 06:00 PHT |
| Asia block 18:00–00:00 | 06:00–12:00 PHT |
| London block 00:00–06:00 | 12:00–18:00 PHT |
| **Pre-market analysis (09:00 NY)** | **21:00 PHT** |
| **Cash open (09:30 NY)** | **21:30 PHT** |
| Mentor's focus window 09:00–10:30 | 21:00–22:30 PHT |
| Cash close (16:00 NY) | 04:00 PHT |
| Daily maintenance halt 17:00–18:00 | 05:00–06:00 PHT |

Your schedule doesn't change: analyze **21:00 PHT**, trade the open from
**21:30 PHT**, done by **23:30**. If anything, NASDAQ fits your evening
better than forex — the cash open is *the* liquidity event of the day and it
lands at 21:30 PHT exactly.

**The 09:30 open matters more than any forex session open.** The first
30–90 minutes produce the sweep-and-reverse / sweep-and-continue behavior
both your models feed on. Avoid the 12:00–14:00 NY lunch chop
(00:00–02:00 PHT — you should be asleep anyway).

## 3. Levels: identical method, index flavor

Your pre-market routine transfers 1:1 — PDH/PDL, the 18:00/00:00/06:00 NY
session lines, Asia & London block highs/lows, 4H/1H FVGs and swings. Index
extras worth marking:

- **Previous session's cash high/low and close** — cash-session levels carry
  more weight than overnight ones.
- **The overnight (Globex) high/low** — the classic first sweep of the open
  is a raid on the overnight high or low.
- **Round numbers**: 100-point levels (e.g. 20,000, 20,100) act like the
  1.1000s of forex; 500/1,000 levels are magnets.
- **The 09:30 opening price** — his "reaction to opening prices" concept;
  price above/below it after the first 15 minutes is a useful read.

## 4. SMT divergence made easy

This is where indices beat forex: the twin is obvious. Put **ES** (or US500
CFD) beside NQ. At your level: NQ sweeps its low while ES holds its own low
(or vice versa) → the sweep is likely manipulation → confluence for the
reversal/continuation read. YM (Dow) works as a third witness. Remember both
of your checklists treat SMT as a bonus, never a requirement — and the
transcript's rule: if ES and NQ are telling *opposite trend stories* on the
5m, that's an indecisive market — stand down.

## 5. News that moves NASDAQ

Same red-folder events as the dollar — CPI, FOMC, NFP (20:30 / 02:00 PHT) —
plus two index-specific ones:

- **Mega-cap tech earnings** (Apple, Microsoft, Nvidia, etc.) — released
  after the cash close (~04:05 PHT) and priced in violently at the next
  open. Check an earnings calendar in earnings season (Jan/Apr/Jul/Oct).
- **10:00 NY data** (22:00 PHT) — ISM, consumer sentiment, new home sales
  land *inside* your trading window; know when they're due.
- Fed speakers move NQ harder than any forex pair. If Powell talks at
  02:00 PHT, the 21:30 session before it is often hesitant — size down.

Prop-firm note: news rules apply to indices the same as forex — check
whether your firm restricts trading around releases on US100.

## 6. Strategy fit for NASDAQ

| Strategy | Fit | Notes |
|---|---|---|
| Mentor's level-to-level (TBL) | ★★★ | Built on NQ; use exactly as taught |
| G2S Continuation | ★★★ | SMT vs ES as designed; killzone = 21:30–23:30 PHT |
| ICT 4-step sweep | ★★★ | Killzone = the cash open, not London |
| Silver Bullet | ★★★ | The classic 10–11 AM ET window = 22:00–23:00 PHT |
| Pullback trend-following | ★★ | Works on H1/H4 NQ; wider stops, size with MNQ |
| London breakout / Judas swing | ★ | Forex-native; on NQ trade the *NY open* versions above instead |
| Range at extremes | ★★ | Overnight ranges into the open are the index version |

## 7. Risk realities specific to indices

- **Volatility regime shifts hard.** NQ's daily range can double in a week
  (CPI weeks, earnings season). Size from the *stop distance the chart
  demands*, never a fixed contract count.
- **Slippage on the open**: the 09:30–09:32 candles can be 30–100 points.
  Entering market orders inside the first minute is donating spread — let
  the first sweep complete, as both models require.
- **Gaps don't exist intraday** (futures trade overnight) but the weekend
  gap (Sun 06:00 PHT reopen) does — flat over weekends, as your firm
  probably requires anyway.
- The journal doesn't care what you trade: log results in R exactly as
  before, tag the pair as NQ/US100 and the setup, and the Edge tables will
  tell you whether NASDAQ actually suits you better than forex. Let 30 demo
  trades decide — same gate as always.

*Educational content, not financial advice. Futures and CFD trading carry
substantial risk of loss.*
