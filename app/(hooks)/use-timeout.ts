import { useEffect, useRef } from "react";

type VoidFnNoArgs = () => void;

type Args = {
    callback: VoidFnNoArgs;
    delay: number;
};

const useTimeout = ({ callback, delay }: Args) => {
    const callbackRef = useRef<() => void>();
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);
    useEffect(() => {
        if (delay > 0) {
            const timeoutId = setTimeout(() => {
                if (callbackRef.current) callbackRef.current();
            }, delay);
            return () => clearTimeout(timeoutId);
        }
    }, [delay]);
};

export default useTimeout;
