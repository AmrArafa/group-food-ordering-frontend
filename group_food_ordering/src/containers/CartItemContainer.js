import { connect } from 'react-redux';
import CartItem from '../components/CartItem';
import Groups from '../components/Groups';
import {deleteItemFromCart, incrementQuantity, decrementQuantity} from '../actions/cart';



const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem : (item) => {
            dispatch(deleteItemFromCart(item))
        },
        incrementQuantity: (item) => {
            dispatch(incrementQuantity(item))
        },
        decrementQuantity: (item) => {
            dispatch(decrementQuantity(item))
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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CartItem, Groups);
