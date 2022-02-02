import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import getAllItemInfo from '../../lib/getAllItemInfo';
import CyclingIcons from '../images/CyclingIcons';
import Icons from '../images/Icons';
import Name from '../itemName/Name';
import {Panel, ItemContainer} from './Main.style';

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
    <ItemContainer>
      {items.map((item) =>
        item.map((info) => (
          <Panel key={uuidv4()}>
            {info.Icon ? (
              <Icons iconName={info.Icon}/>
            ) : (
              <CyclingIcons unsplicedIcons={info.IconsForTexture} />
/*               <Icons iconName={info.IconsForTexture.split(';')[0]} />
 */              /* info.IconsForTexture.split(';').map((texture) => (
                <Icons iconName={texture} key={uuidv4()}/>
              )) */
            )}
            <Name displayName={info.DisplayName} />
          </Panel>
        ))
      )}
    </ItemContainer>
  );
}

export default Main;
