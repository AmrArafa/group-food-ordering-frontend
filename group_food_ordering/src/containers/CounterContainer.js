import { connect } from 'react-redux';
import Counter from '../components/Counter';
import {incrementCounter, decrementCounter} from '../actions/counter';

 const mapStateToProps = function(state){
     return {
        count: state.counter.count
     }
 }

 const mapDispatchToProps = function(dispatch){
     return {
        increment: function(){
            dispatch(incrementCounter())
        },
        decrement: function(){
            dispatch(decrementCounter())
        }
     }
 }

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default CounterContainer;