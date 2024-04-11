import { memo } from 'react';
import { Memo } from 'features/Memo';
import { MemoType } from 'shared/types';
import styles from './MemoList.module.scss';

type Props = {
  memos: MemoType[];
  update: (id: string) => void;
  remove: (id: string) => void;
};

function MemoList({ memos, update, remove }: Props): JSX.Element | null {
  return (
    <ul className={styles.list}>
      {memos.map((memo) => (
        <Memo
          key={memo.id}
          description={memo.description}
          content={memo.content}
          id={memo.id.toString()}
          onRemove={remove}
          onUpdate={update}
        />
      ))}
    </ul>
  );
}

const MemoListComponent = memo(MemoList);
export default MemoListComponent;
