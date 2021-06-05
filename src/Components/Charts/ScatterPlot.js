import * as d3 from "d3";
import {useEffect, useState} from "react";
import './ScatterPlot.css';

export default function ScatterPlot(props) {
  const [dimensions, setDimensions] = useState({ 
    height: props.height,
    width: props.width
  })
  useEffect(() => {
     
    const margin = { top: 10, right: 40, bottom: 30, left: 30 },
      width = dimensions.width - margin.left - margin.right,
      height = dimensions.height - margin.top - margin.bottom;

    const DATA = props.data.data;
    let svg;

    if(!props.data.xValues){
       svg= d3
      .select("#"+props.id)
      .append("svg")
      .attr('viewBox', '0 0 ' + width + ' ' + height+100)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);
      DATA.forEach(element => {
        element.x=d3.timeParse("%Y-%m-%d")(element.x)
      });

      var x = d3.scaleTime().domain(d3.extent(DATA, function(d) { return d.x; }))
        .range([ 0, width ]);
      svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%b")));
    }
    else{
      svg = d3
      .select("#"+props.id)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

      var x = d3.scaleBand()
        .range([ 0, width ])
        .domain(DATA.map(function(d) { return d.x; }))
        .padding(0);
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
    }

    const yVal=props.data.yValues;
    const y = d3.scaleLinear().domain([0,yVal[yVal.length-1]]).range([height, 0]);
    svg.append("g").call(d3.axisLeft(y).tickValues(yVal));

    if(props.data.data3){
      const data = props.data.data3;
      data.forEach(element => {
        element.x=d3.timeParse("%Y-%m-%d")(element.x)
      });
      svg.append("path")
        .datum(data)
        .attr("fill", props.data.areaColor)
        .attr("d", d3.area()
        .x1(function(d) { return x(d.x) })
        .y1(function(d) { return y(d.y) }));
    }

    svg.append("path")
      .datum(DATA)
      .attr("fill", "none")
      .attr("stroke", props.data.lineColor)
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x(function(d) { return x(d.x) })
        .y(function(d) { return y(d.y) })
      );

    svg
      .selectAll("whatever")
      .data(DATA)
      .enter()
      .append("circle")
      .attr("cx", (d) => x(d.x))
      .attr("cy", (d) => y(d.y))
      .attr("r", 5)
      .attr("fill", props.data.dotColor)


    if(props.data.data2){ 
      const curved_data=props.data.data2;
      curved_data.forEach(element => {
        element.x=d3.timeParse("%Y-%m-%d")(element.x)
      });

      svg.append("path")
        .datum(curved_data)
        .attr("fill", "none")
        .attr("stroke", props.data.curveColor)
        .attr("stroke-width", 1.5)
        .attr("d", d3.line().curve(d3.curveBasis)
          .x(function(d) { return x(d.x) })
          .y(function(d) { return y(d.y) }))
          .style("stroke-dasharray", ("3, 3"))

      svg.append('line')
        .datum(DATA)
        .attr('x1', x(DATA[6].x))
        .attr('y1', 0)
        .attr('x2', x(DATA[6].x))
        .attr('y2', height)
        .attr('stroke', '#979797')
    }

    if(props.data.legends){
      let svgLegend = d3.select("#scatterLegends")
        .append("svg")
        .attr("width", width+165)
        .attr("height", 70)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      let i=-30;
      props.data.colors.forEach(e => {
        svgLegend.append("circle").attr("cx",i).attr("cy",-40).attr("r", 6).style("fill", e);
        i+=90;
      });
      i=-20;
      props.data.legends.forEach(e => {
        svgLegend.append("text").attr("x",i).attr("y", -40).text(e).style("font-size", "15px").attr("alignment-baseline","middle")
        i+=90;
      });
      svgLegend.selectAll("text")
      .style("stroke", "#474747")
    }
    svg.selectAll("text")
      .style("stroke", "#474747")
      .attr("class","text");

  });

  return (
    <div>
      <p id="graph_heading"><strong>{props.data.title}</strong></p>
      <div id={props.id}></div>
      {props.data.legends?<div id="scatterLegends"></div>:''}
    </div>
  );
}
