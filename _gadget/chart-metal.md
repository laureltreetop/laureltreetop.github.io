---
layout: splash
title: 貴金属チャート
permalink: /gadget/chart-metal.html
search: false
---
<script type="text/javascript" src="https://gold.bullionvault.jp/chart/bullionvaultchart.js?v=1" ></script>
<script type="text/javascript" >
	var options = {
			bullion: 'gold',
			currency: 'JPY',
			timeframe: '1q',
			chartType: 'line',
			miniChartModeAxis : 'kg',
			containerDefinedSize: true,
			miniChartMode: false,
			displayLatestPriceLine: true,
			switchBullion: true,
			switchCurrency: true,
			switchTimeframe: true,
			switchChartType: true,
			exportButton: true
	};
	var chartBV = new BullionVaultChart(options, 'chart-metal');
</script>
<div>
<div id="chart-metal" style="height: 85vh; width: 100%; "></div>
</div>
