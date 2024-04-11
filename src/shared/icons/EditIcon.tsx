import { memo } from 'react';

type Props = {
  className?: string;
};

const EditIcon = ({ className }: Props) => {
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
      <path d="M12 20h9" />
      <path d="M16 4l4 4-8 8-4-4z" />
      <circle cx="5" cy="19" r="1" />
    </svg>
  );
};

const MemoEditIconComponent = memo(EditIcon);
export default MemoEditIconComponent;
