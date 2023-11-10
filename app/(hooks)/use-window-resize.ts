import { useState } from "react";
import useEventListener from "./use-event-listener";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };
    useEventListener({ name: "resize", callback: handleResize });
    return windowSize;
};

export default useWindowSize;
