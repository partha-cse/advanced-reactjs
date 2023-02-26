import { useState } from 'react';

function useData(defaultValue) {
    const [data, setData] = useState(defaultValue);

    const reassignData = (newData) => {
        setData(newData);
    };

    const addData = (newItem) => {
        setData((items) => [...items, newItem]);
    };

    const returnArray = [data, reassignData, addData];

    return returnArray;
}

export default useData;
