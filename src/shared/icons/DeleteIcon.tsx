import { memo } from 'react';

type Props = {
  className?: string;
};

const DeleteIcon = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="currentColor"
      className={className}
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
};

const MemoDeleteIconComponent = memo(DeleteIcon);
export default MemoDeleteIconComponent;
