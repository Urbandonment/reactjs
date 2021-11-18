import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

function Chart(props) {
  const { dataPoints } = props;

  const dataPointsValues = dataPoints.map((datapoint) => datapoint.value);
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className='chart'>
      {dataPoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={totalMaximum}
          label={dataPoints.label}
        />
      ))}
    </div>
  );
}

export default Chart;
