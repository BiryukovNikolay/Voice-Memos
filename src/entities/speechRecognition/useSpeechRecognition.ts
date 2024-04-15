import { useCallback, useEffect, useRef, useState } from 'react';

type SpeechRecognitionHookResult = {
  start: () => void;
  stop: () => void;
  result: string;
  disabled: boolean;
};

export function useSpeechRecognition(): SpeechRecognitionHookResult {
  const [result, setResult] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(false);
  const recognition = useRef<any>(null);

  const handleResult = useCallback((event: any) => {
    const result = event.results[0][0].transcript;
    setResult(result);
  }, []);

  const start = useCallback(() => {
    recognition.current?.start();
  }, [recognition]);

  const stop = useCallback(() => {
    recognition.current?.stop();
  }, [recognition]);

  useEffect(() => {
    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
      const recognitionInstance = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      recognitionInstance.lang = 'en-US';
      recognitionInstance.interimResults = false;
      recognitionInstance.maxAlternatives = 2;
      recognitionInstance.continuous = true;
      recognitionInstance.onresult = handleResult;
      recognition.current = recognitionInstance;
    } else {
      setDisabled(true);
    }

    return () => {
      recognition.current?.abort();
    };
  }, [handleResult, recognition]);

  return { start, stop, result, disabled };
}
