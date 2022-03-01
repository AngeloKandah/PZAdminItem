import {
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
} from './Modal.style';
import Icons from '../images/Icons';
import CyclingIcons from '../images/CyclingIcons';

function Modal({ itemForModal, setItemForModal }) {
  const visible = Object.keys(itemForModal).length > 0;
  if (!visible) {
    document.body.style.overflowY = '';
    document.getElementById('root').style.overflowY = '';
    return null;
  }
  document.body.style.overflowY = 'hidden';
  document.getElementById('root').style.overflowY = 'scroll';
  return (
    <ModalContainer onClick={() => setItemForModal({})} isVisible={visible}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h1>
            {itemForModal.DisplayName
              ? itemForModal.DisplayName.replace(/([a-z])([A-Z])/g, '$1 $2')
              : ''}
          </h1>
          <button type='submit' onClick={() => setItemForModal({})}>
            X
          </button>
        </ModalHeader>
        <ModalBody>
          <div>
            {Object.entries(itemForModal).map(([key, val]) => (
              <div key={key}>{`${key} : ${val}`}</div>
            ))}
          </div>

          {itemForModal.Icon ? (
            <Icons iconName={itemForModal.Icon} />
          ) : (
            <CyclingIcons unsplicedIcons={itemForModal.IconsForTexture} />
          )}
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </ModalContainer>
  );
}

export default Modal;
