import { ChangeEvent, memo, useEffect } from 'react';
import { useSpeechRecognition } from 'entities/speechRecognition';
import { ControlName, ControlType, PayloadType } from 'shared/types';
import { WORDINGS } from 'shared/constants';
import styles from './Control.module.scss';
import classNames from 'classnames';

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
  const { recognition, result } = useSpeechRecognition();

  function mouseDownHandler() {
    recognition?.start();
    console.log('start', recognition);
  }

  function mouseUpHandler() {
    recognition?.stop();
    console.log('stop', recognition);
  }

  function handleChange({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    console.log('change', target);
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
    <div className={styles['description']}>
      <label className={styles['label']}>
        <span>{label}</span>
        {getInput()}
      </label>
      <button
        aria-label={WORDINGS.START_RECORDING}
        className={styles['start-button']}
        type="button"
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
      ></button>
    </div>
  );
}

const ControlComponent = memo(Control);
export default ControlComponent;
