import uuid from 'uuid';
import {GET_TODOS, ADD_TODO, DELETE_TODO} from '../actions/types';

const initState = {
  todos: [
    {id: uuid(), text: 'Go to Gym'},
    {id: uuid(), text: 'Eat Food'},
    {id: uuid(), text: 'Study Redux'},
  ]
}

export default function(state=initState, action){
  switch(action.type){
    case GET_TODOS:
      return {
        ...state
      }
    case ADD_TODO:
      return{
        ...state,
        todos: [action.payload, ...state.todos]
      }
    case DELETE_TODO:
      return{
        ...state,
        todos: state.todos.filter(text => text.id !== action.payload)
      }
    default:
      return state
  }
}
