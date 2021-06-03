import * as d3 from "d3";
import {useEffect} from "react";
import '../App.css';

export default function DonutChart() {
  useEffect(() => {
    var width = 104,height = 104;

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height)/2

// append the svg object to the div called 'my_dataviz'
var svg = d3.select("#donut")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Create dummy data
var data = {a: 5, b: 15}

// set the color scale
var color = d3.scaleOrdinal()
  .domain(data)
  .range(["#47987A", "#D2D7D8"])

// Compute the position of each group on the pie:
var pie = d3.pie()
  .value(function(d) {return d.value; })
.sort(null);

var data_ready = pie(d3.entries(data))

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
  .selectAll('whatever')
  .data(data_ready)
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(45)         // This is the size of the donut hole
    .outerRadius(radius)
  )
  .attr('fill', function(d){ return(color(d.data.key)) })
  .style("opacity",1)
}, []);
      return (
          <div id="donut">
          </div>
      );
}
