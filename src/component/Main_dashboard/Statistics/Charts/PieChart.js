import React from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
  const [state, setState] = React.useState({
    series: [44, 55, 41, 17, 15],
    options: {
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "radial",
          shadeIntensity: 1,
          gradientToColors: ["blue", "blue", "#6fb3ff", "#6fb3ff", "#6fb3ff"],
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 0.8,
          stops: [0, 100],
        },
      },
      colors: ["#5b63fe", "#3498db", "#3498db", "#3498db", "#3498db"],
      legend: {
        position: "right",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 250, // 👈 العرض في الشاشات الصغيرة
              height: 250, // 👈 الارتفاع في الشاشات الصغيرة
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div
      id="chart"
      className="lg:ml-[10px] mb-4 md:w-[93%]   mr-3  sm:w-[340px]  flex sm:grid  font-usedFont bg-white p-[10px] rounded-lg sm:pb-[30px]"
    >
      <div className="text-[16px] mb-[48px] mt-[15px]">
        <b>Most Reserved Rooms</b>
      </div>
      <ReactApexChart
        width={325} // 👈 يمكن تحديد العرض هنا
        height={325}
        options={state.options}
        series={state.series}
        type="donut"
      />
    </div>
  );
};

export default PieChart;
