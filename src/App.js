import './App.css';
import DonutChart from './Charts/Donut';
import ScatterPlot from './Charts/ScatterPlot';

function App() {
  return (
    <div className="App">
       <div className="InnerApp">
       <p className="name">Hello David!</p>
        <div className="Header">
          <DonutChart />
        </div>
        <div className="Chart">
          <ScatterPlot/>
        </div>
        <div className="section">

        </div>
      </div> 
    </div>
  );
}

export default App;
