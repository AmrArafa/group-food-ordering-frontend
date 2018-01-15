import { connect } from 'react-redux';
import Cart from '../components/Cart';

import {
    copyItems 
} from '../actions/groups';


const mapStateToProps = (state) => {
    return {
        items: state.cart.items,
        quantities: state.cart.quantities,
        total: state.cart.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        copyItems : (items, itemsIdsAndQuantity) => {
          
                dispatch(copyItems(items, itemsIdsAndQuantity))
           }
}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        ...stateProps,
        ...dispatchProps,
        ...ownProps
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Cart);
