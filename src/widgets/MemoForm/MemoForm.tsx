import { FormEvent, memo, useCallback, useEffect, useState } from 'react';
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
  onSubmit: (memo: MemoType) => void;
  activeMemo: MemoType | null;
};

const INITIAL_STATE: StateType = {
  [ControlName.DESCRIPTION]: '',
  [ControlName.MAIN]: '',
};

function MemoForm({ onSubmit, activeMemo }: Props): JSX.Element | null {
  const [state, setState] = useState<StateType>(INITIAL_STATE);
  const [error, setError] = useState<boolean>(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!state[ControlName.DESCRIPTION]) {
      setError(true);

      return;
    }

    onSubmit({
      id: activeMemo?.id || '',
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

  useEffect(() => {
    if (activeMemo) {
      setState({
        [ControlName.DESCRIPTION]: activeMemo.description,
        [ControlName.MAIN]: activeMemo.content,
      });
    } else {
      setState(INITIAL_STATE);
    }
  }, [activeMemo]);

  return (
    <form className={styles['form']} onSubmit={handleSubmit}>
      <span className={styles['instruction']}>{WORDINGS.INSTRUCTION}</span>
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
      <div className={styles['footer']}>
        <button className={styles['submit']} type="submit">
          {activeMemo ? WORDINGS.UPDATE : WORDINGS.ADD_BUTTON}
        </button>
      </div>
    </form>
  );
}

const MemoFormComponent = memo(MemoForm);
export default MemoFormComponent;
