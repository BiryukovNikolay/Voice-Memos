import { useCallback, useState } from 'react';
import { MemoType } from 'shared/types';
import { useStorage } from 'src/entities/storage';

type UseLayoutHookResult = {
  formOpen: boolean;
  activeMemo: MemoType | null;
  memos: MemoType[];
  openForm: (id?: string) => void;
  closeForm: () => void;
  handleRemove: (id: string) => void;
  handleSubmit: (memo: MemoType) => void;
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

  const handleSubmit = useCallback(
    (memo: MemoType) => {
      if (memo.id) {
        update(memo);
      } else {
        add({
          ...memo,
          id: Date.now().toString(),
        });
      }

      closeForm();
    },
    [add, closeForm, update],
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
    handleSubmit,
    handleRemove,
  };
}
