import { useEffect, useState } from 'react';
import getAllItemInfo from '../../lib/getAllItemInfo';
import CyclingIcons from '../images/CyclingIcons';
import Icons from '../images/Icons';
import { Panel, ItemContainer } from './Main.style';

function Main({ setItemForModal }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getAllItems() {
      setItems(await getAllItemInfo());
    }
    getAllItems();
  }, []);
  
  return (
    <ItemContainer>
      {items.map((item) =>
        item.map((info) => (
          // key here causing entire remount, idk why
          <Panel key={info.Key} onClick={() => setItemForModal(info)}>
            {info.Icon ? (
              <Icons iconName={info.Icon} />
            ) : (
              <CyclingIcons unsplicedIcons={info.IconsForTexture} />
            )}
          </Panel>
        ))
      )}
    </ItemContainer>
  );
}

export default Main;
