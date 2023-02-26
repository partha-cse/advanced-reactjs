import CardsWrapper from '../CardsWrapper/CardsWrapper';
import OrderCard from './OrderCard';
import { withShowData } from '../../hoc';

function OrderCardContainer(props) {
    const { data } = props;

    return <CardsWrapper data={data} cardComponet={OrderCard} />;
}

export default withShowData(OrderCardContainer);
