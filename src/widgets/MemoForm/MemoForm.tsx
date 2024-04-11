import { FormEvent, memo, useCallback, useState } from 'react';
import { Control } from 'features/Control';
import {
  ControlName,
  ControlType,
  MemoType,
  PayloadType,
  StateType,
} from 'shared/types/types';
import { WORDINGS } from 'shared/constants';
import styles from './MemoForm.module.scss';

type Props = {
  addMemo: (memo: MemoType) => void;
};

const INITIAL_STATE: StateType = {
  [ControlName.DESCRIPTION]: '',
  [ControlName.MAIN]: '',
};

function MemoForm({ addMemo }: Props): JSX.Element | null {
  const [state, setState] = useState<StateType>(INITIAL_STATE);
  const [error, setError] = useState<boolean>(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!state[ControlName.DESCRIPTION]) {
      setError(true);

      return;
    }

    addMemo({
      id: Date.now().toString(),
      description: state[ControlName.DESCRIPTION],
      content: state[ControlName.MAIN],
    });

    setState(INITIAL_STATE);
  }

  const onChange = useCallback(({ name, value }: PayloadType) => {
    if (name === ControlName.DESCRIPTION && value) {
      setError(false);
    }

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  return (
    <form className={styles['form']} onSubmit={handleSubmit}>
      <Control
        name={ControlName.DESCRIPTION}
        label={WORDINGS.LABEL_DESCRIPTION}
        type={ControlType.INPUT}
        value={state[ControlName.DESCRIPTION]}
        onChange={onChange}
        error={error}
      />
      <Control
        name={ControlName.MAIN}
        label={WORDINGS.LABEL_MEMO}
        type={ControlType.TEXTAREA}
        value={state[ControlName.MAIN]}
        onChange={onChange}
      />
      <button type="submit">ADD</button>
    </form>
  );
}

const MemoFormComponent = memo(MemoForm);
export default MemoFormComponent;
