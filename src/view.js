import { Chart as ChartJS, ArcElement, Tooltip, Legend, PieController, DoughnutController } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { sliceData, chartOptions } from './lib/chartUtils';

ChartJS.register(ArcElement, Tooltip, Legend, PieController, DoughnutController);

const chartBlockClass = 'simple-pie-chart-block-wp';

// Chart Options
const initChart = (chart) => {
  const canvas = document.createElement('canvas');
  const slices = JSON.parse(chart.dataset.slices);
  const chartType = chart.dataset.chartType;
  const data = sliceData(slices);
  
  const chartInstance = new ChartJS(canvas, {
    type: chartType.toLowerCase(),
    data: data,
    options: chartOptions,
    plugins: [ChartDataLabels],
  });

  chart.appendChild(canvas);
  chart.chartInstance = chartInstance;
};

// Show/hide slices on legend click events
const handleLegendClick = (event) => {
  const legendItem = event.target.closest(`.${chartBlockClass}__legend--entry`);
  if (!legendItem) return;
  const chartContainer = legendItem.closest(`.${chartBlockClass}__display`).querySelector(`.${chartBlockClass}-instance`);
  const chartInstance = chartContainer.chartInstance;
  const sliceIndex = Array.from(legendItem.parentNode.children).indexOf(legendItem);
  chartInstance.toggleDataVisibility(sliceIndex);
  chartInstance.update();
  legendItem.classList.toggle('active');
};

// Resize Chart Fix
const resizeObserver = new ResizeObserver(entries => {
  entries.forEach(entry => {
    const chart = entry.target;
    const width = chart.offsetWidth;
    const canvas = chart.querySelector('canvas');
    if (canvas) {
      canvas.style.width = `${width}px`;
      canvas.style.height = `${width}px`;
    }
    chart.chartInstance.resize();
  });
});

// Init Chart on Scroll
const intersectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const chart = entry.target;
      initChart(chart);
      resizeObserver.observe(chart);
      intersectionObserver.unobserve(chart);
    }
  });
});

//Init Charts
document.addEventListener('DOMContentLoaded', () => {
  const charts = document.querySelectorAll(`.${chartBlockClass}-instance`);
  charts.forEach(chart => {
    intersectionObserver.observe(chart);
  });
  document.querySelectorAll(`.${chartBlockClass}__legend--entry`).forEach(legendItem => {
    legendItem.addEventListener('click', handleLegendClick);
  });
});