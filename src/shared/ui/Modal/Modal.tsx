import { RefObject } from 'react';
import { useClickOutside, useKeyDown } from 'shared/hooks';
import { KeyCode } from 'shared/constants';
import styles from './Modal.module.scss';

type Props = {
  onClose: () => void;
  children: React.ReactNode;
  closeLabel: string;
};

const Modal = ({ onClose, children, closeLabel }: Props) => {
  const modalRef = useClickOutside(onClose);

  useKeyDown(({ code }: KeyboardEvent) => {
    if (code === KeyCode.Escape) {
      onClose();
    }
  });

  return (
    <div className={styles['modal-overlay']}>
      <div
        ref={modalRef as RefObject<HTMLDivElement>}
        className={styles['modal']}
      >
        <button className={styles['close-button']} onClick={onClose}>
          {closeLabel}
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
