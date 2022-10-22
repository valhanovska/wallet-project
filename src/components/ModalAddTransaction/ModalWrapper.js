import { useIsMobile } from 'hooks/useIsMobile';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay } from './ModalAddTransaction.styled';
const modalRoot = document.querySelector('#modal');
const ModalWrapper = ({ children, handleClick }) => {
  const isMobile = useIsMobile();
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      handleClick();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      handleClick();
    }
  };

  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = 'hidden';
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      if (isMobile) {
        window.document.body.style.overflow = 'visible';
      }
      document.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line
  }, []);

  return createPortal(
    <Overlay onClick={handleBackdropClick}>{children}</Overlay>,
    modalRoot
  );
};

export default ModalWrapper;
