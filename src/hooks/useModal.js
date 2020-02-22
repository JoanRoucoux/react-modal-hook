import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  const toggleModal = () => setIsShowing(!isShowing);

  const handleOverlayClicked = event =>
    event.target === event.currentTarget && toggleModal();

  return {
    isShowing,
    handleOverlayClicked,
    toggleModal
  };
};

export default useModal;
