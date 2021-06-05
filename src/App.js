import React, { useState, useEffect } from 'react';
import './App.css';
import DonutChart from './Charts/Donut';
import ScatterPlot from './Charts/ScatterPlot';
import Bar from './Charts/Bar';
import HorizontalBar from './Charts/HorizontalBar';
import GroupBar from './Charts/GroupBar';
import Area from './Charts/Area';
import * as d3 from "d3";
import {donutChartData, headerInfo, scatterPlotData, barGraphData} from './mock/chartData';

export default function App(){

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
          <hr id="divider"></hr>
          <p id="stats">{donutChartData.donut2.stats}</p>
        </div>
        <div id="section">
          <ScatterPlot id="scatter1" width={700} height={200} data={scatterPlotData.ScatterPlot1}/>
          <hr id="divider"></hr>
          <p id="stats">{scatterPlotData.ScatterPlot1.stats}</p>
        </div>
        </div>
        <div className="Part2">
        <div className="Bar_Pie1">
          <DonutChart legend={true} width={170} height={170} id="donut3" data={donutChartData.donut3}/>
           <HorizontalBar width={300} height={150} data={barGraphData.bar1}/>
          <hr id="divider"></hr>
          <p id="stats">{donutChartData.donut3.stats}</p>
        </div>
        <div className="Bar_Pie2">
          <DonutChart legend={true} width={170} height={170} id="donut4" data={donutChartData.donut4}/>
          <Bar width={250} height={280} data={barGraphData.bar2}/>
          <hr id="divider"></hr>
          <p id="stats">{donutChartData.donut4.stats}</p>
        </div>
        </div>
        <div className="Part3" style={{"overflow":"auto"}}>
        <div className="Group">
          <GroupBar data={barGraphData.bar3}/>
          <hr id="divider"></hr>
          <p id="stats">{barGraphData.bar3.stats}</p>
        </div>
        <div className="Mixed">
            <ScatterPlot id="scatter2" width={600} height={220} data={scatterPlotData.ScatterPlot2}/>
            <hr id="divider"></hr>
            <p id="stats">{scatterPlotData.ScatterPlot2.stats}</p>
        </div>
        </div>
        <div className="Data_sec"></div>
        <div className="Part4" >
        <div className="Pie_Scat1">
          <DonutChart legend={true} width={140} height={140} id="donut5" data={donutChartData.donut5}/>
          <ScatterPlot id="scatter3" width={240} height={190} data={scatterPlotData.ScatterPlot3}/>
          <hr id="divider"></hr>
          <p id="stats">{donutChartData.donut5.stats}</p>
        </div>
        <div className="Pie_Scat2">
          <DonutChart legend={true} width={140} height={140} id="donut6" data={donutChartData.donut6}/>
          <ScatterPlot id="scatter4" width={240} height={190} data={scatterPlotData.ScatterPlot4}/>
          <hr id="divider"></hr>
          <p id="stats">{donutChartData.donut6.stats}</p>
        </div>
        <div className="Pie_Scat3">
        <DonutChart legend={true} width={140} height={140} id="donut7" data={donutChartData.donut7}/>
        <ScatterPlot id="scatter5" width={240} height={190} data={scatterPlotData.ScatterPlot3}/>
        <hr id="divider"></hr>
        <p id="stats">{donutChartData.donut7.stats}</p>
        </div>
        <div className="Pie_Scat4">
        <DonutChart legend={true} width={140} height={140} id="donut8" data={donutChartData.donut8}/>
        <ScatterPlot id="scatter6" width={240} height={190} data={scatterPlotData.ScatterPlot4}/>
        <hr id="divider"></hr>
        <p id="stats">{donutChartData.donut8.stats}</p>
        </div>
        </div>
      </div> 
    </div>
  );
}
