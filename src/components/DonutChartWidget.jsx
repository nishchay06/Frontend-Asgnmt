import React from "react"
import ApexCharts from "apexcharts"

const DonutChartWidget = () => {
  const getChartOptions = () => {
    return {
      series: [80, 20],
      colors: ["#1C64F2", "#16BDCA"],
      chart: {
        height: 400,
        width: "100%",
        type: "donut",
      },
      stroke: {
        colors: ["transparent"],
        lineCap: "",
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: false,
              name: {
                show: true,
                fontFamily: "Inter, sans-serif",
                offsetY: 20,
              },
              total: {
                showAlways: true,
                show: true,
                fontFamily: "Inter, sans-serif",
              },
              value: {
                show: true,
                fontFamily: "Inter, sans-serif",
                offsetY: -20,
                formatter: function (value) {
                  return value + "%"
                },
              },
            },
            size: "80%",
          },
        },
      },
      grid: {
        padding: {
          top: -2,
        },
      },
      labels: ["Crowdsale Investors", "Foundation"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "right",
        fontFamily: "Inter, sans-serif",
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return value + "%"
          },
        },
      },
      xaxis: {
        labels: {
          formatter: function (value) {
            return value + "%"
          },
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
    }
  }

  if (
    document.getElementById("donut-chart") &&
    typeof ApexCharts !== "undefined"
  ) {
    const chart = new ApexCharts(
      document.getElementById("donut-chart"),
      getChartOptions()
    )
    chart.render()
  }

  return (
    <>
      <div class='max-w-sm w-fullp-4 md:p-6'>
        <div class='py-6' id='donut-chart'></div>
      </div>
    </>
  )
}

export default DonutChartWidget
