import { __ } from '@wordpress/i18n';
import ChartSettings from './ChartSettings';
import SliceControls from './SliceControls';

const PieChartControls = ({ attributes, setAttributes, colorPalette, handleAddSlice }) => {
  return (
    <div className="pie-chart-controls">

      <ChartSettings
        attributes={attributes}
        setAttributes={setAttributes}
        colorPalette={colorPalette}
      />

      <hr style={{ margin: 0, border: "none", borderTop: '1px solid #e0e0e0' }} />

      <SliceControls 
      handleAddSlice={handleAddSlice} 
      />

    </div>
  );
};

export default PieChartControls;