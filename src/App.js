import { useState } from 'react';
import './App.css';
import Main from './components/main/Main';
import Modal from './components/modal/Modal';

function App() {
  const [itemForModal, setItemForModal] = useState({});

  return (
    <div className='App'>
      <h1>Project Zomboid Items</h1>
      <Main setItemForModal={setItemForModal} />
      <Modal itemForModal={itemForModal} setItemForModal={setItemForModal} />
    </div>
  );
}

export default App;
