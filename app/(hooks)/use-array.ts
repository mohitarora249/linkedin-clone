import { useCallback, useState } from "react";

type Args<T> = {
    initialValue?: T[];
};

const useArray = <T>({ initialValue = [] }: Args<T>) => {
    const [value, setValue] = useState(initialValue);
    const clear = useCallback(() => setValue([]), []);
    const push = useCallback((item: T) => setValue((prevValue) => [...prevValue, item]), []);
    const pop = useCallback(() => setValue((prevValue) => prevValue.slice(0, -1)), []);
    return [value, setValue, clear, push, pop];
};

export default useArray;
