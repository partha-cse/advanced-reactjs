/* eslint-disable no-debugger */
import React from 'react';
import Grid from '@mui/material/Grid';

function CardsWrapper(props) {
    const { data, cardComponet: CardComponent } = props;

    return data.map((dataItem) => {
        return (
            <Grid item xs={12} sm={6} md={4} key={dataItem.id} style={{ padding: '15px' }}>
                <CardComponent data={dataItem} />
            </Grid>
        );
    });
}

export default CardsWrapper;
