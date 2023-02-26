import React from 'react';
import Grid from '@mui/material/Grid';

function withShowData(WrappedComponent) {
    function newWrappedComponent(props) {
        const { data, newItems } = props;

        return (
            <div>
                <div style={{ textAlign: 'center' }}>Number of new Items: {newItems}</div>
                <Grid
                    container
                    rowSpacing={3}
                    columnSpacing={3}
                    style={{ margin: '15px', width: '100%' }}
                >
                    <WrappedComponent {...props} data={data} />
                </Grid>
            </div>
        );
    }

    return newWrappedComponent;
}

export default withShowData;
