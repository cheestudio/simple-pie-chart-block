const SliceLegend = ({ slices, legendBG, legendStyle, showLegend }) => {
  if (!showLegend) return null;
  return (
    <ul className={`simple-pie-chart-block-wp__legend`} style={{ '--legend-bg': legendBG }}>
      {slices.map((slice, index) => (
        <li key={index} className={`simple-pie-chart-block-wp__legend--entry ${legendStyle}`} style={{ '--slice-color': slice.sliceColor }}>
          <div className="legend-info">
            <div className="legend-title">
              {slice.sliceTitle}
            </div>
            <div className="legend-value">
              {slice.sliceValue}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SliceLegend;