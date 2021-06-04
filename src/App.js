import React, { Component } from 'react';
import './App.css';
import DonutChart from './Charts/Donut';
import ScatterPlot from './Charts/ScatterPlot';
import Bar from './Charts/Bar';
import HorizontalBar from './Charts/HorizontalBar';
import GroupBar from './Charts/GroupBar';
import Area from './Charts/Area';
import * as d3 from "d3";
import {donutChartData, headerInfo, scatterPlotData, barGraphData} from './mock/chartData';

class App extends Component {
  render() {
  //  let width = d3.select("#section").style('width'),
  //   height = d3.select("#section").style('heigth');
  //   width = parseInt(width);
  //   height = parseInt(height);

  return (
    <div className="App">
       <div className="InnerApp">
         <div className="Heading">
       <p className="name">Hello David!</p>
        <div className="Header">
          <DonutChart legend={false} width={105} height={105} id="donut1" data={donutChartData.donut1} />
          <p className="pieData">
            Good<br></br>
          Your score is up by 5% since yesterday
          </p>
          <div className="applications">
            {Object.keys(headerInfo.stats).map(key => (
              <p>
                <strong>{headerInfo.stats[key]} </strong>
                {key}
              </p>
            ))}
        </div>
        <div className="info">
          {headerInfo.timeInfo.map(e=>(
            <p><strong>{e}</strong></p>
          ))}
        </div>
        </div>
        </div>
        <div className="Part1" style={{"overflow":"auto"}}>
        <div className="Chart">
          <DonutChart legend={true} width={128} height={128} id="donut2" data={donutChartData.donut2}/>
        </div>
        <div id="section">
            <ScatterPlot id="scatter1" width={700} height={220} data={scatterPlotData.ScatterPlot1}/>
        </div></div>
        <div className="Part2" style={{"overflow":"auto"}}>
        <div className="Bar_Pie1">
        <DonutChart legend={true} width={170} height={170} id="donut3" data={donutChartData.donut3}/>
        <HorizontalBar width={300} height={150} data={barGraphData.bar1}/>
        </div>
        <div className="Bar_Pie2">
        <DonutChart legend={true} width={170} height={170} id="donut4" data={donutChartData.donut4}/>
        <Bar width={250} height={280} data={barGraphData.bar2}/>
        </div>
        </div>
        <div className="Part3" style={{"overflow":"auto"}}>
        <div className="Group">
          <GroupBar data={barGraphData.bar3}/>
        </div>
        <div className="Mixed">
            <ScatterPlot id="scatter2" width={600} height={220} data={scatterPlotData.ScatterPlot2}/>
        </div>
        </div>
        <div className="Data_sec"></div>
        <div className="Part4" style={{"overflow":"auto"}}>
        <div className="Pie_Scat1">

        </div>
        <div className="Pie_Scat2">

        </div>
        <div className="Pie_Scat3">

        </div>
        <div className="Pie_Scat4">

        </div>
        </div>
      </div> 
    </div>
  );
          }
}

export default App;
