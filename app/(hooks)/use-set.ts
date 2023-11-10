import { useCallback, useState } from "react";

type Args<T> = {
    initialSet?: Set<T>
};


const useSet = <T>({initialSet = new Set()}: Args<T>) => {
  const [set, updateSet] = useState(initialSet);
  const clear = useCallback(() => updateSet(new Set()), []);
  const add = useCallback((value: T) => updateSet((prevSet) => new Set([...prevSet, value])), []);
  return [set, add, clear];
}

export default useSet;