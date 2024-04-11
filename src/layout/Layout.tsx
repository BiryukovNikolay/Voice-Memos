import { memo } from 'react';
import { MemoForm } from 'widgets/MemoForm';
import { Header } from 'widgets/Header';
import { MemoList } from 'widgets/MemoList';
import { WORDINGS } from 'shared/constants';
import { AddButton, Modal } from 'shared/ui';
import { useLayout } from './useLayout';

function Layout() {
  const {
    memos,
    activeMemo,
    formOpen,
    closeForm,
    handleAdd,
    handleRemove,
    handleUpdate,
    openForm,
  } = useLayout();

  return (
    <>
      <Header title={WORDINGS.MAIN_TITLE} />
      {formOpen && (
        <Modal onClose={closeForm} closeLabel={WORDINGS.CLOSE_FORM}>
          <MemoForm
            addMemo={handleAdd}
            activeMemo={activeMemo}
            updateMemo={handleUpdate}
          />
        </Modal>
      )}
      <MemoList memos={memos} update={openForm} remove={handleRemove} />
      <AddButton onClick={openForm} label={WORDINGS.ADD_BUTTON} />
    </>
  );
}

const MemoLayoutComponent = memo(Layout);
export default MemoLayoutComponent;
