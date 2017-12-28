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
        // Find the user with the id passed from the url by the route
        ...stateProps,
        ...dispatchProps,
        ...ownProps
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Item);
