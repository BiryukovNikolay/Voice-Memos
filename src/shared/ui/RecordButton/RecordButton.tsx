import { memo, useState } from 'react';
import { MicrophoneIcon, RecordIcon } from 'src/shared/icons';
import styles from './RecordButton.module.scss';

type Props = {
  onStart: () => void;
  onStop: () => void;
  label: string;
  className?: string;
};

const RecordButton = ({ className, label, onStart, onStop }: Props) => {
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
      className={className}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
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
