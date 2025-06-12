"use client";

import dynamic from "next/dynamic";

const TokenPieChart = dynamic(() => import("./ui/pie-chart"), {
  ssr: false,
  loading: () => <p className="text-white text-center">Loading chart...</p>,
});

export default function Tokenomics() {
  const legendItems = [
    { text: "Team & Advisory", percent: "15%", color: "#4361ee" },
    { text: "Development fund", percent: "10%", color: "#5570c6" },
    { text: "Partnerships", percent: "5%", color: "#c34270" },
    { text: "ISPO + Token sale", percent: "20%", color: "#fb1464" },
    { text: "Game rewards", percent: "50%", color: "#01d4b3" },
  ];

  return (
    <section
      id="tokenomics"
      className="relative overflow-x-hidden py-[100px] md:py-[80px] bg-white text-black"
    >
      <div className="container mx-auto rounded-[35px] border border-white/10 bg-white/10 backdrop-blur-[18px] px-8 py-16 md:px-20 md:py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-10">
          <span className="text-black font-yellowtail text-5xl">TOKENOMICS</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          <div className="max-w-[500px] w-full">
            <TokenPieChart />
          </div>

          <ul className="space-y-6 text-left">
            {legendItems.map((item, i) => (
              <li key={i} className="flex items-center gap-4">
                <span
                  className="inline-block rounded-full"
                  style={{
                    backgroundColor: item.color,
                    width: "36px",
                    height: "36px",
                  }}
                ></span>
                <p className="text-lg md:text-xl font-semibold" style={{ color: item.color }}>
                  {item.text}: {item.percent}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
