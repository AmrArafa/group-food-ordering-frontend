import { connect } from 'react-redux';
import AdminAddItem from '../components/Admin/AdminAddItem';
import { addItemLoading, addItem, addItemSuccess, addItemFailure } from '../actions/items';

const mapStateToProps = (state) => {
    return {
        items: state.items.items,
        loading: state.items.loading,
        error: state.items.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item, callback) => {
            dispatch(addItemLoading());
            setTimeout(() => {
                dispatch(addItem(item)).then(response => {
                    if(response.payload.status < 400){
                        dispatch(addItemSuccess(response.payload.data));
                    }else{
                        dispatch(addItemFailure(response.payload.message));
                    }
                })
            }, 1)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminAddItem);

