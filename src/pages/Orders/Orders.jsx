import { OrderCardContainer } from '../../components';
import { withLoadData } from '../../hoc';
import { DATA_KEY } from '../../utils/constants';

function Orders(props) {
    const { data, newItems } = props;

    return <OrderCardContainer data={data} newItems={newItems} />;
}

export default withLoadData(Orders, DATA_KEY.ORDER);
