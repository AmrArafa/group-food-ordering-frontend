import { connect } from 'react-redux';
import Cart from '../components/Cart';
import {
    copyItems 
} from '../actions/groups';

const mapStateToProps = (state) => {
    return {
        items: state.cart.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        copyItems : (items) => {
          
                dispatch(copyItems(items))
           }
}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    console.log(ownProps);
    return {
        ...stateProps,
        ...dispatchProps,
        ...ownProps
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Cart);
