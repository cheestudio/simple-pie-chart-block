/* Slice Actions */

export const sliceReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_SLICE':
      return state.map((slice, index) =>
        index === action.id ? { ...slice, [action.attribute]: action.value } : slice
      );
    case 'REMOVE_SLICE':
      return state.filter((_, index) => index !== action.id);
    case 'ADD_SLICE':
      const newSliceColor = state.length % 2 === 0 ? '#666' : '#333';
      return [...state,{ sliceTitle: '', sliceColor: newSliceColor, slicePercentage: 10, sliceValue: '' }];
    default:
      return state;
  }
};

/* Slice Attrs */

export const sliceData = (slices) => ({
  labels: slices.map(slice => slice.sliceTitle),
  datasets: [{
    data: slices.map(slice => slice.slicePercentage),
    backgroundColor: slices.map(slice => slice.sliceColor),
    value: slices.map(slice => slice.sliceValue),
    hoverOffset: 4
  }]
});

/* Chart Options */

export const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        title: () => null,
        label: (context) => {
          const label = context.label ? ` ${context.label}: ` : ' (Unlabeled) ';
          const value = context.chart.data.datasets[0].value[context.dataIndex];
          return `${label}${value}`;
        }
      }
    },
    datalabels: {
      formatter: (value, context) => {
        let dataArr = context.chart.data.datasets[0].data;
        let sum = dataArr.reduce((acc,data) => acc + data,0);
        let percentage = (value * 100 / sum).toFixed(1) + "%";
        return `${percentage}`;
      },
      color: '#fff',
    }
  }
};