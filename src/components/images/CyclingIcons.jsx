import { useEffect, useState } from 'react';

function CyclingIcons({ unsplicedIcons }) {
  const [curIcon, setIcon] = useState(0);
  const icons = unsplicedIcons.split(';');
  useEffect(() => {
    function changeImage() {
      setIcon((curIcon + 1) % icons.length)
    }
    const interval = setInterval(changeImage, 4000);
    return () => clearInterval(interval);
  });
  return (
    <img
      src={`icons/Item_${icons[curIcon]}.png`}
      onError={(e) => {
        e.target.src = 'icons/placeholder.png';
        e.target.onerror = null;
      }}
      alt={icons[curIcon]}
      style={{ maxWidth: '30px', maxHeight: '30px' }}
    />
  );
}

export default CyclingIcons;
