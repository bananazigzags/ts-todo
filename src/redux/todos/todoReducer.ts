import { ADD_TODO, DELETE_TODO, EDIT_TODO, SET_TODOS, TOGGLE_COMPLETED, TOGGLE_EDIT, TOGGLE_FAVORITE } from "./actionTypes";
import { ActionType, TodosType } from "./types";

export const initialState = {}

export const todoReducer = (state: TodosType = initialState, action: ActionType) => {
  const newState = {...state}
  switch (action.type) {
    case SET_TODOS:
      return action.payload
    case ADD_TODO:
      return {
        ...state, 
        [action.payload.id]: {
        name: action.payload.name,
        isCompleted: false,
        isFavorite: false,
        isEdited: false,
        addDate: action.payload.addDate,
        }
      }

    case TOGGLE_FAVORITE:
      newState[action.payload].isFavorite = !state[action.payload].isFavorite      
      return newState

    case TOGGLE_COMPLETED:
      newState[action.payload].isCompleted = !state[action.payload].isCompleted      
      return newState
    
    case TOGGLE_EDIT:
      newState[action.payload].isEdited = !state[action.payload].isEdited      
      return newState

    case DELETE_TODO:
      delete newState[action.payload]      
      return newState
    
    case EDIT_TODO:
      newState[action.payload.id].name = action.payload.name      
      return newState
    
    default:
      return state;
  }
}