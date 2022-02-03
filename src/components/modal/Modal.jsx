import ModalContainer from './Modal.style';

function Modal({ itemForModal, setItemForModal }) {
  return Object.keys(itemForModal).length > 0 ? (
    <ModalContainer>
      <button type='button' onClick={() => setItemForModal({})}>X</button>
      <div>{itemForModal.Icon}</div>
    </ModalContainer>
  ) : (
    ''
  );
}

export default Modal;
