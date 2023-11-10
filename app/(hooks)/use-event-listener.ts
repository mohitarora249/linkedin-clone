import { useEffect } from "react";

type EventType = "resize" | "online" | "offline";

type Args = {
    name: EventType;
    callback: (e: any) => void;
};

const useEventListener = ({ name, callback }: Args) => {
    useEffect(() => {
        if (typeof window !== "undefined") window.addEventListener(name, callback);
        return () => window.removeEventListener(name, callback);
    }, []);
};

export default useEventListener;
