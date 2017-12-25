import { connect } from 'react-redux';
import Item from '../components/Item';
import {
    addItem
} from '../actions/cart';

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem : (item) => {
          
                dispatch(addItem(item))
           }
}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    console.log(ownProps);
    return {
        // Find the user with the id passed from the url by the route
        ...stateProps,
        ...dispatchProps,
        ...ownProps
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Item);
