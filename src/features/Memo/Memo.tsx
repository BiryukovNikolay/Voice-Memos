import { memo, useState } from 'react';
import classNames from 'classnames';
import { DeleteIcon, EditIcon } from 'shared/icons';
import styles from './Memo.module.scss';

type Props = {
  description: string;
  content: string;
  id: string;
  onRemove: (id: string) => void;
  onUpdate: (id: string) => void;
};

function Memo({
  description,
  content,
  id,
  onRemove,
  onUpdate,
}: Props): JSX.Element | null {
  const [active, setActive] = useState(false);

  function handleDelete() {
    onRemove(id);
  }

  function handleUpdate() {
    onUpdate(id);
  }

  function handleMouseEnter() {
    setActive(true);
  }

  function handleMouseLeave() {
    setActive(false);
  }

  return (
    <div
      className={styles['container']}
      onMouseMove={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className={styles['description']}>{description}</h2>
      <p className={styles['text']}>{content}</p>
      <div
        className={classNames(styles['actions'], {
          [styles['actions_active']]: active,
        })}
      >
        <button
          className={styles['button']}
          aria-label={'Edit'}
          title={'Edit'}
          type="button"
          onClick={handleUpdate}
        >
          <EditIcon />
        </button>
        <button
          className={styles['button']}
          aria-label={'Delete'}
          title={'Delete'}
          type="button"
          onClick={handleDelete}
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

const MemoComponent = memo(Memo);
export default MemoComponent;
