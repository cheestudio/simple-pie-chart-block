import { __ } from '@wordpress/i18n';
import { ToggleControl, RadioControl, BaseControl, PanelBody, ColorPalette, RangeControl } from '@wordpress/components';

const ChartSettings = ({ attributes, setAttributes, colorPalette }) => {
  const { showLegend, legendStyle, legendBG, chartType, chartWidth } = attributes;

  const handleAttributeChange = (attribute) => (value) => setAttributes({ [attribute]: value });

  return (
    <PanelBody title={__('Pie Chart Settings', 'chee-blocks')}>

      <RadioControl
        label={__('Chart Type', 'chee-blocks')}
        selected={chartType}
        options={[
          { label: __('Pie', 'chee-blocks'), value: 'Pie' },
          { label: __('Doughnut', 'chee-blocks'), value: 'Doughnut' }
        ]}
        onChange={handleAttributeChange('chartType')}
      />

      <BaseControl
        label={__('Chart Width', 'chee-blocks')}
        id="chart-width-control"
      >
        <RangeControl
          value={chartWidth}
          onChange={handleAttributeChange('chartWidth')}
          min={400}
          max={1200}
          step={10}
          aria-label={__('Chart Width', 'chee-blocks')}
        />
      </BaseControl>

      <ToggleControl
        label={__('Show Legend', 'chee-blocks')}
        checked={showLegend}
        onChange={handleAttributeChange('showLegend')}
      />

      {showLegend && (
        <>
          <RadioControl
            label={__('Legend Style', 'chee-blocks')}
            selected={legendStyle}
            options={[
              { label: __('Lines', 'chee-blocks'), value: 'line' },
              { label: __('Dots', 'chee-blocks'), value: 'dot' }
            ]}
            onChange={handleAttributeChange('legendStyle')}
          />

          <BaseControl
            __nextHasNoMarginBottom
            id="legend-bg-color"
            label={__('Legend Background Color', 'chee-blocks')}
          >
            <ColorPalette
              id="legend-bg-color"
              aria-label={__('Color palette for legend background', 'chee-blocks')}
              colors={colorPalette}
              value={legendBG}
              onChange={handleAttributeChange('legendBG')}
            />
          </BaseControl>
        </>
      )}

    </PanelBody>
  );
};

export default ChartSettings;