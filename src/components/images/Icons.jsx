import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import getAllItemInfo from '../../lib/getAllItemInfo';

function Icons() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function getAllIcons() {
      const itemInfo = await getAllItemInfo();
      setItems(itemInfo);
    }
    getAllIcons();
  }, []);
  return (
    <div>
      {items.map((item) =>
        item.map((info) =>
          info.Icon ? (
            <img
              src={`icons/Item_${info.Icon}.png`}
              onError={(e) => {
                e.target.src = 'icons/placeholder.png';
              }}
              style={{ maxWidth: '30px', maxHeight: '30px' }}
              alt={info.Icon}
              key={uuidv4()}
            />
          ) : (
            info.IconsForTexture.split(';').map((texture) => (
              <img
                src={`icons/Item_${texture}.png`}
                onError={(e) => {
                  e.target.src = 'icons/placeholder.png';
                }}
                style={{ maxWidth: '30px', maxHeight: '30px' }}
                alt={texture}
                key={uuidv4()}
              />
            ))
          )
        )
      )}
    </div>
  );
}

export default Icons;
