import * as d3 from "d3";
import {useEffect} from "react";
import './BarChart.css';

export default function GroupBar(props) {
    useEffect(() => {
const data=props.data.data;
        var margin = {top: 10, right: 30, bottom: 20, left: 50},
    width = 400 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#groupBar")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

 var subgroups = Object.keys(data[0]);
 subgroups.shift();

  // List of groups = species here = value of the first column called group -> I show them on the X axis
  var groups = d3.map(data, function(d){return(d.group)}).keys()

  // Add X axis
  var x = d3.scaleBand()
      .domain(groups)
      .range([0, width])
      .padding([0.2])
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickSize(0));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 90])
    .range([ height, 0 ]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Another scale for subgroup position?
  var xSubgroup = d3.scaleBand()
    .domain(subgroups)
    .range([0, x.bandwidth()])
    .padding([0.75])

  // color palette = one color per subgroup
  var color = d3.scaleOrdinal()
    .domain(subgroups)
    .range(props.data.colors)

  // Show the bars
  svg.append("g")
    .selectAll("g")
    // Enter in data = loop group per group
    .data(data)
    .enter()
    .append("g")
      .attr("transform", function(d) { return "translate(" + x(d.group) + ",0)"; })
    .selectAll("rect")
    .data(function(d) { return subgroups.map(function(key) { return {key: key, value: d[key]}; }); })
    .enter().append("rect")
      .attr("x", function(d) { return xSubgroup(d.key); })
      .attr("y", function(d) { return y(d.value); })
      .attr("width", 10)
      .attr("height", function(d) { return height - y(d.value); })
      .attr("fill", function(d) { return color(d.key); });

      var svgLegend = d3.select("#legends")
    .append("svg")
      .attr("width", width+165)
      .attr("height", 100)
    .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    let i=-30
    props.data.colors.forEach(e => {
      svgLegend.append("circle").attr("cx",i).attr("cy",-40).attr("r", 6).style("fill", e);
      i+=90;
    });
    i=-20
    subgroups.forEach(e => {
      svgLegend.append("text").attr("x",i).attr("y", -40).text(e).style("font-size", "15px").attr("alignment-baseline","middle")
      i+=90;
    });

    });

    return (
      <div><p id="groupHeading">{props.data.title}</p>
        <div id="groupBar">
        </div>
        <div id={"legends"}></div>
        </div>
    );
}