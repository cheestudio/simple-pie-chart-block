import { forwardRef, useEffect, useRef } from '@wordpress/element';
import { Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartDisplay = forwardRef(({ chartOptions, data, chartType, chartWidth }, ref) => {
  const ChartType = { Pie, Doughnut }[chartType] || Doughnut;
  const chartRef = useRef(null);
  
  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.resize();
    }
  }, [chartWidth]);

  return (
    <div ref={ref} className="pie-chart-display">
      <div className="pie-chart" style={{ maxWidth: chartWidth+'px', margin: "0 auto" }}>
        <ChartType 
        ref={chartRef} 
        options={chartOptions} 
        data={data} 
        plugins={[ChartDataLabels]} 
        />
      </div>
    </div>
  );
});

export default PieChartDisplay;