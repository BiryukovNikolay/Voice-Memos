import { memo } from 'react';
import { MemoForm } from 'widgets/MemoForm';
import { Header } from 'widgets/Header';
import { MemoList } from 'widgets/MemoList';
import { WORDINGS } from 'shared/constants';
import { Modal } from 'shared/ui';
import { useLayout } from './useLayout';

function Layout() {
  const {
    memos,
    activeMemo,
    formOpen,
    closeForm,
    handleRemove,
    handleSubmit,
    openForm,
  } = useLayout();

  return (
    <>
      <Header onAdd={openForm} title={WORDINGS.MAIN_TITLE} />
      <main>
        <MemoList memos={memos} update={openForm} remove={handleRemove} />
        {formOpen && (
          <Modal onClose={closeForm} closeLabel={WORDINGS.CLOSE_FORM}>
            <MemoForm activeMemo={activeMemo} onSubmit={handleSubmit} />
          </Modal>
        )}
      </main>
    </>
  );
}

const MemoLayoutComponent = memo(Layout);
export default MemoLayoutComponent;
