import {donutChartData, headerInfo} from '../mock/chartData';
import DonutChart from './Charts/Donut';

export default function Heading(){
  return(
    <div>
    	<p className="name"><strong>Hello David!</strong></p>
      	<div className="header">
          <DonutChart legend={false} width={105} height={105} id="donut1" data={donutChartData.donut1} />
          <p className="pieData">
            <strong style={{"color":"#000000",'fontSize':"20px"}}>Good</strong><br></br>
            <p style={{"color":"#646464"}}>Your score is up by 5% since yesterday</p>
          </p>
          <div className="vertical-line1"></div>
          <div className="applications">
            {Object.keys(headerInfo.stats).map(key => (
	            <p>
            		<strong style={{"color":"#000000"}}>{headerInfo.stats[key]} </strong>
              	{key}
            	</p>
            ))}
          </div>
          <div className="vertical-line2"></div>
          <div className="info">
            {headerInfo.timeInfo.map(e=>(
            	<p><strong>{e}</strong></p>
            ))}
          </div>
        </div>
      </div>
    );
}