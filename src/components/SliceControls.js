import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';

const SliceControls = ({ handleAddSlice }) => {
  return (
    <Button
      className="add-slice-button"
      variant="primary"
      onClick={handleAddSlice}
      aria-label={__('Add Slice', 'chee-blocks')}
    >
      {__('Add Slice', 'chee-blocks')}
    </Button>
  );
};

export default SliceControls;