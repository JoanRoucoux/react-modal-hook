import React from 'react';
import Modal from './components/Modal';
import useModal from './hooks/useModal';
import './App.scss';

const App = () => {
  const { isShowing, toggle } = useModal();
  return (
    <div className="my-app">
      <button className="button-default" onClick={toggle}>
        Show Modal
      </button>
      <Modal isShowing={isShowing} hide={toggle} />
    </div>
  );
};

export default App;
