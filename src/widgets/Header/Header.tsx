import { memo } from 'react';
import { AddButton } from 'shared/ui';
import { WORDINGS } from 'shared/constants';
import styles from './Header.module.scss';

type Props = {
  title: string;
  onAdd: () => void;
};

function Header({ title, onAdd }: Props): JSX.Element | null {
  return (
    <header className={styles['header']}>
      <h1 className={styles['title']}>{title}</h1>
      <AddButton onClick={onAdd} label={WORDINGS.ADD_BUTTON} />
    </header>
  );
}

const MemoHeaderComponent = memo(Header);
export default MemoHeaderComponent;
