import { ProductCardContainer } from '../../components';
import { withLoadData } from '../../hoc';
import { DATA_KEY } from '../../utils/constants';

function Products(props) {
    const { data, newItems } = props;

    return <ProductCardContainer data={data} newItems={newItems} />;
}

export default withLoadData(Products, DATA_KEY.PRODUCT);
