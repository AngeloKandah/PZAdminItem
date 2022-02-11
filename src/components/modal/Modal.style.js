import styled from 'styled-components';

const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  overflow-y: hidden;
`;

const ModalHeader = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  background-color: #fff;
`;

const ModalFooter = styled.div`
  padding: 1rem;
  background-color: #fff;
  display: flex;
  justify-content: start;
  align-items: start;
`;

const ModalBody = styled.div`
  padding: 1rem 2rem;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  width: 50vw;
`;

export { ModalContainer, ModalHeader, ModalFooter, ModalBody, ModalContent };
