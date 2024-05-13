// "use client";
// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import ReactApexChart from "react-apexcharts";

// function RightMainScreen() {
//   const [series] = useState([92]);
//   const [options] = useState<any>({
//     chart: {
//       height: 160,
//       type: "radialBar",
//     },
//     plotOptions: {
//       radialBar: {
//         startAngle: -90,
//         endAngle: 90,

//         dataLabels: {
//           name: {
//             fontSize: "16px",
//             color: undefined,
//           },
//           value: {
//             offsetY: 10,
//             fontSize: "22px",
//             color: undefined,
//             // formatter: function (val:any) {
//             //   return val + "%";
//             // }
//           },
//         },
//       },
//     },
//     fill: {
//       type: "gradient",
//       gradient: {
//         inverseColors: false,
//         stops: [0, 50, 65, 91],
//       },
//       colors: ["#7FFF7F"],
//     },
//     stroke: {
//       dashArray: 4,
//     },
//     labels: ["Match Score"],
//     dataLabels: {
//       color: "black",
//     },
//   });

//   return (
//     <div>
//       <div id="chart">
//         <ReactApexChart
//           options={options}
//           series={series}
//           type="radialBar"
//           height={250}
//         />
//       </div>
//       <div id="html-dist"></div>
//     </div>
//   );
// }

// export default RightMainScreen;


// @ts-nocheck
"use client";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactApexChart from "react-apexcharts";

function RightMainScreen() {
  const [series] = useState([92]);
  const [options] = useState({
    chart: {
      height: 160,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        dataLabels: {
          name: {
            fontSize: "16px",
            color: undefined,
          },
          value: {
            offsetY: 10,
            fontSize: "22px",
            color: undefined,
            // formatter: function (val:any) {
            //   return val + "%";
            // }
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        inverseColors: false,
        stops: [0, 50, 65, 91],
      },
      colors: ["#7FFF7F"],
    },
    stroke: {
      dashArray: 4,
    },
    labels: ["Match Score"],
    dataLabels: {
      color: "black",
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="radialBar"
          height={250}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default RightMainScreen;

