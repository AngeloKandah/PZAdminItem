import ModalContainer from './Modal.style';

function Modal({ itemForModal, setItemForModal }) {
  return Object.keys(itemForModal).length > 0 ? (
    <button type='button' onClick={() => setItemForModal({})}>Test</button>
  ) : (
    <div>Test2</div>
  );
}

export default Modal;
