import { useStorage } from 'entities/storage';
import { MemoForm } from 'widgets/MemoForm';
import { Header } from 'widgets/Header';
import { MemoList } from 'widgets/MemoList';
import { WORDINGS } from 'shared/constants';
import { AddButton, Modal } from 'shared/ui';
import { useCallback, useState } from 'react';

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const { memos, add, update, remove } = useStorage();

  const handleClickAdd = useCallback(() => {
    setFormOpen(true);
  }, []);

  const closeForm = useCallback(() => {
    setFormOpen(false);
  }, []);

  return (
    <>
      <Header title={WORDINGS.MAIN_TITLE} />
      {formOpen && (
        <Modal onClose={closeForm} closeLabel={WORDINGS.CLOSE_FORM}>
          <MemoForm addMemo={add} />
        </Modal>
      )}
      <MemoList memos={memos} update={update} remove={remove} />
      <AddButton onClick={handleClickAdd} label={WORDINGS.ADD_BUTTON} />
    </>
  );
}

export default App;
