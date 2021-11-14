import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

function Chart(props) {
  const { dataPoints } = props;

  return (
    <div className='chart'>
      {dataPoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={null}
          label={dataPoints.label}
        />
      ))}
    </div>
  );
}

export default Chart;
