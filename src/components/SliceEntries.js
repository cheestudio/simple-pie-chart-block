import SliceEntry from './SliceEntry';

const SliceEntries = ({ slices, colorPalette, handleUpdateSlice, handleRemoveSlice }) => {
  return (
    <>
      {slices.map((slice, index) => (
        <SliceEntry
          key={index}
          id={index}
          slice={slice}
          colorPalette={colorPalette}
          onTitleChange={(id, value) => handleUpdateSlice(id, 'sliceTitle', value)}
          onRemoveSlice={handleRemoveSlice}
          onColorChange={(id, value) => handleUpdateSlice(id, 'sliceColor', value)}
          onPercentageChange={(id, value) => handleUpdateSlice(id, 'slicePercentage', value)}
          onValueChange={(id, value) => handleUpdateSlice(id, 'sliceValue', value)}
        />
      ))}
    </>
  );
};

export default SliceEntries;