import { useEffect, useState } from 'react';
import StyledIcon from './Icons.style';

function CyclingIcons({ unsplicedIcons }) {
  const [curIcon, setIcon] = useState(0);
  const icons = unsplicedIcons.split(';');
  useEffect(() => {
    function changeImage() {
      setIcon((curIcon + 1) % icons.length);
    }
    const interval = setInterval(changeImage, 4000);
    return () => clearInterval(interval);
  });
  return (
    <StyledIcon type='button'>
      <img
        src={`icons/Item_${icons[curIcon]}.png`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'icons/placeholder.png';
        }}
        alt={icons[curIcon]}
        style={{ maxWidth: '30px', maxHeight: '30px' }}
      />
    </StyledIcon>
  );
}

export default CyclingIcons;
