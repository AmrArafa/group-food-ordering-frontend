import { connect } from 'react-redux';
import Cart from '../components/Cart';
// import {
//     addItem
// } from '../actions/cart';

const mapStateToProps = (state) => {
    console.log(state);
    return {
        items: state.cart.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
}
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
