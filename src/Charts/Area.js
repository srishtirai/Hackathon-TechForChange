import * as d3 from "d3";
import {useEffect} from "react";
import '../App.css';

export default function Area() {
    useEffect(() => {

var margin = {top: 10, right: 30, bottom: 30, left: 50},
    width = 460 - margin.left - margin.right,
    height = 200 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#area")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
const DATA = [{x:'2018-01-1', y:25},
        {x:'2018-02-1', y:50},
        {x:'2018-03-1', y:75},
        {x:'2018-04-1', y:20},
        {x:'2018-05-1', y:100},
        {x:'2018-06-1', y:75},
        {x:'2018-07-1', y:140},
        {x:'2018-08-1', y:30},
        {x:'2018-09-1', y:175},
        {x:'2018-10-1', y:120},
        {x:'2018-11-1', y:80},
        {x:'2018-12-1',y:100}
    ];
const data = [
{x:'2018-06-1', y:75},
{x:'2018-12-1', y:150},
{x:'2018-12-1',y:50}
    ];
    data.forEach(element => {
        element.x=d3.timeParse("%Y-%m-%d")(element.x)
      });

          DATA.forEach(element => {
            element.x=d3.timeParse("%Y-%m-%d")(element.x)
          });

    // Add X axis --> it is a date format
    var x = d3.scaleTime().domain(d3.extent(DATA, function(d) { return d.x; }))
      .range([ 0, width ]);
      svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%b")));

    // Add Y axis
    const y = d3.scaleLinear().domain([0,175]).range([height, 0]);

    svg.append("g").call(d3.axisLeft(y).tickValues([0, 25, 50, 75, 100, 125, 150, 175]));

    // Add the area
    svg.append("path")
      .datum(data)
      .attr("fill", "#cce5df")
      .attr("d", d3.area()
      .x1(function(d) { return x(d.x) })
      .y1(function(d) { return y(d.y) })
        )
}, []);

return (
    <div id="area">
    </div>
);
}
