import React from 'react'
import ReactApexChart from 'react-apexcharts'; 

 const PieChart = ( ) => {

          
  const [state, setState] = React.useState({
    series: [44, 55, 41, 17, 15],
    options: {
   
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'radial',
          shadeIntensity: 1,
          gradientToColors: ['transparent'],
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 0.8,
          stops: [0, 100],
        },
      },
      colors: ['#3498db', '#3498db', '#3498db', '#3498db', '#3498db'],
      legend: {
        position: 'right',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200, // 👈 العرض في الشاشات الصغيرة
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });
  
    

    return (
      <div>
        <div id="chart" className='ml-[10px] w-[350px]  font-usedFont bg-white p-[10px] rounded-lg pb-[30px]'>
       <div className='text-[16px] mb-[48px] mt-[15px]'><b>
         Most Reserved Rooms
         </b>
        </div>  
            <ReactApexChart   width={370}    // 👈 يمكن تحديد العرض هنا
  height={370}  options={state.options} series={state.series} type="donut" />
          </div>
   
      </div>
    );
}
    

export default  PieChart