import { __ } from '@wordpress/i18n';
import { BaseControl, TextControl, RangeControl, ColorPalette, Button, Icon, PanelBody } from "@wordpress/components";

const SliceEntry = ({ id, slice, colorPalette, onChange, onRemoveSlice }) => {

  const sliceTitle = slice.sliceTitle ? `Slice: ${slice.sliceTitle}` : `Slice ${id + 1}`;

  return (
    <PanelBody title={sliceTitle}>
      <div className="slice-entry-instance">
        <div id={id} className="slice-entry-controls">
          <TextControl 
            label={__('Slice Title', 'chee-blocks')} 
            value={slice.sliceTitle} 
            placeholder={__('e.g. Category Title', 'chee-blocks')} 
            onChange={(value) => onChange(id, 'sliceTitle', value)} 
          />
          <TextControl 
            label={__('Slice Value', 'chee-blocks')} 
            value={slice.sliceValue} 
            placeholder={__('e.g. $1,000', 'chee-blocks')} 
            onChange={(value) => onChange(id, 'sliceValue', value)} 
          />
          <Button 
            aria-label={__('Remove Slice', 'chee-blocks')} 
            title={__('Remove Slice', 'chee-blocks')} 
            onClick={() => onRemoveSlice(id)}
          >
            <Icon icon="remove" />
          </Button>
        </div>
        <RangeControl
          label={__('Slice Percentage', 'chee-blocks')}
          value={slice.slicePercentage}
          onChange={(percentage) => onChange(id, 'slicePercentage', percentage)}
          min={0}
          max={100}
          step={0.1}
        />
        <BaseControl
          __nextHasNoMarginBottom
          id={`color-palette-${id}`}
          label={__('Slice Color', 'chee-blocks')}
        >
          <ColorPalette
            id={`color-palette-${id}`}
            aria-label={__('Color palette for slice', 'chee-blocks') + ` ${id + 1}`}
            colors={colorPalette}
            value={slice.sliceColor}
            onChange={(color) => onChange(id, 'sliceColor', color)}
          />
        </BaseControl>
      </div>
    </PanelBody>
  );
};

export default SliceEntry;