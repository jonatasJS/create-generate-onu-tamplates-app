import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { get, set } from 'local-storage';

type Response<T> = [
  String,
  Dispatch<SetStateAction<String>>,
];

function usePersistedState<String>(key: string, initialState: string): Response<String> {
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