import { memo } from 'react';

type Props = {
  className?: string;
};

const RecordIcon = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="red"
      fill="red"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
};

const MemoRecordIconComponent = memo(RecordIcon);
export default MemoRecordIconComponent;
