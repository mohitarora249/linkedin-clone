import { useState, useEffect } from "react";

type Args = {
    url: string;
};

const useWebSocket = ({ url }: Args) => {
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const newSocket = new WebSocket(url);
        setSocket(newSocket);
        return () => newSocket.close();
    }, [url]);

    return socket;
};

export default useWebSocket;
