import { memo, useState } from 'react';
import { MicrophoneIcon, RecordIcon } from 'src/shared/icons';
import styles from './RecordButton.module.scss';
import classNames from 'classnames';

type Props = {
  onStart: () => void;
  onStop: () => void;
  label: string;
  className?: string;
  disabled?: boolean;
};

const RecordButton = ({
  className,
  label,
  onStart,
  onStop,
  disabled,
}: Props) => {
  const [isRecording, setIsRecording] = useState(false);

  const handleMouseDown = () => {
    setIsRecording(true);
    onStart();
  };

  const handleMouseUp = () => {
    setIsRecording(false);
    onStop();
  };

  return (
    <button
      aria-label={label}
      className={classNames(className, {
        [styles['button-disabled']]: disabled,
      })}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      disabled={disabled}
      title={disabled ? 'Please allow microphone access' : label}
    >
      {isRecording ? (
        <RecordIcon className={styles['flashing']} />
      ) : (
        <MicrophoneIcon className={styles['microphone']} />
      )}
    </button>
  );
};

const MemoRecordButtonComponent = memo(RecordButton);
export default MemoRecordButtonComponent;
