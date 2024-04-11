import { memo } from 'react';

type Props = {
  label: string;
  onClick: () => void;
};

function AddButton({ onClick, label }: Props): JSX.Element {
  return (
    <button type="button" onClick={onClick} aria-label={label}>
      {' '}
      +{' '}
    </button>
  );
}

const MemoAddButtonComponent = memo(AddButton);
export default MemoAddButtonComponent;
