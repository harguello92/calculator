import { ComponentChild } from 'preact';
import useActions from '../../../hooks/useActions';
import { ReactComponent as Division } from '../../Icons/Division.svg';
import { ReactComponent as Equal } from '../../Icons/Equal.svg';
import { ReactComponent as Multiply } from '../../Icons/Multiply.svg';
import { ReactComponent as Plus } from '../../Icons/Plus.svg';
import { ReactComponent as Minus } from '../../Icons/Minus.svg';
import { ReactComponent as Delete } from '../../Icons/Delete.svg';
import { ReactComponent as Percentage } from '../../Icons/Percentage.svg';

export interface IKeys {
  value: ComponentChild;
  onClick: () => void;
  bullet?: boolean;
}

const useKeyboard = () => {
  const { setOperation, setNumber, evaluate, reset, deleteLast } = useActions();

  const keys: IKeys[] = [
    {
      value: <Delete width={20} height={20} />,
      onClick: () => deleteLast(),
      bullet: true
    },
    { value: 'C', onClick: () => reset(), bullet: true },
    {
      value: <Percentage width={20} height={20} />,
      onClick: () => setOperation('percentage'),
      bullet: true
    },
    {
      value: <Division width={20} height={20} />,
      onClick: () => setOperation('division'),
      bullet: true
    },
    { value: '7', onClick: () => setNumber('7') },
    { value: '8', onClick: () => setNumber('8') },
    { value: '9', onClick: () => setNumber('9') },
    {
      value: <Multiply width={20} height={20} />,
      onClick: () => setOperation('multiplication'),
      bullet: true
    },
    { value: '4', onClick: () => setNumber('4') },
    { value: '5', onClick: () => setNumber('5') },
    { value: '6', onClick: () => setNumber('6') },
    {
      value: <Minus width={20} height={20} />,
      onClick: () => setOperation('minus'),
      bullet: true
    },
    { value: '1', onClick: () => setNumber('1') },
    { value: '2', onClick: () => setNumber('2') },
    { value: '3', onClick: () => setNumber('3') },
    {
      value: <Plus width={20} height={20} />,
      onClick: () => setOperation('sum'),
      bullet: true
    },
    { value: '0', onClick: () => setNumber('0') },
    { value: ',', onClick: () => setOperation('coma') },
    { value: null, onClick: () => {} },
    {
      value: <Equal width={20} height={20} />,
      onClick: evaluate,
      bullet: true
    }
  ];

  return { keys };
};

export default useKeyboard;
