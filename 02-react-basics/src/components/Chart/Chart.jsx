import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const valueAarray = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...valueAarray);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
