import useKeyboard from '../../hooks/useKeyboard';
import KeyboardPresentation from './Presentation';

function KeyboardContainer() {
  const { keys } = useKeyboard();
  return <KeyboardPresentation keys={keys} />;
}

export default KeyboardContainer;
