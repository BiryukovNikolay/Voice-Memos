import { memo } from 'react';
import styles from './Header.module.scss';

type Props = {
  title: string;
};

function Header({ title }: Props): JSX.Element | null {
  return (
    <header className={styles['header']}>
      <h1 className={styles['title']}>{title}</h1>
    </header>
  );
}

const MemoHeaderComponent = memo(Header);
export default MemoHeaderComponent;
