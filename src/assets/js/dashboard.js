window.onload = function() {
    var options = {
      animationEnabled: true,
      theme: "light2",
      axisX:{
        valueFormatString: "MMM"
      },
      axisY: {
        title: "Number of Registration",
        suffix: "K",
        minimum: 30
      },
      toolTip:{
        shared:true
      },
      legend:{
        cursor:"pointer",
        verticalAlign: "bottom",
        horizontalAlign: "left",
        dockInsidePlotArea: true,
        itemclick: toogleDataSeries
      },
      data: [{
        type: "line",
        showInLegend: true,
        name: "Projected Sales",
        markerType: "square",
        xValueFormatString: "DD MMM, YYYY",
        color: "#F08080",
        yValueFormatString: "#,##0K",
        dataPoints: [
          { x: new Date(2017, 1, 1), y: 63 },
          { x: new Date(2017, 2, 2), y: 69 },
          { x: new Date(2017, 3, 3), y: 65 },
          { x: new Date(2017, 4, 4), y: 70 },
          { x: new Date(2017, 5, 5), y: 71 },
          { x: new Date(2017, 6, 6), y: 65 },
          { x: new Date(2017, 7, 7), y: 73 },
          { x: new Date(2017, 8, 8), y: 96 },
          { x: new Date(2017, 9, 9), y: 84 },
          { x: new Date(2017, 10, 10), y: 85 },
          { x: new Date(2017, 11, 11), y: 86 },
          { x: new Date(2017, 12, 12), y: 94 }
        ]
      },
        {
          type: "line",
          showInLegend: true,
          name: "Actual Sales",
          lineDashType: "dash",
          yValueFormatString: "#,##0K",
          dataPoints: [
            { x: new Date(2017, 1, 1), y: 60 },
            { x: new Date(2017, 2, 2), y: 57 },
            { x: new Date(2017, 3, 3), y: 51 },
            { x: new Date(2017, 4, 4), y: 56 },
            { x: new Date(2017, 5, 5), y: 54 },
            { x: new Date(2017, 6, 6), y: 55 },
            { x: new Date(2017, 7, 7), y: 54 },
            { x: new Date(2017, 8, 8), y: 69 },
            { x: new Date(2017, 9, 9), y: 65 },
            { x: new Date(2017, 10, 10), y: 66 },
            { x: new Date(2017, 11, 11), y: 63 },
            { x: new Date(2017, 12, 12), y: 67 }
          ]
        }]
    };
    $("#chartContainer").CanvasJSChart(options);

    function toogleDataSeries(e){
      if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
      } else{
        e.dataSeries.visible = true;
      }
      e.chart.render();
    }

    var monthCrt = {
      exportEnabled: true,
      animationEnabled: true,
      legend:{
        horizontalAlign: "right",
        verticalAlign: "center"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b> (#percent%)",
        legendText: "{name} (#percent%)",
        indexLabelPlacement: "inside",
        dataPoints: [
          { y: 30, name: "Intercity Location" },
          { y: 20, name: "Outdoor Destinations" },
          { y: 10, name: "Fixed Destinations" },
          { y: 20, name: "Choose Your Car" },
        ]
      }]
    };
    $("#monthly-chart").CanvasJSChart(monthCrt);
  }
