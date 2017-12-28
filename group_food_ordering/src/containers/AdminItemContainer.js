// import { connect } from 'react-redux';
// import AdminItem from '../components/Admin/AdminItem';
// import { sendItemToEdit } from '../actions/sendItemToEdit';
// const mapStateToProps = (state) => {
//     return {
//         items: state.items.items,
//         loading: state.items.loading,
//         error: state.items.error
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//        sendItem: (item) => {
//                 dispatch(sendItemToEdit(item))
//            }

//     }
// }

// const mergeProps = (stateProps, dispatchProps, ownProps) => {
    
//     return {
//         // Find the user with the id passed from the url by the route
//         ...stateProps,
//         ...dispatchProps,
//         ...ownProps
//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(AdminItem);