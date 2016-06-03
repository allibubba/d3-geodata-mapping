document.addEventListener('DOMContentLoaded', function() {
  // d3.select("body").append("svg").attr("width", 50).attr("height", 50).append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "purple");

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


}, false);
