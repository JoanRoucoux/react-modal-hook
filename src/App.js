import React from 'react';
import Modal from './components/Modal';
import useModal from './hooks/useModal';
import './App.scss';

const App = () => {
  const { isShowing, handleOverlayClicked, toggleModal } = useModal();
  return (
    <div className="my-app">
      <button className="button-default" onClick={toggleModal}>
        Show Modal
      </button>
      <Modal
        hide={toggleModal}
        isShowing={isShowing}
        onOverlayClick={handleOverlayClicked}
      />
    </div>
  );
};

export default App;
