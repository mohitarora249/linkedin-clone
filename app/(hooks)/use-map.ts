import { useCallback, useState } from "react";

type Args<K, V> = {
    initialMap?: Map<K, V>;
};

const useMap = <K, V>({ initialMap = new Map() }: Args<K, V>) => {
    const [map, setMap] = useState(initialMap);
    const clear = useCallback(() => setMap(new Map()), []);
    const set = useCallback((key: K, value: V) => {
        setMap((prevMap) => {
            const newMap = new Map(prevMap);
            newMap.set(key, value);
            return newMap;
        });
    }, []);
    return [map, set, clear];
};
export default useMap;
