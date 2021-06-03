import * as d3 from "d3";
import {useEffect} from "react";
import '../App.css';

export default function ScatterPlot() {
    useEffect(() => {

        const DATA = [
            { x: 'Jan', y: 20 },
            { x: 'Feb', y: 50 },
            { x: 'Dec', y: 75 }
          ];
         
    const margin = { top: 10, right: 40, bottom: 30, left: 30 },
      width = 665 - margin.left - margin.right,
      height = 155 - margin.top - margin.bottom;

    const svg = d3
      .select("#area")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    var months = ['Jan','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    
      var x = d3.scaleBand()
      .range([ 0, width ])
      .domain(months.map(function(d) { return d; }));
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    const y = d3.scaleLinear().domain([0, 176]).range([height, 0]);

    svg.append("g").call(d3.axisLeft(y));
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
      .attr("r", 7);
  }, []);

return (
    <div id="area">
    </div>
);
}
