import { useState } from "react";
import useEventListener from "./use-event-listener";

type NetworkInfo = {
    online: boolean;
};

const useNetwork = () => {
    const [networkInfo, setNetworkInfo] = useState<NetworkInfo>({
        online: navigator.onLine
    });
    const updateNetworkInfo = () => {
        setNetworkInfo({
            online: navigator.onLine
        });
    };

    useEventListener({ name: "online", callback: updateNetworkInfo });
    useEventListener({ name: "offline", callback: updateNetworkInfo });

    return {isOnline: networkInfo.online};
};

export default useNetwork;
