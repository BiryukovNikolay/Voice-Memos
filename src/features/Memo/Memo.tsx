import { ChangeEvent, memo } from 'react';
import { MemoType } from 'shared/types';
import styles from './Memo.module.scss';

type Props = {
  description: string;
  content: string;
  id: string;
  remove: (id: string) => void;
  update: (memo: MemoType) => void;
};

function Memo({ description, content, id, remove }: Props): JSX.Element | null {
  function handleBlur({ target }: ChangeEvent<Element>) {
    console.log('change', target, id);
  }

  function handleDelete() {
    console.log('delete', id);
    remove(id);
  }

  function handleUpdate() {
    console.log('update', id);
  }

  return (
    <div className={styles['container']}>
      <h2
        className={styles['description']}
        onBlur={handleBlur}
        contentEditable
        suppressContentEditableWarning
      >
        {description}
      </h2>
      <p
        className={styles['text']}
        onBlur={handleBlur}
        contentEditable
        suppressContentEditableWarning
      >
        {content}
      </p>
      <button type="button" onClick={handleDelete}>
        DELETE
      </button>
      <button type="button" onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
}

const MemoComponent = memo(Memo);
export default MemoComponent;
