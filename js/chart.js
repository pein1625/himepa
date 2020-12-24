$(function () {
  if (!$("#line-chart").length) return;

  Highcharts.chart("line-chart", {
    chart: {
      marginTop: 60,
      type: "spline"
    },
    title: {
      text: ""
    },

    subtitle: {
      text: ""
    },

    yAxis: {
      title: {
        text: ""
      }
    },

    xAxis: {
      gridLineWidth: 1,
      gridLineDashStyle: "Dash",
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      crosshair: true
      // accessibility: {
      //   rangeDescription: "",
      // },
    },

    legend: {
      layout: "horizontal",
      align: "top",
      verticalAlign: "top",
      x: 0,
      y: 0
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        }
      }
    },

    series: [{
      name: "総検知数",
      color: "#29CB97",
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175, 43934, 52503, 57177, 69658]
    }, {
      name: "未チェック",
      color: "#0062FF",
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434, 24916, 24064, 29742, 29851]
    }]
  });
});

$(function () {
  if (!$("#bar-chart").length) return;

  Highcharts.chart("bar-chart", {
    chart: {
      type: "column",
      marginTop: 60
    },
    title: {
      text: ""
    },
    // subtitle: {
    //   text: "Source: WorldClimate.com",
    // },
    xAxis: {
      categories: ["May 19", "Jun 19", "Jul 19", "Aug 19", "Sep 19", "Oct 19", "Nov 19", "Dec 19", "Jan 20", "Feb 20", "Mar 20", "Apr 20", "May 20", "Jun 20", "Jul 20", "Aug 20", "Sep 20", "Oct 20", "Nov 20", "Dec 20"],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: ""
      }
    },

    legend: {
      layout: "horizontal",
      align: "top",
      verticalAlign: "top",
      x: 0,
      y: 0
    },

    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: "高リスク",
      color: "#0062FF",
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }, {
      name: "総検知数",
      color: "#29CB97",
      data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
    }]
  });
});