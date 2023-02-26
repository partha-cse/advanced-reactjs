import React, { useEffect, useMemo, useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import { DATA } from '../utils/constants';
import { useTheme, useData } from '../hooks';

function withLoadData(WrappedComponent, dataKey) {
    function newWrappedComponent(props) {
        const darktheme = useTheme();
        const [items, setItems, addItem] = useData([]);
        const [data, setData] = useState([]);
        const [newAdded, setNewAdded] = useState(0);

        const themeStyles = useMemo(() => {
            return {
                backgroundColor: darktheme ? '#333' : '#ccc',
                color: darktheme ? '#ccc' : '#333',
                padding: '2rem',
                margin: '4rem',
            };
        }, [darktheme]);

        useEffect(() => {
            setData(DATA[dataKey] || []);

            const itemList = [];
            for (let i = 0; i < DATA[dataKey].length; i += 1) {
                itemList.push(i + 1);
            }
            setItems(itemList);
        }, []);

        const add = () => {
            const newData = {
                ...data[0],
                id: data.length + 1,
            };

            const count = data.length + 1;
            addItem(count);

            setData([...data, newData]);
            setNewAdded(newAdded + 1);
        };

        return (
            <div style={themeStyles}>
                <div>Number of Data: {items.length}</div>
                <Fab size="medium" color="primary" aria-label="add" onClick={add}>
                    <AddIcon />
                </Fab>
                <WrappedComponent {...props} data={data} newItems={newAdded} />
            </div>
        );
    }

    return newWrappedComponent;
}

export default withLoadData;
