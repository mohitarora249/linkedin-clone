import { useEffect, useRef } from "react";

type VoidFnNoArgs = () => void

type Args = {
    callback: VoidFnNoArgs;
    delay: number | null;
};

const useInterval = ({ callback, delay }: Args) => {
    const savedCallback = useRef<VoidFnNoArgs | null>();
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    useEffect(() => {
        const tick = () => {
            if (savedCallback.current) savedCallback.current();
        };
        if (delay !== null) {
            const intervalId = setInterval(tick, delay);
            return () => clearInterval(intervalId);
        }
    }, [delay]);
};

export default useInterval;
