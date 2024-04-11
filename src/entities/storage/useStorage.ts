import { useCallback, useEffect, useRef, useState } from 'react';
import { MemoType } from 'shared/types';

type UseStorageHookResult = {
  memos: MemoType[];
  remove: (id: string) => void;
  update: (memo: MemoType) => void;
  add: (memo: MemoType) => void;
};

export function useStorage(): UseStorageHookResult {
  const [memos, setMemos] = useState<MemoType[]>([]);
  const isInitialMount = useRef(true);

  const remove = useCallback((id: string) => {
    setMemos((prev) => prev.filter((memo) => memo.id !== id));
  }, []);

  const update = useCallback((memo: MemoType) => {
    setMemos((prev) => prev.map((m) => (m.id === memo.id ? memo : m)));
  }, []);

  const add = useCallback((memo: MemoType) => {
    setMemos((prev) => [...prev, memo]);
  }, []);

  useEffect(() => {
    const data = localStorage.getItem('memos');
    if (data) {
      setMemos(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (!isInitialMount.current) {
      localStorage.setItem('memos', JSON.stringify(memos));
      return;
    }

    isInitialMount.current = false;
  }, [memos]);

  return { memos, remove, update, add };
}
