var dataUrl = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
function Request(src, callback) {
   this.src = src;
   this.callback = callback;
    this.getData = function(){
      oReq = new XMLHttpRequest();
      oReq.addEventListener("load", this.callback);
      oReq.open("GET", this.src);
      oReq.send();
      // eval(this.callback)(oReq);
    }
};

function DataGraph(data){
  map_data = [];
  d = data.features
  for(i in d){
    map_data.push({"x_pos": d[i].geometry.coordinates[0], "y_pos": d[i].geometry.coordinates[1], "mag": d[i].properties.mag});
  }
  // console.log(map_data);
}

document.addEventListener('DOMContentLoaded', function() {




var responseJson = "";
function reqListener() {
  data = JSON.parse(this.responseText)
  new DataGraph(data);
}
var request = new Request( dataUrl, reqListener);
var dataSet = request.getData();

  d3.select("body").append("svg").attr("width", 50).attr("height", 50).append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "purple");

  var theData = [ 1, 2, 3 ]
  var p = d3.select("body").selectAll("p")
  .data(theData)
  .enter()
  .append("p")
  .text( function (data) {
    console.log(arguments, "this",this.__data__);
    return data;
  });




  var circleRadii = [1, 2, 3, 5, 8, 13, 21, 34, 55];
  var circleColor = ['red', 'blue', 'green', 'orange', 'yellow', 'black', 'green', 'orange', 'yellow'];
  var svg = d3.select("body").append("svg")
  .attr("width", 150)
  .attr("height", 150)
  .selectAll("circle")
  .data(circleRadii.reverse())
  .enter()
  .append("circle")
  .attr("r", function (d) { return d; })
  .attr("cx", 75)
  .attr("cy", 75)
  .style("fill", function(d, i){return circleColor[i]});

var jsonCircles = [{
 "x_axis": 30,
 "y_axis": 30,
 "radius": 20,
 "color" : "green"
}, {
 "x_axis": 70,
 "y_axis": 70,
  "radius": 20,
  "color" : "purple"
 }, {
  "x_axis": 110,
  "y_axis": 100,
  "radius": 20,
  "color" : "red"
}];
  var svg = d3.select("body").append("svg")
  .attr("width", 500)
  .attr("height", 500)
  .selectAll("circle")
  .data(jsonCircles)
  .enter()
  .append("circle")
  .attr("r", function (d) { return d.radius; })
  .attr("cx", function (d) { return d.x_axis; })
  .attr("cy", function (d) { return d.y_axis; })
  .style("fill", function(d){return d.color});





}, false);
