import * as d3 from "d3";
import {useEffect} from "react";
import './BarChart.css';

export default function HorizontalBar(props) {
  useEffect(() => {
    const data=props.data.data;
    let i=0;
    props.data.colors.forEach(e => {
        data[i].color=e;i++;
    });

    let margin = {top: 20, right: 30, bottom: 40, left: 90},
        width = props.width - margin.left - margin.right,
        height = props.height;

    let svg = d3.select("#horizontalbarGraph")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
    const x = d3.scaleLinear()
      .domain([0, 50])
      .range([ 0, width]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).tickValues(props.data.xValues));

   
    const y = d3.scaleBand()
      .range([ 0, height ])
      .domain(data.map(function(d) { return d.y; }))
      .padding(.7);
    svg.append("g")
      .call(d3.axisLeft(y))
  
    svg.selectAll("myRect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", x(0) )
      .attr("y", function(d) { return y(d.y); })
      .attr("width", function(d) { return x(d.x-3); })
      .attr("height", 10 )
      .attr("fill", function(d) { return d.color })

    svg.selectAll("text")
      .style("stroke", "#979797")
      .attr("class","text");
  });

  return (
    <div id="horizontalbarGraph"></div>
  );
}