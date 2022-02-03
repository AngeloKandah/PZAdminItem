import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
    console.log('idk')
    getAllItems();
  }, []);
  return (
    <ItemContainer>
      {items.map((item) =>
        item.map((info) => (
          // key here causing entire remount, idk why
          <Panel key={uuidv4()} onClick={() => setItemForModal(info)}>
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
