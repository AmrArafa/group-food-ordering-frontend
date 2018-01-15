import ActionCable from 'actioncable';
import {actionCable} from '../../apiConfig'; 

const token = localStorage.getItem('jwtToken');
export var cable = ActionCable.createConsumer(actionCable(token))
