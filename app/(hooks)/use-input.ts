import { useCallback, useState } from "react";

const useInput = (initialValue: string = "") => {
    const [value, setValue] = useState(initialValue);
    const clear = useCallback(() => setValue(""), []);
    return [value, setValue, clear];
};

export default useInput;
