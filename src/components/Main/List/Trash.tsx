import TrashIcon from '../../../trash-bin.svg?react';

interface TrashProps {
  onClickDelete: () => void;
  counter: number;
}

function Trash({ onClickDelete, counter }: TrashProps) {
  return <TrashIcon width={30} height={30} onClick={onClickDelete}/>;
}

export default Trash;

