import { useCallback, useEffect, useState } from 'react';

type SpeechRecognitionHookResult = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  recognition: any | null;
  result: string;
};

export function useSpeechRecognition(): SpeechRecognitionHookResult {
  const [result, setResult] = useState<string>('');
  const [recognition, setRecognition] = useState(null);

  const handleResult = useCallback((event: any) => {
    const result = event.results[0][0].transcript;
    setResult(result);
    console.log(result, 'result', event);
  }, []);

  const handleEnd = useCallback(() => {
    console.log('end');
  }, []);

  useEffect(() => {
    const recognitionInstance = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognitionInstance.lang = 'en-US';
    recognitionInstance.interimResults = false;
    recognitionInstance.maxAlternatives = 2;
    recognitionInstance.continuous = true;
    recognitionInstance.onresult = handleResult;
    recognitionInstance.onend = handleEnd;

    setRecognition(recognitionInstance);

    return () => {
      recognitionInstance.abort();
    };
  }, [handleEnd, handleResult]);

  return { recognition, result };
}
