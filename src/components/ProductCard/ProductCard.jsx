import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProductCard(props) {
    const { data } = props;

    console.log('ProductCard');

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    {data.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {data.description}
                </Typography>
                <Typography variant="body2">{data.price}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default React.memo(ProductCard);
