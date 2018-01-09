import { connect } from 'react-redux';
import OrderOrderHistory from '../components/Order/OrderOrderHistory';
import { getOrdersLoading, getOrders, getOrdersSuccess, getOrdersFailure,
        editOrderLoading, editOrder, editOrderSuccess, editOrderFailure,
        getOrderLoading, getOrder, getOrderSuccess, getOrderFailure

         } from '../actions/Order/orders';

const mapStateToProps = (state) => {
    return {
        order: state.OrderOrders.order,
        orders: state.OrderOrders.orders,
        loading: state.OrderOrders.loading,
        error: state.OrderOrders.error
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        editOrder: (id, order) => {
            dispatch(editOrderLoading(id));
            setTimeout(() => {
                dispatch(editOrder(id, order)).then(response => {
                    if(response.payload.status < 400){
                        dispatch(editOrderSuccess(response.payload.data));
                    }else{
                        dispatch(editOrderFailure(response.payload.message));
                    }
                })
            }, 1)
        },
        getOrder: (id) => {
            dispatch(getOrderLoading());
            setTimeout(() => {
                dispatch(getOrder(id)).then(response => {
                    if(response.payload.status < 400){
                        dispatch(getOrderSuccess(response.payload.data));
                    }else{
                        dispatch(getOrderFailure(response.payload.message));
                    }

                  })
                }, 1)

        }, getOrders: () => {
            dispatch(getOrdersLoading());
            setTimeout(() => {
                dispatch(getOrders()).then(response => {
                    if(response.payload.status < 400){
                        dispatch(getOrdersSuccess(response.payload.data));
                    }else{
                        dispatch(getOrdersFailure(response.payload.message));
                    }
                })
            }, 1)
        }
    }


const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        ...stateProps,
        ...dispatchProps,
        ...ownProps
    }
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(OrderOrderHistory);
