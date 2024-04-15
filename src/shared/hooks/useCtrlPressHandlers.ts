import { KeyboardEvent } from 'react';
import { KeyCode } from '../constants';

type UseKeyPressHandlersResult = {
  handleKeyDown: (event: KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  handleKeyUp: (event: KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
};

type Props = {
  onDown: () => void;
  onUp: () => void;
}

export function useCtrlPressHandlers({onDown, onUp}: Props): UseKeyPressHandlersResult {
  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    console.log(event.code);

    if (event.code === KeyCode.ControlLeft || event.code === KeyCode.MetaLeft) {
      onDown();
    }
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (event.code === KeyCode.ControlLeft || event.code === KeyCode.MetaLeft) {
      onUp();
    }
  };

  return { handleKeyDown, handleKeyUp };
}
