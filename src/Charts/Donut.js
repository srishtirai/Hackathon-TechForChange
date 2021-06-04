import * as d3 from "d3";
import {useEffect} from "react";
import './Donut.css';

export default function DonutChart(props) {
  useEffect(() => {
    var width = props.width,height = props.height;

var radius = Math.min(width, height)/2

var svg = d3.select("#"+props.id)
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Create dummy data
var data = props.data.data;

// set the color scale
var color = d3.scaleOrdinal()
  .domain(data)
  .range(props.data.colors)

// Compute the position of each group on the pie:
var pie = d3.pie()
  .value(function(d) {return d.value; })
.sort(null);

var data_ready = pie(d3.entries(data))

svg
  .selectAll('whatever')
  .data(data_ready)
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(45)         
    .outerRadius(radius)
  )
  .attr('fill', function(d){ return(color(d.data.key)) })
  .style("opacity",1);

  if(props.data.detail){
  svg.append("text").attr("x", -15).attr("y", -10).text(props.data.detail.numerical).style("font-size", "23px").attr("alignment-baseline","middle")
  svg.append("text").attr("x", -20).attr("y", 15).text(props.data.detail.desc).style("font-size", "15px").attr("alignment-baseline","middle")
  }
  if(props.legend){
    var svgLegend = d3.select("#"+props.id+"_legend")
    .append("svg")
      .attr("width", width+165)
      .attr("height", 70)
    .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    let i=-30
    props.data.colors.forEach(e => {
      svgLegend.append("circle").attr("cx",i).attr("cy",-40).attr("r", 6).style("fill", e);
      i+=90;
    });
    i=-20
    props.data.legends.forEach(e => {
      svgLegend.append("text").attr("x",i).attr("y", -40).text(e).style("font-size", "15px").attr("alignment-baseline","middle")
      i+=90;
    });

  }
}, []);
      return (
        <div>
          <p id="graph_heading">{props.data.title}</p>
          <div id={props.id}>
          </div>
          <div>
          <div id={props.id+"_legend"}></div>
          {props.data.stats?<hr id="divider"></hr>:''}
          <p id="stats">{props.data.stats}</p>
          </div>
        </div>
      );
}
