# Builds the Strategy Tester variant from the indicator so both stay in sync.
src = open("/home/user/claude-code/g2s-compass/G2S_Compass.pine", encoding="utf-8").read()
old = 'indicator("G2S Compass · Rebuild", shorttitle = "G2S", overlay = true, max_boxes_count = 500, max_lines_count = 500, max_labels_count = 500, max_bars_back = 500)'
assert old in src
new = 'strategy("G2S Compass · Rebuild (backtest)", shorttitle = "G2S-BT", overlay = true, max_boxes_count = 500, max_lines_count = 500, max_labels_count = 500, max_bars_back = 500, initial_capital = 100000, default_qty_type = strategy.fixed, default_qty_value = 3, process_orders_on_close = true, calc_on_every_tick = false)'
out = src.replace(old, new, 1)
out = out.replace("//  G2S Compass · Community Rebuild\n", "//  G2S Compass · Community Rebuild — STRATEGY BUILD for the Strategy Tester (same engine as the indicator)\n", 1)
out += '''
// ───────────────────────────── Backtest orders (strategy build only) ─────────────────────────────
// Enters at the close of the bar on which a plan becomes ACTIVE, scales out at TP1 / TP2 / TP3 with the
// shared stop, optionally moves the stop to breakeven after TP1, and flattens when the plan ends.
const string G9 = "⑨ Backtest"
btBreakeven = input.bool(true, "Move stop to breakeven after TP1", group = G9)
btSplit     = input.bool(true, "Scale out one third at each target", group = G9)
var int btPlanBar = na
if confirmed
    if st.plState == 2 and strategy.position_size == 0 and (na(btPlanBar) or btPlanBar != st.plBar)
        btPlanBar := st.plBar
        strategy.entry("G2S", st.plDir == 1 ? strategy.long : strategy.short, comment = st.plGrade + " " + st.plModel)
    if strategy.position_size != 0 and st.plState == 2
        slNow = btBreakeven and st.plHit >= 1 ? st.plEntry : st.plSl
        nT = array.size(st.plTps)
        if btSplit and nT >= 2
            strategy.exit("TP1", "G2S", limit = array.get(st.plTps, 0), stop = slNow, qty_percent = nT == 3 ? 34 : 50)
            strategy.exit("TP2", "G2S", limit = array.get(st.plTps, 1), stop = slNow, qty_percent = nT == 3 ? 33 : 50)
            if nT == 3
                strategy.exit("TP3", "G2S", limit = array.get(st.plTps, 2), stop = slNow, qty_percent = 33)
        else
            strategy.exit("TP", "G2S", limit = array.get(st.plTps, nT - 1), stop = slNow)
    if strategy.position_size != 0 and st.plState != 2
        strategy.close("G2S", comment = "plan ended")
'''
open("/home/user/claude-code/g2s-compass/G2S_Compass_Strategy.pine", "w", encoding="utf-8").write(out)
print("strategy build written")
