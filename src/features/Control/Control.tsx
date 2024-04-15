import { ChangeEvent, memo, useEffect } from 'react';
import classNames from 'classnames';
import { useSpeechRecognition } from 'entities/speechRecognition';
import { ControlName, ControlType, PayloadType } from 'shared/types';
import { WORDINGS } from 'shared/constants';
import { RecordButton } from 'src/shared/ui';
import styles from './Control.module.scss';

type Props = {
  label: string;
  value: string;
  name: ControlName;
  type: ControlType;
  onChange: (payload: PayloadType) => void;
  error?: boolean;
};

function Control({
  label,
  onChange,
  name,
  value,
  type,
  error,
}: Props): JSX.Element | null {
  const { start, stop, result, disabled } = useSpeechRecognition();

  function handleChange({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { value } = target;
    onChange({ name, value });
  }

  useEffect(() => {
    onChange({ name, value: result });
  }, [name, onChange, result]);

  function getInput() {
    switch (type) {
      case ControlType.TEXTAREA:
        return (
          <textarea
            rows={10}
            name={name}
            onChange={handleChange}
            className={classNames(styles['input'], {
              [styles['input_error']]: error,
            })}
            value={value}
          />
        );
      case ControlType.INPUT:
        return (
          <input
            name={name}
            onChange={handleChange}
            className={classNames(styles['input'], {
              [styles['input_error']]: error,
            })}
            value={value}
          />
        );
      default:
        return null;
    }
  }

  return (
    <div className={styles['control']}>
      <label className={styles['label']}>
        <span className={styles['title']}>{label}</span>
        {getInput()}
      </label>
      <RecordButton
        label={WORDINGS.START_RECORDING}
        className={styles['start-button']}
        onStart={start}
        onStop={stop}
        disabled={disabled}
      />
    </div>
  );
}

const ControlComponent = memo(Control);
export default ControlComponent;
