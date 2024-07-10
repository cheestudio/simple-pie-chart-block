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
          onChange={(id, attribute, value) => handleUpdateSlice(id, attribute, value)}
          onRemoveSlice={handleRemoveSlice}
        />
      ))}
    </>
  );
};

export default SliceEntries;