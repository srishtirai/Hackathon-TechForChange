import * as d3 from "d3";
import {useEffect} from "react";
import './BarChart.css';

export default function Bar(props) {
  useEffect(() => {
    const data=props.data.data;
    let margin = {top: 30, right: 30, bottom: 70, left: 60},
        width = props.width - margin.left - margin.right,
        height = props.height - margin.top - margin.bottom;

    let svg = d3.select("#barGraph")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");

    const x = d3.scaleBand()
      .range([ 0, width ])
      .domain(data.map(function(d) { return d.x; }))
      .padding(0.7);

    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text");
     
    const y = d3.scaleLinear()
      .domain([0, 32])
      .range([ height, 0]);

    svg.append("g")
      .call(d3.axisLeft(y));

    svg.selectAll("mybar")
      .data(data)
      .enter()
      .append("rect")
        .attr("x", function(d) { return x(d.x); })
        .attr("y", function(d) { return y(d.y); })
        .attr("width", 5)
        .attr("height", function(d) { return height - y(d.y); })
        .attr("fill", props.data.color);

    svg.selectAll("text")
      .style("stroke", "#979797")
      .attr("class","text");
  });

  return (
    <div id="barGraph"></div>
  );
}