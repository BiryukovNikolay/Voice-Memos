import { useCallback, useState } from 'react';
import { MemoType } from 'shared/types';
import { useStorage } from 'src/entities/storage';

type UseLayoutHookResult = {
  formOpen: boolean;
  activeMemo: MemoType | null;
  memos: MemoType[];
  openForm: (id?: string) => void;
  closeForm: () => void;
  handleUpdate: (memo: MemoType) => void;
  handleAdd: (memo: MemoType) => void;
  handleRemove: (id: string) => void;
};

export function useLayout(): UseLayoutHookResult {
  const [formOpen, setFormOpen] = useState(false);
  const [activeMemo, setActiveMemo] = useState<MemoType | null>(null);
  const { memos, add, update, remove } = useStorage();

  const closeForm = useCallback(() => {
    setFormOpen(false);
    setActiveMemo(null);
  }, []);

  const openForm = useCallback(
    (id?: string) => {
      if (id) {
        const memo = memos.find((m) => m.id === id);
        if (memo) {
          setActiveMemo(memo);
        }
      }

      setFormOpen(true);
    },
    [memos],
  );

  const handleUpdate = useCallback(
    (memo: MemoType) => {
      update(memo);
      closeForm();
    },
    [closeForm, update],
  );

  const handleAdd = useCallback(
    (memo: MemoType) => {
      add(memo);
      closeForm();
    },
    [add, closeForm],
  );

  const handleRemove = useCallback(
    (id: string) => {
      remove(id);
    },
    [remove],
  );

  return {
    memos,
    formOpen,
    activeMemo,
    openForm,
    closeForm,
    handleUpdate,
    handleAdd,
    handleRemove,
  };
}
