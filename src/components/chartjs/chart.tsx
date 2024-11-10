import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import type { ChartConfiguration } from "chart.js/auto";

interface ChartComponentProps {
  onDataUpdate: (data: number) => void;
}

const ChartComponent = ({ onDataUpdate }: ChartComponentProps) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);
  const labels: string[] = [];
  const datapoints = [0];

  const [latestDisplayData, setLatestDisplayData] = useState<number>(0);

  onDataUpdate(latestDisplayData);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");
    if (!ctx || !chartRef.current) return;

    const gradient = ctx.createLinearGradient(0, 0, chartRef.current.width, 0);
    // if (datapoints[datapoints.length - 1] < 100) {
    //   gradient.addColorStop(0, "#31355B");
    //   gradient.addColorStop(0.5, "#88AAED");
    //   gradient.addColorStop(1, "#52FF5B");
    // } else {
    //   gradient.addColorStop(0, "#31355B");
    //   gradient.addColorStop(0.5, "#ED88B4");
    //   gradient.addColorStop(0.7, "#ED88B4");
    //   gradient.addColorStop(0.8, "#ED88B4");
    //   gradient.addColorStop(1, "#F8D99B");
    // }

    const fillGradient = ctx.createLinearGradient(
      0,
      0,
      0,
      chartRef.current.height
    );
    fillGradient.addColorStop(1, "#b2f0b666");

    const data = {
      labels: labels,
      datasets: [
        {
          label: "",
          data: datapoints,
          borderColor: gradient,
          backgroundColor: fillGradient,
          fill: true,
          tension: 0,
          pointRadius: 0,
          pointHoverRadius: 0,
        },
      ],
    };

    const config: ChartConfiguration<"line", number[], string> = {
      type: "line",
      data: data,
      options: {
        animations: {
          tension: {
            duration: 0,
            easing: "linear",
            from: 1,
            to: 0,
            loop: false,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            display: true,
            grid: {
              display: false,
            },
          },
          y: {
            display: true,
            suggestedMin: 0.1,
            suggestedMax: 1.8,
            grid: {
              display: false,
            },
            ticks: {
              callback: (value: string | number) => `${value}x`,
            },
          },
        },
      },
    };

    chartInstance.current = new Chart(ctx, config);

    if (chartInstance.current) {
      chartInstance.current.options.animation = false;
      chartInstance.current.options.animations = { x: false, colors: false };
      chartInstance.current.options.animations.x = false;
      chartInstance.current.options.transitions = {
        active: { animation: { duration: 0 } },
      };
    }

    const interval = setInterval(() => {
      if (!chartInstance.current) return;

      const t = datapoints.length;
      let newData = 0.01 * t * t;

      if (newData >= 100) {
        clearInterval(interval);
        return;
      }

      newData = Number.parseFloat(newData.toFixed(2));
      datapoints.push(newData);
      setLatestDisplayData(newData);

      labels.push(`${t + 1}s`);

      if (!ctx || !chartRef.current) return;

      const gradient = ctx.createLinearGradient(
        0,
        0,
        chartRef.current.width,
        0
      );
      if (datapoints[datapoints.length - 1] < 98) {
        gradient.addColorStop(0, "#31355B");
        gradient.addColorStop(0.5, "#88AAED");
        gradient.addColorStop(1, "#52FF5B");
      } else {
        gradient.addColorStop(0, "#31355B");
        gradient.addColorStop(0.5, "#ED88B4");
        gradient.addColorStop(1, "#F8D99B");
      }

      chartInstance.current.data.labels = labels;

      if (datapoints.length > labels.length) {
        chartInstance.current.data.labels?.push(datapoints.length - 1);
      }

      for (const dataset of chartInstance.current.data.datasets) {
        dataset.data = datapoints;
        dataset.borderColor = gradient;
      }

      chartInstance.current.update();
    }, 100);

    return () => {
      clearInterval(interval);
      chartInstance.current?.destroy();
    };
  }, []);

  return (
    <div className=" bg-gradient-radial from-[#3C4065] via-[#252C56] to-[#23284E] rounded-2xl pl-[12px] lg:pl-[22px] pb-[31px] pt-[62px] pr-[21px] lg:pr-[56px] lg:min-h-">
      <canvas ref={chartRef} className="" />
    </div>
  );
};

export default ChartComponent;
