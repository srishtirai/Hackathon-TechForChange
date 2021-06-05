import React, { useState, useEffect } from 'react';
import './App.css';
import DonutChart from './Components/Charts/Donut';
import ScatterPlot from './Components/Charts/ScatterPlot';
import Bar from './Components/Charts/Bar';
import HorizontalBar from './Components/Charts/HorizontalBar';
import GroupBar from './Components/Charts/GroupBar';
import {donutChartData, scatterPlotData, barGraphData, otherInfo} from './mock/chartData';
import Heading from './Components/Heading';

export default function App(){

  return (
    <div className="app">
      <div className="innerApp">
        <Heading/>
        <div className="part1" >
          <div className="chart">
            <DonutChart legend={true} width={128} height={128} id="donut2" data={donutChartData.donut2}/>
            <hr id="divider"></hr>
            <p id="stats">{donutChartData.donut2.stats}</p>
          </div>
          <div id="section">
            <ScatterPlot id="scatter1" width={700} height={170} data={scatterPlotData.ScatterPlot1}/>
            <hr id="divider"></hr>
            <p id="stats">{scatterPlotData.ScatterPlot1.stats}</p>
          </div>
        </div>
        <div className="part2">
            <div className="barPie1">
              <DonutChart legend={true} width={170} height={170} id="donut3" data={donutChartData.donut3}/>
              <HorizontalBar width={300} height={150} data={barGraphData.bar1}/>
              <hr id="divider"></hr>
              <p id="stats">{donutChartData.donut3.stats}</p>
            </div>
            <div className="barPie2">
              <DonutChart legend={true} width={170} height={170} id="donut4" data={donutChartData.donut4}/>
              <Bar width={250} height={280} data={barGraphData.bar2}/>
              <hr id="divider"></hr>
              <p id="stats">{donutChartData.donut4.stats}</p>
            </div>
          </div>
        <div className="part3">
            <div className="group">
              <GroupBar data={barGraphData.bar3}/>
              <hr id="divider"></hr>
              <p id="stats">{barGraphData.bar3.stats}</p>
            </div>
            <div className="mixed">
                <ScatterPlot id="scatter2" width={600} height={170} data={scatterPlotData.ScatterPlot2}/>
                <hr id="divider"></hr>
                <p id="stats">{scatterPlotData.ScatterPlot2.stats}</p>
            </div>
          </div>
        <div className="dataSec">
          <div className="dataTab">
          <p id="dataHeading"><strong>{otherInfo.title}</strong></p>
          <div className="vertical-line3"></div>
          <div className="vertical-line4"></div>
          {Object.keys(otherInfo.info1).map(key => (
	            <p id="dataItems">
            		<strong style={{"color":"#000000"}}>{otherInfo.info1[key]}</strong>
                <br></br>
              	{key}
            	</p>
            ))}
          </div>
        </div>
        <div className="part4" >
            <div className="pieScat1">
              <DonutChart legend={true} width={140} height={140} id="donut5" data={donutChartData.donut5}/>
              <ScatterPlot id="scatter3" width={240} height={190} data={scatterPlotData.ScatterPlot3}/>
              <hr id="divider"></hr>
              <p id="stats">{donutChartData.donut5.stats}</p>
            </div>
            <div className="pieScat2">
              <DonutChart legend={true} width={140} height={140} id="donut6" data={donutChartData.donut6}/>
              <ScatterPlot id="scatter4" width={240} height={190} data={scatterPlotData.ScatterPlot4}/>
              <hr id="divider"></hr>
              <p id="stats">{donutChartData.donut6.stats}</p>
            </div>
            <div className="pieScat3">
              <DonutChart legend={true} width={140} height={140} id="donut7" data={donutChartData.donut7}/>
              <ScatterPlot id="scatter5" width={240} height={190} data={scatterPlotData.ScatterPlot3}/>
              <hr id="divider"></hr>
              <p id="stats">{donutChartData.donut7.stats}</p>
            </div>
            <div className="pieScat4">
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
