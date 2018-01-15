import { connect } from 'react-redux';
import Item from '../components/Item';
import {
    addItemToCart
} from '../actions/cart';

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart : (item) => {
          
                dispatch(addItemToCart(item))
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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Item);
