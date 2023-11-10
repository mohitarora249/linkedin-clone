import { useCallback, useState } from "react";

type Args = {
    initialValue?: number;
};

const useNumber = ({ initialValue = 0 }: Args) => {
    const [value, setValue] = useState(initialValue);
    const setTo = useCallback((val: number) => setValue(val), []);
    return [value, setTo];
};

export default useNumber;
