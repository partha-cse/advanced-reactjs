/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useMemo, useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';

import { useTheme } from '../../hooks';
import { ProductCard } from '../../components';
import { DATA_KEY, DATA } from '../../utils/constants';

function ShowProducts(props) {
    const { getProducts, newItems } = props;
    const products = getProducts();

    useEffect(() => {
        console.log('ShowProducts getProducts');
    }, [getProducts]);

    useEffect(() => {
        console.log('ShowProducts numberOfNewItems');
    }, [newItems]);

    return (
        <div>
            <div style={{ textAlign: 'center' }}>Number of new Items: {newItems.count}</div>
            <Grid
                container
                rowSpacing={3}
                columnSpacing={3}
                style={{ margin: '15px', width: '100%' }}
            >
                {products.map((product) => {
                    return (
                        <Grid
                            xs={12}
                            sm={6}
                            md={4}
                            lg={4}
                            key={product.id}
                            style={{ padding: '15px' }}
                        >
                            <ProductCard data={product} />
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}

function getNewItemsCount(currentSize) {
    console.log('Calling slow functions to get new added items count.');

    for (let i = 0; i < 1000000000; i += 1) {
        const j = i + currentSize;
    }

    return {
        count: currentSize - (DATA[DATA_KEY.PRODUCT] || []).length,
    };
}

function ProductsBad() {
    const darktheme = useTheme();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(DATA[DATA_KEY.PRODUCT] || []);
    }, []);

    const themeStyles = {
        backgroundColor: darktheme ? '#333' : '#ccc',
        color: darktheme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '4rem',
    };

    const addProduct = () => {
        const newProduct = {
            ...products[0],
            id: products.length + 1,
        };

        setProducts([...products, newProduct]);
    };

    const newItems = getNewItemsCount(products.length);

    // const newItems = useMemo(() => {
    //     console.log('New added items -> Use memo');
    //     return getNewItemsCount(products.length);
    // }, [products]);

    const getProducts = () => {
        console.log('getProducts()');
        return products;
    };

    // const getProducts = useCallback(() => {
    //     console.log('getProducts() -> Use call back');
    //     return products;
    // }, [products]);

    return (
        <div style={themeStyles}>
            <Fab size="medium" color="primary" aria-label="add" onClick={addProduct}>
                <AddIcon />
            </Fab>
            <ShowProducts getProducts={getProducts} newItems={newItems} />
        </div>
    );
}

export default ProductsBad;
