var chart = new ej.charts.Chart({
    //Initializing Primary X Axis
    primaryXAxis: {
        valueType: "Category",
        title: "Months"
    },
    //Initializing Primary Y Axis
    primaryYAxis: {
        title: "Number of Visitors"
    },
    //Initializing Chart Series
    series: [
        {
            type: "Bar",
            dataSource: [
                { month: "Jan", visitors: 50 },
                { month: "Feb", visitors: 57 },
                { month: "Mar", visitors: 48 },
                { month: "Apr", visitors: 60 },
                { month: "May", visitors: 70 },
                { month: "Jun", visitors: 40 },
  
            ],
            xName: "month",
            yName: "visitors"
        }
    ]
  });
  chart.appendTo("#container");
  
       