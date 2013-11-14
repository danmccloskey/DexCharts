# Introduction

DexCharts is a library which provides highly interactive, configurable, and interoperable HTML5 reusable charts.

* A variety of reusable charts and charting components to choose from.
* A framework for interconnecting these charts via listeners.

## Live Examples

There are many examples bundled with DexCharts.  Click on any of the following links to check them out.

* [Bar Chart 1](http://dexvis.com/dexcharts/dist/2013.11.14/examples/BarChart1.html)
* [Bar Chart 2](http://dexvis.com/dexcharts/dist/2013.11.14/examples/BarChart2.html)
* [Bar Chart 3](http://dexvis.com/dexcharts/dist/2013.11.14/examples/BarChart3.html)
* [Chord Chart 1](http://dexvis.com/dexcharts/dist/2013.11.14/examples/Chord1.html)
* [Chord Chart 2](http://dexvis.com/dexcharts/dist/2013.11.14/examples/Chord2.html)
* [Dendrogram 1](http://dexvis.com/dexcharts/dist/2013.11.14/examples/Dendrogram1.html)
* [Dendrogram 2](http://dexvis.com/dexcharts/dist/2013.11.14/examples/Dendrogram2.html)
* [Dendrogram 3](http://dexvis.com/dexcharts/dist/2013.11.14/examples/Dendrogram3.html)
* [HeatMap 1](http://dexvis.com/dexcharts/dist/2013.11.14/examples/HeatMap1.html)
* [Horizontal Legend 1](http://dexvis.com/dexcharts/dist/2013.11.14/examples/HorizontalLegend1.html)
* [Legend 1](http://dexvis.com/dexcharts/dist/2013.11.14/examples/Legends1.html)
* [Line Chart 1](http://dexvis.com/dexcharts/dist/2013.11.14/examples/LineChart1.html)
* [Line Chart 2](http://dexvis.com/dexcharts/dist/2013.11.14/examples/LineChart2.html)
* [Line Chart 3](http://dexvis.com/dexcharts/dist/2013.11.14/examples/LineChart3.html)
* [Line Chart 4](http://dexvis.com/dexcharts/dist/2013.11.14/examples/LineChart4.html)
* [Parallel Coordinates 1](http://dexvis.com/dexcharts/dist/2013.11.14/examples/ParallelCoordinates1.html)
* [Parallel Coordinates 2](http://dexvis.com/dexcharts/dist/2013.11.14/examples/ParallelCoordinates2.html)
* [Parallel Coordinates 3](http://dexvis.com/dexcharts/dist/2013.11.14/examples/ParallelCoordinates3.html)
* [Parallel Coordinates 4](http://dexvis.com/dexcharts/dist/2013.11.14/examples/ParallelCoordinates4.html)
* [Pie Chart 1](http://dexvis.com/dexcharts/dist/2013.11.14/examples/PieChart1.html)
* [Pie Chart 2](http://dexvis.com/dexcharts/dist/2013.11.14/examples/PieChart2.html)
* [Pie Chart 3](http://dexvis.com/dexcharts/dist/2013.11.14/examples/PieChart3.html)
* [Sankey 1](http://dexvis.com/dexcharts/dist/2013.11.14/examples/Sankey1.html)
* [Sankey 2](http://dexvis.com/dexcharts/dist/2013.11.14/examples/Sankey2.html)
* [Sankey 3](http://dexvis.com/dexcharts/dist/2013.11.14/examples/Sankey3.html)
* [Sankey 4](http://dexvis.com/dexcharts/dist/2013.11.14/examples/Sankey4.html)
* [Sankey 5](http://dexvis.com/dexcharts/dist/2013.11.14/examples/Sankey5.html)
* [Sankey 6](http://dexvis.com/dexcharts/dist/2013.11.14/examples/Sankey6.html)
* [Sankey 7](http://dexvis.com/dexcharts/dist/2013.11.14/examples/Sankey7.html)
* [Sankey 8](http://dexvis.com/dexcharts/dist/2013.11.14/examples/Sankey8.html)
* [Sankey 9](http://dexvis.com/dexcharts/dist/2013.11.14/examples/Sankey9.html)
* [Scatter Plot 1](http://dexvis.com/dexcharts/dist/2013.11.14/examples/ScatterPlot1.html)
* [Scatter Plot 2](http://dexvis.com/dexcharts/dist/2013.11.14/examples/ScatterPlot2.html)
* [3D Scatter Plot 1](http://dexvis.com/dexcharts/dist/2013.11.14/examples/ScatterPlot3D1.html)
* [3D Scatter Plot 2](http://dexvis.com/dexcharts/dist/2013.11.14/examples/ScatterPlot3D2.html)
* [3D Scatter Plot 3](http://dexvis.com/dexcharts/dist/2013.11.14/examples/ScatterPlot3D3.html)
* [Scatter Plot Matrix](http://dexvis.com/dexcharts/dist/2013.11.14/examples/ScatterPlotMatrix1.html)
* [State Map 1](http://dexvis.com/dexcharts/dist/2013.11.14/examples/StateMap1.html)
* [State Map 2](http://dexvis.com/dexcharts/dist/2013.11.14/examples/StateMap2.html)
* [UI Controls 1](http://dexvis.com/dexcharts/dist/2013.11.14/examples/UI1.html)
* [UI Controls 2](http://dexvis.com/dexcharts/dist/2013.11.14/examples/UI2.html)
* [UI Controls 3](http://dexvis.com/dexcharts/dist/2013.11.14/examples/UI3.html)
* [UI Controls 4](http://dexvis.com/dexcharts/dist/2013.11.14/examples/UI4.html)
* [US County Map 1](http://dexvis.com/dexcharts/dist/2013.11.14/examples/USCountyMap1.html)
* [Vertical Legend 1](http://dexvis.com/dexcharts/dist/2013.11.14/examples/VerticalLegend1.html)
* [World Country Map 1](http://dexvis.com/dexcharts/dist/2013.11.14/examples/WorldCountryMap1.html)

## Usage

_**Step 1: Include D3**_

Make sure your HTML5 asset includes D3 like so:

```javascript
<script src="http://d3js.org/d3.v3.js"></script>
```

_**Step 2: Include DexCharts core**_

Now include the core DexCharts Javascript like so:

```javascript
<script src="../dex.js"></script>
```

_**Step 3: Include the specific components you will need:**_

Some components such as maps are quite large, so I decided that components should be required as needed instead of in one massive kitchen sink Javascript library.  Here, I am including a Bar Chart and a Horizontal Legend.

```javascript
<script src="../js/dex/component/d3/BarChart.js"></script>
<script src="../js/dex/component/d3/HorizontalLegend.js"></script>
```

_**Step 4: Include D3**_

Create one or more SVG containers for your charts::

Via html:

Or you can do it via html like this:

```html
<svg id="MyChart" width="1000" height="1000"></svg>
```

Or you can create the SVG in JavaScript code:

```javascript
var svg = d3.select("body").append("svg")
  .attr("id", "MyChart")
  .attr("width", 1000)
  .attr("height", 800)
  .append("g")
  .attr("transform", "translate(40,20)");
```

_**Step 5: Instantiate a chart**_

Next, we must configure and instantiate a chart.

```javascript
var mychart = new BarChart(
  {
    'parent' : '#MyChart',
    'csv'    :
    {
      'header' : [ "SALESMAN", "AGE", "SALES"],
      'data'   : [["BOB", 23, 1000], ["SUE", 32, 2000], ["PAT", 44, 3000]]
    }
  }
);
```

_**Step 6:**_

Render the chart.

```javascript
mychart.render();
```

### What else?

_**We can reconfigure and update our chart in one line.**_

This will change the simple bar chart to a grouped bar chart which will have columns for both AGE and SALES.

```javascript
mychart.attr("yi", [1, 2]).update();
```

_**We can create new charts from old charts.**_

Here we create a new chart called myotherchart from mychart.  It will inherit all parameters from the original.  Of course, this makes no sense, so we change the x/y offsets to display at a different location on the screen.

In two lines we are creating another permutation of a chart and rendering it!

```javascript
var myotherchart = new BarChart(mychart);
myotherchart.attr("yoffset", 400).render();
```

_**We can combine charts and tell them to listen to other another.**_

Here, we're telling our parallel coordinates chart (pcChart), to listen to our USStateMap named "map" when it generates a "selectState" event.  Data is passed through an object called chartEvent.

In this particular example, we're removing the old parallel lines chart, adding the selected state data to the data list, then updating the chart.  A live example of this visualization [US State Map wired to Parallel Coordinates](http://dexvis.com/vis/blog/2013/mar/reusable6/html/ParallelCoordinates3.html):

```javascript
map.addListener("selectState", pcChart, function(chartEvent)
  {
    if (stateMap[chartEvent.state] != null)
  	{
  	  d3.selectAll("#ParChart").remove();
  	  selectedStates[chartEvent.state] = true;

  	  var pcData = []
  	  
  	  for (var state in selectedStates)
  	  {
  	  	pcData.push(stateMap[state]);
  	  }
	  pcChart
	    .attr("normalize", pcData.length <= 1)
	    .attr("csv.data", pcData)
	    .attr("height", 200)
	    .update();
  	}
  });
```

# Configuration

Most configuration options can be configured with literals or dynamic functions.  Most of the visuals include reusable configurable types such as:

* Basic Shapes such as lines, circles and rectangles.
* Strokes
* Labels, fonts, etc...

## General

### Fonts

| Option  | Default    | Description |
| ------- |:-----------| -----:|
| family  | sans-serif | Sets the basic font family.  Ex: 'Arial'. |
| size    | 18         | Sets the size, in pixels, of the font. |
| style   | normal     | Sets the style of the font. Ex: normal, italic, oblique |
| variant | normal     | Sets the font variant.  Ex: normal, small-caps |
| weight  | normal     | Sets the weight of the font.  Ex: normal, bold, 100, 200, 300, 400, 500, 600, 700, 800, 900 |


### Strokes

| Option    | Default | Description |
| --------- |:--------| -----:|
| color     | black   | Sets the color of the stroke. Named colors and colors of the form #fff and #ffffff are accepted. |
| dasharray | empty   | Sets the pattern of the line to be drawn.  Ex: '1 1' would be a dashed line. |
| opacity   | 1       | Sets the opacity.  Values range from 0 to 1 with 0 representing a stroke which is fully tranparent and 1 representing a stroke which is fully opaque. |
| width     | 1       | Sets the width (in pixels) of the stroke. |

### Fills

| Option      | Default | Description |
| ----------- |:--------| -----:|
| fill        |         | Sets the color of the entity to be filled. |
| fillOpacity |         | Sets the opacity of the filling. |

### Links

| Option      | Default | Description |
| ----------- |:--------| -----:|
| stroke      | STROKE  | See Strokes. |
| fill        |         | Sets the color of the entity to be filled. |
| fillOpacity |         | Sets the opacity of the filling. 

### Labels

| Option     | Default | Description |
| ---------- |:--------| -----:|
| x                        | 0     | Sets the x location of this label. |
| y                        | 0     | Sets the y location of this label. |
| transform                | 0     | Applies a SVG transformation to this label. |
| dy                       | .71em | Sets the number of minor ticks to display. |
| font                     | FONT  | Sets the font for this label.  See: Fonts. |
| text                     | ''    | Sets the text value of this label. |
| anchor                   | 5     | Sets the anchor of this label.  Ex: start, middle, end |
| color                    | 5     | Sets the color of the label. |
| textLength               | ',d'  | Sets the length of the text.  The text will be adjusted to fit this length. |
| lengthAdjust             |       | Configures the tick label.  See Label configuration options. |
| writingMode              |       | Specifies whether the text is left to right, right to left, top to bottom, etc... Ex: lr-tb, rl-tb, tb-rl, lr, rl, tb, inherit |
| glyphOrientationVertical |       | The glyph orientation affects the amount that the current text position advances as each glyph is rendered.  |
  

### Ticks

| Option     | Default | Description |
| ---------- |:--------| -----:|
| count      | 5     | Sets the number of major ticks to display. |
| subdivide  | 3     | Sets the number of minor ticks to display. |
| size.major | 5     | Sets the size (in pixels) of the major ticks. |
| size.minor | 3     | Sets the size (in pixels) of the minor ticks. |
| size.end   | 5     | Sets the size (in pixels) of the ticks at either end of the axis. |
| padding    | 5     | Sets the padding. |
| format     | ',d'  | Sets the format of the tick labels. |
| label      | LABEL | Configures the tick label.  See Label configuration options. |

### Axis

| Option     | Default | Description |
| ---------- |:--------| -----:|
| tick   | TICK  | See Ticks. |
| orient | 3     | Sets the orientation of the axis. Ex: top, bottom, left, right. |
| scale  | 5     | Set the scale of the axis.  Ex: d3.scale.linear(), d3.scale.ordinal() |
| label  | LABEL | See Labels. |

### CSV

| Option     | Default | Description |
| ---------- |:--------| -----:|
| header     | []   | An array containing the names of each column.  Ex: [ 'C1', 'C2' ] |
| data       | [[]] | An array of arrays.  Each row of the array represents a row of data.  Ex: [[1, 2],[3,4]] |

### Shapes

#### Points

| Option | Default | Description |
| ------ |:--------| -----:|
| x      | 0       | The x coordinate of the point. |
| y      | 0       | The y coordinate of the point. |

#### Rectangles

| Option  | Default | Description |
| ------- |:--------| -----:|
| width   | 0       | The width of the rectangle in pixels. |
| height  | 0       | The height of the rectangle in pixels. |
| x       | 0       | The x coordinate of the upper left vertex of the rectangle. |
| y       | 0       | The y coordinate of the upper left vertex of the rectangle. |
| rx      | 0       | The x radius of the edges of the rectangle.  Non-zero values will cause the rectangle to be rounded at the corners.  |
| ry      | 0       | The y radius of the edges of the rectangle.  Non-zero values will cause the rectangle to be rounded at the corners.  |
| opacity | 1       | The opacity of the rectangle where 0 is transparent, 1 is opaque. |
| color   |         | The color of the rectangle. |
| stroke  | STROKE  | See Strokes. |


#### Circles

| Option        | Default | Description |
| ------------- |:--------| -----:|
| center        | POINT   | The center of the circle.  See Points. |
| radius        | 0       | The radius of the circle in pixels. |
| style.stroke  | STROKE  | See Strokes. |
| style.color   |         | The color of the circle. |
| style.opacity | 1       | The opacity of the circle.  |

## Visual Components

### Bar Chart

### Chord Chart

### Clustered Force

### Dendrogram

### HeatMap

### Horizontal Legends

### Line Charts

### Parallel Coordinates

### Pie Chart

### Sankey Diagram

| Option                     | Default | Description |
| -------------------------- |:--------| -----:|
| parent                     |         | The path to this component's parent element.  Ex: #SankeyParent |
| id                         | Sankey  | The id of this component's container element. |
| class                      | Sankey  | The class of this component's container element. |
| csv                        |         | The data for this diagram.  See CSV. |
| relationships              |         | The relationship data for this diagram, whose format is described in greater detail later in this section. |
| height                     | 100%    | The height of the sankey diagram in either pixels or a percentage of available bounding box size. |
| width                      | 100%    | The width of the sankey diagram in either pixels or a percentage of available bounding box size. |
| transform                  |         | The SVG transformation(s) to apply. |
| layoutIterations           | 32      | The number of iterations to expend when attempting to optimize node and link layout. |
| columnTitle                | LABEL   | The label for each column. See Labels. |
| label                      | LABEL   | The label for each node.  See Labels. |
| link.stroke                | STROKE  | The stroke for each link.  See Strokes. |
| link.fill                  | none    | The fill for each link. |
| link.fillOpacity           |         | The fillOpacity for each link. |
| link.curvature             | 0.5     | Radians of curvature. |
| mouseover.link.stroke      | STROKE  | The stroke of a link when the mouse is moved over it.  See Strokes. |
| mouseover.link.fill        | none    | The fill of the link when the mouse is over it. |
| mouseover.link.fillOpacity | 0.8     | The fill opacity of the link when the mouse is over it. |
| mouseover.node.stroke      | STROKE  | Tne stroke of all of the incoming and outgoing links from this node when the mouse is moved over it.  See Strokes.|
| mouseover.node.fill        | none    | The fill of all the incoming and outgoing links from this node when the mouse is moved over it. |
| mouseover.node.fillOpacity | .8      | The fill opacity of all the incoming and outgoing links from this node when the mouse is moved over it. |
| node.padding | 4 | The padding around each node segregating labels and other nodes. |
| node.rectangle | RECTANGLE | This controls the appearance of each node.  See Rectangles. |
| manualColumnLayout | false   | If false, Sankey will attempt to lay the nodes out in an optimized fashion.  However, if true, then the system will assume that each column of data represesents a column of nodes and will align columnar nodes on top of one another.  The first column will be leftmost in the layout.  Manual layout is much faster automated layout. |

### Scatter Plot

### UI Controls

#### Configuration Box

#### Selectable

#### Slider

#### Tabs

### ThreeJS

#### ScatterPlot3D
### Maps

#### US County Map

#### US State Map

#### World Country Map

### Vertical Legend

