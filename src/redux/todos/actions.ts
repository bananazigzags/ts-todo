import { SET_TODOS, ADD_TODO, TOGGLE_FAVORITE, TOGGLE_COMPLETED, DELETE_TODO, TOGGLE_EDIT, EDIT_TODO } from "./actionTypes";
import { TodoPayloadType, TodosType } from "./types";

export const setTodos = (todos: TodosType) => {
  return {
    type: SET_TODOS,
    payload: todos
  }
}

export const addTodo = (todo: TodoPayloadType) => {
  return {
    type: ADD_TODO,
    payload: todo
  }
}

export const deleteTodo = (id: string) => {
  return {
    type: DELETE_TODO,
    payload: id
  }
}

export const toggleFavorite = (id: string) => {
  return {
    type: TOGGLE_FAVORITE,
    payload: id
  }
}

export const toggleCompleted = (id: string) => {
  return {
    type: TOGGLE_COMPLETED,
    payload: id
  }
}

export const toggleEdit = (id: string) => {
  return {
    type: TOGGLE_EDIT,
    payload: id
  }
}

export const editTodo = (todo: TodoPayloadType) => {
  return {
    type: EDIT_TODO,
    payload: todo
  }
}
