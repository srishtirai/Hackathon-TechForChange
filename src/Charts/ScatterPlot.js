import * as d3 from "d3";
import {useEffect} from "react";
import './ScatterPlot.css';

export default function ScatterPlot(props) {
    useEffect(() => {
    const DATA = props.data.data;
    DATA.forEach(element => {
      element.x=d3.timeParse("%Y-%m-%d")(element.x)
    });
       
    const margin = { top: 10, right: 40, bottom: 30, left: 30 },
      width = props.width - margin.left - margin.right,
      height = props.height - margin.top - margin.bottom;

    const svg = d3
      .select("#"+props.id)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

      var x = d3.scaleTime().domain(d3.extent(DATA, function(d) { return d.x; }))
      .range([ 0, width ]);
      svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%b")));

    const y = d3.scaleLinear().domain([0,175]).range([height, 0]);

    svg.append("g").call(d3.axisLeft(y).tickValues([0, 25, 50, 75, 100, 125, 150, 175]));

    if(props.data.data3){
      const data = props.data.data3;
          data.forEach(element => {
              element.x=d3.timeParse("%Y-%m-%d")(element.x)
            });
    svg.append("path")
        .datum(data)
        .attr("fill", "#cce5df")
        .attr("d", d3.area()
        .x1(function(d) { return x(d.x) })
        .y1(function(d) { return y(d.y) })
          )
    }

    svg.append("path")
    .datum(DATA)
    .attr("fill", "none")
    .attr("stroke", "#69b3a2")
    .attr("stroke-width", 1.5)
    .attr("d", d3.line()
      .x(function(d) { return x(d.x) })
      .y(function(d) { return y(d.y) })
      )

  svg
    .selectAll("whatever")
    .data(DATA)
    .enter()
    .append("circle")
    .attr("cx", (d) => x(d.x))
    .attr("cy", (d) => y(d.y))
    .attr("r", 5);


if(props.data.data2){
   
const curved_data=props.data.data2;
curved_data.forEach(element => {
  element.x=d3.timeParse("%Y-%m-%d")(element.x)
});
  svg.append("path")
      .datum(curved_data)
      .attr("fill", "none")
      .attr("stroke", "#69b3a2")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line().curve(d3.curveBasis)
        .x(function(d) { return x(d.x) })
        .y(function(d) { return y(d.y) })
        )
        .style("stroke-dasharray", ("3, 3"))

// Add the path using this helper function
svg.append('line')
.datum(DATA)
  .attr('x1', x(DATA[6].x))
  .attr('y1', 0)
  .attr('x2', x(DATA[6].x))
  .attr('y2', height)
  .attr('stroke', 'red')
          }
  
  }, []);

return (
  <div>
    <p id="graph_heading">{props.data.title}</p>
    <div id={props.id}>
    </div>
     <hr id="divider"></hr>
    <p id="stats">{props.data.stats}</p>
  </div>
);
}
