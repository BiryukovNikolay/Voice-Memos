import { memo } from 'react';

type Props = {
  className?: string;
};

const MicrophoneIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 15a3 3 0 0 1-3-3V5a3 3 0 0 1 6 0v7a3 3 0 0 1-3 3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="5"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  );
};

const MemoMicrophoneIconComponent = memo(MicrophoneIcon);
export default MemoMicrophoneIconComponent;
