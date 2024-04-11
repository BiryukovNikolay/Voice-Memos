import { memo } from 'react';
import { PlusIcon } from 'shared/icons';
import styles from './AddButton.module.scss';

type Props = {
  label: string;
  onClick: () => void;
};

function AddButton({ onClick, label }: Props): JSX.Element {
  return (
    <button
      className={styles['button']}
      type="button"
      onClick={onClick}
      aria-label={label}
    >
      <PlusIcon className={styles['icon']} />
    </button>
  );
}

const MemoAddButtonComponent = memo(AddButton);
export default MemoAddButtonComponent;
