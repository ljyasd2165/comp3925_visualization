am5.ready(function () {
  const annualData = [
    {
      year: 2014, avgMaxTemp: 26.0518, heatDays: 0, avgMinTemp: 21.6407, coldDays: 0, influenzaTotal: 23438,
      rainfall: 7.3103, rainstormDays: 6, abnormalHeatYear: "Abnormal Cold Year", heatDeviation: -0.7714,
      heatRiskLevel: "Low", fluAnomaly: "Abnormally Low", heatFluImpactIndex: 0, extremeWeatherIntensityIndex: 42.8571,
      climateAnomalyYear: "Anomalous", cateringRecoveryStatus: "Pre-pandemic", compositeRiskScore: 17.4083,
      extremeWeatherImpactIndustry: "Transportation and Storage",
      heatImpactIndustryRank: "Accommodation and Food Services most affected",
      rainImpactIndustryRank: "Transportation and Storage most affected by rainstorm",
      industries: { Manufacturing: 98.2, Utilities: 104.4, WholesaleRetail: 99.6, Transportation: 96.3, AccommodationFood: 100.4, InfoComm: 95.8, FinanceInsurance: 99.5, WholeEconomy: 98.5 }
    },
    {
      year: 2015, avgMaxTemp: 26.6260, heatDays: 1, avgMinTemp: 22.38, coldDays: 0, influenzaTotal: 45536,
      rainfall: 5.1382, rainstormDays: 3, abnormalHeatYear: "Normal Year", heatDeviation: -0.1971,
      heatRiskLevel: "Medium", fluAnomaly: "Abnormally High", heatFluImpactIndex: 5.4912, extremeWeatherIntensityIndex: 24.7619,
      climateAnomalyYear: "Normal", cateringRecoveryStatus: "Pre-pandemic", compositeRiskScore: 34.9470,
      extremeWeatherImpactIndustry: "Manufacturing",
      heatImpactIndustryRank: "Accommodation and Food Services most affected",
      rainImpactIndustryRank: "Transportation and Storage most affected by rainstorm",
      industries: { Manufacturing: 100, Utilities: 100, WholesaleRetail: 100, Transportation: 100, AccommodationFood: 100, InfoComm: 100, FinanceInsurance: 100, WholeEconomy: 100 }
    },
    {
      year: 2016, avgMaxTemp: 26.0997, heatDays: 6, avgMinTemp: 21.7410, coldDays: 2, influenzaTotal: 41052,
      rainfall: 8.2720, rainstormDays: 3, abnormalHeatYear: "Abnormal Cold Year", heatDeviation: -0.7234,
      heatRiskLevel: "High", fluAnomaly: "Abnormally High", heatFluImpactIndex: 29.7026, extremeWeatherIntensityIndex: 41.4286,
      climateAnomalyYear: "Normal", cateringRecoveryStatus: "Pre-pandemic", compositeRiskScore: 41.0726,
      extremeWeatherImpactIndustry: "Transportation and Storage",
      heatImpactIndustryRank: "Transportation and Storage most affected",
      rainImpactIndustryRank: "Transportation and Storage most affected by rainstorm",
      industries: { Manufacturing: 102.9, Utilities: 100.7, WholesaleRetail: 102.8, Transportation: 107, AccommodationFood: 101.7, InfoComm: 102.6, FinanceInsurance: 101.3, WholeEconomy: 102.1 }
    },
    {
      year: 2017, avgMaxTemp: 26.4677, heatDays: 1, avgMinTemp: 22.04, coldDays: 0, influenzaTotal: 55284,
      rainfall: 7.0488, rainstormDays: 6, abnormalHeatYear: "Normal Year", heatDeviation: -0.3555,
      heatRiskLevel: "Medium", fluAnomaly: "Abnormally High", heatFluImpactIndex: 6.6667, extremeWeatherIntensityIndex: 46.1905,
      climateAnomalyYear: "Anomalous", cateringRecoveryStatus: "Pre-pandemic", compositeRiskScore: 40.17,
      extremeWeatherImpactIndustry: "Transportation and Storage",
      heatImpactIndustryRank: "Transportation and Storage most affected",
      rainImpactIndustryRank: "Transportation and Storage most affected by rainstorm",
      industries: { Manufacturing: 109.3, Utilities: 98.1, WholesaleRetail: 109.8, Transportation: 111.5, AccommodationFood: 104.5, InfoComm: 105.7, FinanceInsurance: 106.4, WholeEconomy: 106.1 }
    },
    {
      year: 2018, avgMaxTemp: 26.6605, heatDays: 5, avgMinTemp: 21.9858, coldDays: 0, influenzaTotal: 45416,
      rainfall: 5.9279, rainstormDays: 2, abnormalHeatYear: "Normal Year", heatDeviation: -0.1626,
      heatRiskLevel: "High", fluAnomaly: "Abnormally High", heatFluImpactIndex: 27.3835, extremeWeatherIntensityIndex: 30.9524,
      climateAnomalyYear: "Normal", cateringRecoveryStatus: "Pre-pandemic", compositeRiskScore: 40.8801,
      extremeWeatherImpactIndustry: "Transportation and Storage",
      heatImpactIndustryRank: "Transportation and Storage most affected",
      rainImpactIndustryRank: "Transportation and Storage most affected by rainstorm",
      industries: { Manufacturing: 111.3, Utilities: 96.6, WholesaleRetail: 112.5, Transportation: 115.3, AccommodationFood: 108.8, InfoComm: 107.9, FinanceInsurance: 107.2, WholeEconomy: 106.6 }
    },
    {
      year: 2019, avgMaxTemp: 27.1310, heatDays: 2, avgMinTemp: 22.6441, coldDays: 0, influenzaTotal: 48430,
      rainfall: 6.5664, rainstormDays: 3, abnormalHeatYear: "Normal Year", heatDeviation: 0.3078,
      heatRiskLevel: "Medium", fluAnomaly: "Abnormally High", heatFluImpactIndex: 11.6803, extremeWeatherIntensityIndex: 28.0952,
      climateAnomalyYear: "Normal", cateringRecoveryStatus: "Pre-pandemic", compositeRiskScore: 37.4509,
      extremeWeatherImpactIndustry: "Manufacturing",
      heatImpactIndustryRank: "Manufacturing most affected",
      rainImpactIndustryRank: "Transportation and Storage most affected by rainstorm",
      industries: { Manufacturing: 115, Utilities: 94.9, WholesaleRetail: 111.6, Transportation: 112.5, AccommodationFood: 98.3, InfoComm: 112.5, FinanceInsurance: 106.5, WholeEconomy: 105.3 }
    },
    {
      year: 2020, avgMaxTemp: 27.2270, heatDays: 3, avgMinTemp: 22.4986, coldDays: 0, influenzaTotal: 11428,
      rainfall: 6.5453, rainstormDays: 7, abnormalHeatYear: "Normal Year", heatDeviation: 0.4039,
      heatRiskLevel: "Medium", fluAnomaly: "Abnormally Low", heatFluImpactIndex: 4.1343, extremeWeatherIntensityIndex: 60,
      climateAnomalyYear: "Anomalous", cateringRecoveryStatus: "Not yet recovered", compositeRiskScore: 12.4986,
      extremeWeatherImpactIndustry: "Accommodation and Food Services",
      heatImpactIndustryRank: "Accommodation and Food Services most affected",
      rainImpactIndustryRank: "Accommodation and Food Services most affected by rainstorm",
      industries: { Manufacturing: 119, Utilities: 81.4, WholesaleRetail: 109.1, Transportation: 82.1, AccommodationFood: 69.5, InfoComm: 117, FinanceInsurance: 112, WholeEconomy: 105.9 }
    },
    {
      year: 2021, avgMaxTemp: 27.5175, heatDays: 4, avgMinTemp: 22.6386, coldDays: 0, influenzaTotal: 172,
      rainfall: 6.3224, rainstormDays: 4, abnormalHeatYear: "Abnormal Heat Year", heatDeviation: 0.6944,
      heatRiskLevel: "Medium", fluAnomaly: "Abnormally Low", heatFluImpactIndex: 0.0830, extremeWeatherIntensityIndex: 41.9048,
      climateAnomalyYear: "Normal", cateringRecoveryStatus: "Not yet recovered", compositeRiskScore: 4.9744,
      extremeWeatherImpactIndustry: "Wholesale and Retail",
      heatImpactIndustryRank: "Wholesale and Retail most affected",
      rainImpactIndustryRank: "Wholesale and Retail most affected by rainstorm",
      industries: { Manufacturing: 125.6, Utilities: 81.4, WholesaleRetail: 126.1, Transportation: 84.4, AccommodationFood: 78.8, InfoComm: 121.7, FinanceInsurance: 113.3, WholeEconomy: 110.5 }
    },
    {
      year: 2022, avgMaxTemp: 26.7595, heatDays: 15, avgMinTemp: 21.9951, coldDays: 0, influenzaTotal: 412,
      rainfall: 6.0436, rainstormDays: 4, abnormalHeatYear: "Normal Year", heatDeviation: -0.0637,
      heatRiskLevel: "Very High", fluAnomaly: "Abnormally Low", heatFluImpactIndex: 0.7452, extremeWeatherIntensityIndex: 78.5714,
      climateAnomalyYear: "Anomalous", cateringRecoveryStatus: "Not yet recovered", compositeRiskScore: 27.2381,
      extremeWeatherImpactIndustry: "Manufacturing",
      heatImpactIndustryRank: "Manufacturing most affected",
      rainImpactIndustryRank: "Accommodation and Food Services most affected by rainstorm",
      industries: { Manufacturing: 136.3, Utilities: 79.3, WholesaleRetail: 116.2, Transportation: 83.7, AccommodationFood: 76.4, InfoComm: 128.3, FinanceInsurance: 115.5, WholeEconomy: 110.2 }
    },
    {
      year: 2023, avgMaxTemp: 27.2038, heatDays: 4, avgMinTemp: 22.5992, coldDays: 0, influenzaTotal: 49340,
      rainfall: 7.6030, rainstormDays: 4, abnormalHeatYear: "Normal Year", heatDeviation: 0.3807,
      heatRiskLevel: "Medium", fluAnomaly: "Abnormally High", heatFluImpactIndex: 23.7995, extremeWeatherIntensityIndex: 41.9048,
      climateAnomalyYear: "Normal", cateringRecoveryStatus: "Clearly recovered", compositeRiskScore: 40.3093,
      extremeWeatherImpactIndustry: "Manufacturing",
      heatImpactIndustryRank: "Manufacturing most affected",
      rainImpactIndustryRank: "Wholesale and Retail most affected by rainstorm",
      industries: { Manufacturing: 142.9, Utilities: 82.5, WholesaleRetail: 117.4, Transportation: 105.5, AccommodationFood: 92.5, InfoComm: 127.2, FinanceInsurance: 115.6, WholeEconomy: 111.3 }
    },
    {
      year: 2024, avgMaxTemp: 27.3101, heatDays: 2, avgMinTemp: 22.8380, coldDays: 0, influenzaTotal: 47155,
      rainfall: 6.3127, rainstormDays: 1, abnormalHeatYear: "Abnormal Heat Year", heatDeviation: 0.4870,
      heatRiskLevel: "Medium", fluAnomaly: "Abnormally High", heatFluImpactIndex: 11.3728, extremeWeatherIntensityIndex: 13.8095,
      climateAnomalyYear: "Normal", cateringRecoveryStatus: "Clearly recovered", compositeRiskScore: 33.9484,
      extremeWeatherImpactIndustry: "Manufacturing",
      heatImpactIndustryRank: "Manufacturing most affected",
      rainImpactIndustryRank: "Wholesale and Retail most affected by rainstorm",
      industries: { Manufacturing: 144.2, Utilities: 82.6, WholesaleRetail: 123.8, Transportation: 116.6, AccommodationFood: 91.5, InfoComm: 127.1, FinanceInsurance: 118.6, WholeEconomy: 113.9 }
    }
  ];

  const industryNameMap = {
    Manufacturing: "Manufacturing",
    Utilities: "Electricity/Gas/Water/Waste",
    WholesaleRetail: "Import/Export Wholesale/Retail",
    Transportation: "Transportation/Storage/Postal",
    AccommodationFood: "Accommodation/Food Services",
    InfoComm: "Information/Communications",
    FinanceInsurance: "Finance/Insurance",
    WholeEconomy: "Whole Economy"
  };

  const years = annualData.map((d) => d.year);
  let selectedYear = years[0];
  let isPlaying = false;
  let timerId = null;

  const overviewCards = document.getElementById("overviewCards");
  const insightList = document.getElementById("insightList");
  const selectedYearLabel = document.getElementById("selectedYearLabel");
  const chart2Annotation = document.getElementById("chart2Annotation");
  const sortModeEl = document.getElementById("sortMode");

  function getYearData(year) {
    return annualData.find((d) => d.year === year);
  }

  function riskWidth(score) {
    const cap = Math.max(0, Math.min(100, (score / 50) * 100));
    return `${cap.toFixed(1)}%`;
  }

  function renderOverview(year) {
    const d = getYearData(year);
    if (!d) return;
    selectedYearLabel.textContent = `Year: ${year}`;

    const alertClass = d.abnormalHeatYear === "Abnormal Heat Year" ? "alert" : "";
    overviewCards.innerHTML = `
      <article class="card ${alertClass}">
        <h3>Temperature</h3>
        <div class="metric"><span>Avg Max Temp</span><strong>${d.avgMaxTemp.toFixed(2)} °C</strong></div>
        <div class="metric"><span>Avg Min Temp</span><strong>${d.avgMinTemp.toFixed(2)} °C</strong></div>
        <div class="metric"><span>Hot Days (&gt;35)</span><strong>${d.heatDays}</strong></div>
        <div class="metric"><span>Cold Days (&lt;5)</span><strong>${d.coldDays}</strong></div>
      </article>
      <article class="card">
        <h3>Rainfall</h3>
        <div class="metric"><span>Avg Rainfall</span><strong>${d.rainfall.toFixed(2)}</strong></div>
        <div class="metric"><span>Rainstorm Days</span><strong>${d.rainstormDays}</strong></div>
        <div class="metric"><span>Climate Year Type</span><strong>${d.climateAnomalyYear}</strong></div>
      </article>
      <article class="card">
        <h3>Health</h3>
        <div class="metric"><span>Influenza Cases</span><strong>${d.influenzaTotal.toLocaleString()}</strong></div>
        <div class="metric"><span>Influenza Anomaly</span><strong>${d.fluAnomaly}</strong></div>
        <div class="metric"><span>Heat Health Risk</span><strong>${d.heatRiskLevel}</strong></div>
      </article>
      <article class="card">
        <h3>Industry and Risk</h3>
        <div class="metric"><span>Most Affected Industry</span><strong>${d.extremeWeatherImpactIndustry}</strong></div>
        <div class="metric"><span>Recovery Status</span><strong>${d.cateringRecoveryStatus}</strong></div>
        <div class="metric"><span>Composite Risk</span><strong>${d.compositeRiskScore.toFixed(2)}</strong></div>
        <div class="progress"><span style="width:${riskWidth(d.compositeRiskScore)};"></span></div>
      </article>
    `;

    const keyFindings = [
      `Heat profile: ${d.heatDays} hot days with average maximum temperature at ${d.avgMaxTemp.toFixed(2)} °C.`,
      `Health signal: influenza total reached ${d.influenzaTotal.toLocaleString()} cases, marked as "${d.fluAnomaly}".`,
      `Risk interpretation: heat health risk was "${d.heatRiskLevel}" with composite risk score ${d.compositeRiskScore.toFixed(2)}.`,
      `Economic note: "${d.extremeWeatherImpactIndustry}" was identified as the most weather-affected industry.`
    ];
    insightList.innerHTML = keyFindings.map((item) => `<li>${item}</li>`).join("");
  }

  const root1 = am5.Root.new("chart1");
  root1.setThemes([am5themes_Animated.new(root1)]);
  const chart1 = root1.container.children.push(
    am5xy.XYChart.new(root1, { panX: true, panY: false, wheelX: "panX", wheelY: "zoomX", layout: root1.verticalLayout })
  );

  const xAxis1 = chart1.xAxes.push(
    am5xy.CategoryAxis.new(root1, {
      categoryField: "year",
      renderer: am5xy.AxisRendererX.new(root1, { minGridDistance: 30 })
    })
  );
  xAxis1.data.setAll(annualData.map((d) => ({ year: String(d.year), ...d })));

  const yAxisTemp = chart1.yAxes.push(
    am5xy.ValueAxis.new(root1, { renderer: am5xy.AxisRendererY.new(root1, {}) })
  );
  const yAxisFlu = chart1.yAxes.push(
    am5xy.ValueAxis.new(root1, { renderer: am5xy.AxisRendererY.new(root1, { opposite: true }) })
  );

  const tempSeries = chart1.series.push(
    am5xy.ColumnSeries.new(root1, {
      name: "Avg Max Temperature (°C)",
      xAxis: xAxis1,
      yAxis: yAxisTemp,
      valueYField: "avgMaxTemp",
      categoryXField: "year",
      tooltip: am5.Tooltip.new(root1, {
        labelText: "Year: {categoryX}\nAvg Max Temp: {valueY}\nHeat Year Type: {abnormalHeatYear}\nHeat Risk: {heatRiskLevel}"
      })
    })
  );
  tempSeries.columns.template.setAll({ fill: am5.color(0xf59e0b), stroke: am5.color(0xd97706), cursorOverStyle: "pointer" });

  const heatDaysSeries = chart1.series.push(
    am5xy.LineSeries.new(root1, {
      name: "Hot Days (>35°C)",
      xAxis: xAxis1,
      yAxis: yAxisTemp,
      valueYField: "heatDays",
      categoryXField: "year",
      stroke: am5.color(0xdc2626),
      fill: am5.color(0xdc2626),
      tooltip: am5.Tooltip.new(root1, { labelText: "Year: {categoryX}\nHot Days: {valueY}" })
    })
  );
  heatDaysSeries.strokes.template.setAll({ strokeWidth: 2 });
  heatDaysSeries.bullets.push(function () {
    return am5.Bullet.new(root1, {
      sprite: am5.Circle.new(root1, { radius: 4, fill: am5.color(0xdc2626) })
    });
  });

  const fluSeries = chart1.series.push(
    am5xy.LineSeries.new(root1, {
      name: "Influenza Cases",
      xAxis: xAxis1,
      yAxis: yAxisFlu,
      valueYField: "influenzaTotal",
      categoryXField: "year",
      stroke: am5.color(0x2563eb),
      tooltip: am5.Tooltip.new(root1, { labelText: "Year: {categoryX}\nInfluenza Cases: {valueY}" })
    })
  );
  fluSeries.strokes.template.setAll({ strokeWidth: 2.5 });

  [tempSeries, heatDaysSeries, fluSeries].forEach((s) => s.data.setAll(annualData.map((d) => ({ ...d, year: String(d.year) }))));

  const legend1 = chart1.children.push(am5.Legend.new(root1, {}));
  legend1.data.setAll([tempSeries, heatDaysSeries, fluSeries]);

  function handleYearClick(dataContext) {
    if (!dataContext || !dataContext.year) return;
    setSelectedYear(Number(dataContext.year));
  }
  tempSeries.columns.template.events.on("click", (ev) => handleYearClick(ev.target.dataItem.dataContext));
  heatDaysSeries.bulletsContainer.events.on("click", (ev) => {
    if (ev.target && ev.target.dataItem) handleYearClick(ev.target.dataItem.dataContext);
  });

  const root2 = am5.Root.new("chart2");
  root2.setThemes([am5themes_Animated.new(root2)]);
  const chart2 = root2.container.children.push(am5xy.XYChart.new(root2, { panY: true, wheelY: "zoomY" }));

  const yAxis2 = chart2.yAxes.push(
    am5xy.CategoryAxis.new(root2, { categoryField: "industry", renderer: am5xy.AxisRendererY.new(root2, { inversed: true }) })
  );
  const xAxis2 = chart2.xAxes.push(am5xy.ValueAxis.new(root2, { renderer: am5xy.AxisRendererX.new(root2, {}) }));

  const barSeries = chart2.series.push(
    am5xy.ColumnSeries.new(root2, {
      xAxis: xAxis2,
      yAxis: yAxis2,
      valueXField: "value",
      categoryYField: "industry",
      tooltip: am5.Tooltip.new(root2, { labelText: "{industry}\nIndex: {value}\nDelta vs 2015: {delta}%" })
    })
  );
  barSeries.columns.template.setAll({ cornerRadiusTR: 5, cornerRadiusBR: 5 });

  function getIndustryRows(year) {
    const d = getYearData(year);
    const base = getYearData(2015);
    const rows = Object.keys(industryNameMap).map((key) => {
      const value = d.industries[key];
      const delta = ((value - base.industries[key]) / base.industries[key]) * 100;
      return { key, industry: industryNameMap[key], value, delta: Number(delta.toFixed(2)) };
    });
    const sortMode = sortModeEl.value;
    if (sortMode === "deltaAsc") {
      rows.sort((a, b) => a.delta - b.delta);
    } else {
      rows.sort((a, b) => b.value - a.value);
    }
    return rows;
  }

  function renderChart2(year) {
    const d = getYearData(year);
    const rows = getIndustryRows(year);
    yAxis2.data.setAll(rows);
    barSeries.data.setAll(rows);
    chart2Annotation.textContent = `Year ${year}: Extreme weather impacted "${d.extremeWeatherImpactIndustry}". Heat ranking: ${d.heatImpactIndustryRank}. Rainstorm ranking: ${d.rainImpactIndustryRank}.`;
  }

  function setSelectedYear(year) {
    if (!years.includes(year)) return;
    selectedYear = year;
    renderOverview(selectedYear);
    renderChart2(selectedYear);
  }

  function stepYear(delta) {
    const idx = years.indexOf(selectedYear);
    const nextIdx = (idx + delta + years.length) % years.length;
    setSelectedYear(years[nextIdx]);
  }

  document.getElementById("prevYearBtn").addEventListener("click", () => stepYear(-1));
  document.getElementById("nextYearBtn").addEventListener("click", () => stepYear(1));
  document.getElementById("playBtn").addEventListener("click", function () {
    isPlaying = !isPlaying;
    this.textContent = isPlaying ? "Pause" : "Play";
    if (isPlaying) {
      timerId = setInterval(() => stepYear(1), 1400);
    } else if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  });
  sortModeEl.addEventListener("change", () => renderChart2(selectedYear));

  const sectionIds = ["why-this-matters", "section-overview", "section-trend", "section-industry"];
  const tocLinks = Array.from(document.querySelectorAll("[data-section-link]"));
  const readingProgressBar = document.getElementById("readingProgressBar");

  function setActiveToc(sectionId) {
    tocLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("data-section-link") === sectionId);
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible.length > 0) {
        setActiveToc(visible[0].target.id);
      }
    },
    {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: [0.1, 0.25, 0.5]
    }
  );

  sectionIds.forEach((id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });

  function updateReadingProgress() {
    const scrollTop = window.scrollY || window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const ratio = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
    if (readingProgressBar) {
      readingProgressBar.style.width = `${(ratio * 100).toFixed(2)}%`;
    }
  }

  window.addEventListener("scroll", updateReadingProgress, { passive: true });
  window.addEventListener("resize", updateReadingProgress);
  updateReadingProgress();

  renderOverview(selectedYear);
  renderChart2(selectedYear);
});
