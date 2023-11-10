import { useEffect } from "react";

type Args = {
    timeout: number;
    onIdle: () => void;
};

const useIdleTimer = ({ onIdle, timeout }: Args) => {
    useEffect(() => {
        let timer: NodeJS.Timeout;
        const resetTimer = () => {
            clearTimeout(timer);
            timer = setTimeout(onIdle, timeout);
        };

        resetTimer();

        const handleMouseMove = () => {
            resetTimer();
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [timeout, onIdle]);
};

export default useIdleTimer;
