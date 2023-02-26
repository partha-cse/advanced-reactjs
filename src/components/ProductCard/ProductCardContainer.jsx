import CardsWrapper from '../CardsWrapper/CardsWrapper';
import ProductCard from './ProductCard';
import { withShowData } from '../../hoc';

function ProductCardContainer(props) {
    const { data } = props;

    return <CardsWrapper data={data} cardComponet={ProductCard} />;
}

export default withShowData(ProductCardContainer);
