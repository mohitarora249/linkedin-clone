import { useState } from "react";

type Args<T> = {
    key: string;
    initialValue: T;
    expiration: number;
};

function useLocalStorageCache<T>({ key, initialValue, expiration }: Args<T>) {
    const [cachedData, setCachedData] = useState(() => {
        const item = window.localStorage.getItem(key);
        if (item) {
            const storedData = JSON.parse(item);
            if (Date.now() - storedData.timestamp < expiration) {
                return storedData.data;
            }
        }
        return initialValue;
    });

    const setCachedValue = (data: T) => {
        const dataToStore = {
            data,
            timestamp: Date.now()
        };
        window.localStorage.setItem(key, JSON.stringify(dataToStore));
        setCachedData(data);
    };

    return [cachedData, setCachedValue] as const;
}

export default useLocalStorageCache;
