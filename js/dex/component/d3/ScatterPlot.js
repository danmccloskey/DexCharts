function ScatterPlot(userConfig) {
  var chart = new DexComponent(userConfig,
    {
      'parent'           : null,
      'width'            : 600,
      'height'           : 400,
      'csv'              : {
        'header' : [ "X", "Y" ],
        'data'   : [
          [0, 0],
          [1, 1],
          [2, 4],
          [3, 9],
          [4, 16]
        ],
      },
      'margin'           : { top : 20, right : 15, bottom : 60, left : 60 },
      'selectedColor'    : "red",
      'unselectedColor'  : "steelblue",
      'unselectedRadius' : 8,
      'selectedRadius'   : 8,
      'xi'               : 0,
      'yi'               : 1,
      'transform'        : ''
    });

  chart.render = function () {
    this.update();
  };

  chart.update = function () {
    var chart = this;
    var config = chart.config;
    var csv = config.csv;

    //console.log("CONFIG: " + this.config);
    //console.dir(this.registry);

    x = d3.scale.linear()
      .domain([0, d3.max(csv.data, function (d) {
        return d[0];
      })])
      .range([0, config.width]);

    y = d3.scale.linear()
      .domain([0, d3.max(csv.data, function (d) {
        return d[1];
      })])
      .range([ config.height, 0 ]);

    var chartContainer = d3.select(config.parent).append('g')
      .attr('width', config.width)
      .attr('height', config.height)
      .attr('class', 'main')
      .attr('transform', config.transform);

    // draw the x axis
    var xAxis = d3.svg.axis()
      .scale(x)
      .orient('bottom');

    var brush = d3.svg.brush()
      .x(x)
      .y(y)
      .on("brushstart", function (d) {
        brushstartHandler({});
      })
      .on("brush", function (d) {
        brushmoveHandler({});
      })
      .on("brushend", function (d) {
        brushendHandler({});
      });

    //console.log("BRUSH: " + brush);

    chartContainer.append('g')
      .attr('transform', 'translate(0,' + config.height + ')')
      .attr('class', 'main axis date')
      .call(xAxis);

    // draw the y axis
    var yAxis = d3.svg.axis()
      .scale(y)
      .orient('left');

    chartContainer.append('g')
      .attr('transform', 'translate(0,0)')
      .attr('class', 'main axis date')
      .call(yAxis);

    var g = chartContainer.append("svg:g")
      .attr("id", "pointContainer")
      .call(brush);

    g.selectAll("scatter-dots")
      .data(csv.data)
      .enter().append("svg:circle")
      .attr("id", "scatter-dot")
      .attr("cx", function (d) {
        return x(d[config.xi]);
      })
      .attr("cy", function (d) {
        return y(d[config.yi]);
      })
      .attr("r", config.unselectedRadius)
      .style("fill", config.unselectedColor)
      .on("mouseover", function (d) {
        mouseOverHandler({ node : this, data : d});
      })
      .on("mouseout", function (d) {
        mouseOutHandler({ node : this, data : d});
      });

    function brushstartHandler(chartEvent) {
      //console.log("brush start()");
      //console.log("brush empty? " + brush.empty());
      d3.selectAll("#scatter-dot")
        .attr("r", config.unselectedRadius)
        .style("fill", config.unselectedColor);
    }

    function brushmoveHandler(chartEvent) {
      //console.log("brush move(" + brush.extent() + ")");
    }

    function brushendHandler(chartEvent) {
      //console.log("brushend");
      //console.log("FOO: " + chart);
      //this.dump("ScatterPlot.brushendHandler()");
      //console.dir(config);
      //console.dir(registry);
      var extent = brush.extent();
      //console.dir(brush.extent());

      var data = [];

      var active = d3.selectAll("#scatter-dot")
        .filter(function (d, i) {
          //console.dir(extent);
          //console.dir(d);
          if (d[0] >= extent[0][0] && d[0] <= extent[1][0] &&
            d[1] >= extent[0][1] && d[1] <= extent[1][1]) {
            data.push([d[0], d[1]]);
            return this;
          }
          return null;
        })
        .attr("r", config.selectedRadius)
        .style("fill", config.selectedColor);

      chart.notify({ type : "brushend", data : data});
    }

    function mouseOverHandler(chartEvent) {
      //console.log("mouseover");
      //console.log("MOUSEOVER: node=" + node + ", data=" + data + ", originator=" + originator);
      // If we're the originator of this event, notify our listeners to
      // update themselves in turn.

      // Pick yourself so you have access to all the D3 goodies you get
      // through selection.
      d3.select(chartEvent.node)
        .style("fill", config.selectedColor)
        .attr("r", config.selectedRadius);

      d3.select("#pointContainer")
        .append("text")
        .attr("x", x(chartEvent.data[0]))
        .attr("y", y(chartEvent.data[1]) - 10)
        .attr("dy", ".35m")
        .style("font-size", 14)
        .attr("text-anchor", "top")
        .attr("fill", "black")
        .text(function (d) {
          return chartEvent.data[1];
        });
    }

    function mouseOutHandler(chartEvent) {
      d3.select("#pointContainer").selectAll("text").remove();
      d3.select(chartEvent.node)
        .style("fill", config.unselectedColor)
        .attr("r", config.unselectedRadius);
    }
  };

  return chart;
}