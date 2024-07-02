import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { useRef, useReducer } from '@wordpress/element';
import { chartOptions, sliceData, sliceReducer } from './lib/chartUtils';
import PieChartDisplay from './components/PieChartDisplay';
import SliceLegend from './components/SliceLegend';
import PieChartControls from './components/PieChartControls';
import SliceEntries from './components/SliceEntries';
import './editor.scss';

export default function Edit({ attributes, setAttributes, props }) {

  const blockProps = useBlockProps({ className: 'wp-pie-chart-block' });
  const chartContainerRef = useRef(null);
  const colorPalette = wp.data.select("core/block-editor").getSettings().colors;
  const { slices } = attributes;
  const [sliceState, dispatch] = useReducer(sliceReducer, slices);

  const handleUpdateSlice = (id, attribute, value) => {
    dispatch({ type: 'UPDATE_SLICE', id, attribute, value });
  };

  const handleRemoveSlice = (id) => {
    dispatch({ type: 'REMOVE_SLICE', id });
  };

  const handleAddSlice = () => {
    dispatch({ type: 'ADD_SLICE' });
  };

  const data = sliceData(sliceState);
  setAttributes({ slices: sliceState });

  return (
    <div {...blockProps}>

      <SliceLegend
        slices={slices}
        legendBG={attributes.legendBG}
        legendStyle={attributes.legendStyle}
        showLegend={attributes.showLegend}
      />

      <PieChartDisplay
        chartOptions={chartOptions}
        data={data}
        ref={chartContainerRef}
        chartType={attributes.chartType}
        chartWidth={attributes.chartWidth}
      />

      <InspectorControls>
        
        <PieChartControls
          attributes={attributes}
          setAttributes={setAttributes}
          colorPalette={colorPalette}
          slices={slices}
          handleAddSlice={handleAddSlice}
          handleUpdateSlice={handleUpdateSlice}
          handleRemoveSlice={handleRemoveSlice}
        />

        <SliceEntries
          slices={slices}
          colorPalette={colorPalette}
          handleUpdateSlice={handleUpdateSlice}
          handleRemoveSlice={handleRemoveSlice}
        />

      </InspectorControls>

    </div>
  );
}