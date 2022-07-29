import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { get, set } from 'local-storage';

type Response<str> = [
  str,
  Dispatch<SetStateAction<string>>,
];

function usePersistedState<String>(key: string, initialState: string): Response<string> {
  const [state, setState] = useState(() => {
    const storageValue: string = get(key);

    if (storageValue) {
      return storageValue;
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    set(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;