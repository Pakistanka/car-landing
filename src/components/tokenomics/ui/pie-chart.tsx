"use client";

import * as echarts from "echarts/core";
import { LegendComponent, TitleComponent } from "echarts/components";
import { PieChart } from "echarts/charts";
import { LabelLayout } from "echarts/features";
import { SVGRenderer } from "echarts/renderers";
import { useEffect, useRef } from "react";

echarts.use([TitleComponent, LegendComponent, PieChart, SVGRenderer, LabelLayout]);

const options = {
  title: {
    text: "Tokenomics Distribution",
    left: "center",
    textStyle: { color: "#000" },
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "left",
    textStyle: { color: "#000" },
  },
  series: [
    {
      name: "Tokenomics",
      type: "pie",
      radius: "70%",
      data: [
        { value: 15, name: "Team & Advisory", itemStyle: { color: "#4361ee" } },
        { value: 10, name: "Development fund", itemStyle: { color: "#5570c6" } },
        { value: 5, name: "Partnerships", itemStyle: { color: "#c34270" } },
        { value: 20, name: "ISPO + Token sale", itemStyle: { color: "#fb1464" } },
        { value: 50, name: "Game rewards", itemStyle: { color: "#01d4b3" } },
      ],
      label: {
        color: "#000",
        formatter: "{b}: {d}%",
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};

export default function TokenPieChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);
    chartInstance.setOption(options);

    // Resize on window resize
    const handleResize = () => chartInstance.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chartInstance.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-80">
      <div ref={chartRef} className="w-full h-full"></div>
    </div>
  );
}
