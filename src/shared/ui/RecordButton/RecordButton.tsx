import { memo } from 'react';
import { MicrophoneIcon, RecordIcon } from 'src/shared/icons';
import styles from './RecordButton.module.scss';
import classNames from 'classnames';

type Props = {
  onStart: () => void;
  onStop: () => void;
  label: string;
  recording: boolean;
  className?: string;
  disabled?: boolean;
};

const RecordButton = ({
  className,
  label,
  onStart,
  onStop,
  disabled,
  recording,
}: Props) => {

  return (
    <button
      aria-label={label}
      className={classNames(className, {
        [styles['button-disabled']]: disabled,
      })}
      onMouseDown={onStart}
      onMouseUp={onStop}
      disabled={disabled}
      title={disabled ? 'Please allow microphone access' : label}
    >
      {recording ? (
        <RecordIcon className={styles['flashing']} />
      ) : (
        <MicrophoneIcon className={styles['microphone']} />
      )}
    </button>
  );
};

const MemoRecordButtonComponent = memo(RecordButton);
export default MemoRecordButtonComponent;
