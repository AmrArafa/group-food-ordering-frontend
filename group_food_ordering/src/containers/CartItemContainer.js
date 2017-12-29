import { connect } from 'react-redux';
import CartItem from '../components/CartItem';
import {deleteItem} from '../actions/cart';



const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem : (item) => {
          
                dispatch(deleteItem(item))
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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CartItem);
