import React from "react";
import ReactApexChart from "react-apexcharts";
import Menue from "../../../Authentication/regular_components/Menue";


function AreaCharts() {
  const [state, setState] = React.useState({
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      // {
      //   name: "series2",
      //   data: [11, 32, 45, 32, 34, 52, 41],
      // },
    ],
    options: {
      chart: {
        height: 150,
        type: "area",
      },
      colors: ["#ff69b4", "#888888"], // 🔵 تحديد ألوان الخطوط لكل سلسلة (series1 = أخضر, series2 = أصفر)
 
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (
    <div className="w-[1009px]">
      <div id="chart" className="font-usedFont bg-white p-4 rounded-lg">
        <div id="html-dist" className="flex justify-between items-center mb-[10px]" >
   
          <b>Total Revenue</b>
          <Menue
            table={true}        
            options={[]}
            labelMenue={<div className="flex items-center" >
              <span class="material-symbols-outlined">
              event_available
              </span> Last Days </div>}
            NObtn={true}
            timeHandeler={() => {}}
            chart
          />
        </div>

        <ReactApexChart
          options={state.options}
          series={state.series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
}

export default AreaCharts;
