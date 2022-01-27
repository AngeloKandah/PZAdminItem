function Icons({ iconName }) {
  return (
    <img
      src={`icons/Item_${iconName}.png`}
      onError={(e) => {
        e.target.src = 'icons/placeholder.png';
        e.target.onerror = null;
      }}
      style={{ maxWidth: '30px', maxHeight: '30px' }}
      alt={iconName}
    />
  );
}

export default Icons;
