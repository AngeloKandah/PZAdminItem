import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import getIcons from '../../getIcons';

function Icons() {
  const [icons, setIcon] = useState([]);
  useEffect(() => {
    async function getAllIcons() {
      const iconName = await getIcons();
      setIcon(iconName);
    }
    getAllIcons();
  }, []);
  return (
    <div>
      {icons.map((icon) =>
        Array.isArray(icon) ? (
          icon.map((subIcon) => (
            <img src={`icons/Item_${subIcon}.png`} alt={subIcon} key={uuidv4()} />
          ))
        ) : (
          <img style={{width: '30px', height: '30px'}}src={`icons/Item_${icon}.png`} alt={icon} key={uuidv4()} />
        )
      )}
    </div>
  );
}

export default Icons;
