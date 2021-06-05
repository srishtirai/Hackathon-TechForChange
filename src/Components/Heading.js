import {donutChartData, headerInfo} from '../mock/chartData';
import DonutChart from './Charts/Donut';

export default function Heading(){
  return(
    <div>
    	<p className="name">Hello David!</p>
      	<div className="header">
          <DonutChart legend={false} width={105} height={105} id="donut1" data={donutChartData.donut1} />
          <p className="pieData">
            <strong>Good</strong><br></br><br></br>
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
    );
}