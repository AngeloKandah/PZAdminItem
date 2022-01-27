import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import getAllItemInfo from '../../lib/getAllItemInfo';
import Icons from '../images/Icons';
import Name from '../itemName/Name';

function Main() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function getAllItems() {
      const itemInfo = await getAllItemInfo();
      setItems(itemInfo);
    }
    getAllItems();
  }, []);
  // Change react.fragment to styled component
  return (
    <div>
      {items.map((item) =>
        item.map((info) => (
          <React.Fragment key={uuidv4()}>
            {info.Icon ? (
              <Icons iconName={info.Icon}/>
            ) : (
              info.IconsForTexture.split(';').map((texture) => (
                <Icons iconName={texture} key={uuidv4()}/>
              ))
            )}
            <Name displayName={info.DisplayName} />
          </React.Fragment>
        ))
      )}
    </div>
  );
}

export default Main;
