import React from "react";
import ReactApexChart from "react-apexcharts";
import Menue from "../../../Authentication/regular_components/Menue";


function CoulmnCharts() {
  const [state, setState] = React.useState({
    series: [
      {
        name: "Booked",
        data: [44, 55, 41, 67, 22, 43],
      },
      {
        name: "Canceled",
        data: [13, 23, 20, 8, 13, 27],
      },
    ],
    options: {   
       dataLabels: {
        enabled: false,
      },
      colors: ["rgba(255, 165, 0)", "rgba(255, 165, 0, 0.4)"],
      chart: {
        type: "bar",
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
        width:50
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetY: -10,
        markers: {
          radius: 12
        }
      },
  
      plotOptions: {
        bar: {
           columnWidth: '20%',
          borderRadius: 10,
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'last',
          dataLabels: {
            position: 'top',
          },
        },
      },
    }
    
    
    

  });

  return (
    <div>
      <div
        id="chart"
        className="lg:w-[595px]  mr-3  md:w-[92%]    mb-5 font-usedFont bg-white p-4 rounded-lg"
      >
        <div id="html-dist" className="flex justify-between items-center mb-[10px]">
          <b>Reservation</b>
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
          type="bar"
          height={290}
        />
      </div>
    </div>
  );
}

export default CoulmnCharts;
