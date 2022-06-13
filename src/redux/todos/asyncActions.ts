import { Dispatch } from "react"
import { USER_1_TODOS_URL, TODOS_URL } from "../../util/constants"
import { setTodos } from "./actions"
import { TodoPayloadType, TodosType } from "./types"

export type Todo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export const fetchTodos = () => {
  return (dispatch: Dispatch<any>) => {
    fetch(USER_1_TODOS_URL)
      .then(response => response.json())
      .then(data => {
        let todos: TodosType = {}
        data.forEach((todo: Todo) =>  {
          todos[todo.id] = {
            name: todo.title,
            isCompleted: todo.completed,
            isFavorite: false,
            isEdited: false,
            addDate: (new Date()).toDateString()
          }
        })
        dispatch(setTodos(todos));
      })
  }
}

export const asyncDeleteTodo = (id: string) => {
  return (dispatch: Dispatch<any>) => {
    fetch(`${TODOS_URL}/${id}`, {
      method: 'DELETE',
    })
    .finally(() => console.log('todo deleted')) 
  }
}

export const asyncAddTodo = (todo: TodoPayloadType) => {
  return (dispatch: Dispatch<any>) => {
    fetch(`${TODOS_URL}`, {
  method: 'POST',
  body: JSON.stringify({
    id: todo.id,
    userId: 1,
    title: todo.name,
    completed: false,
    favorite: false,
    addDate: todo.addDate,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  }
}

export const asyncEditTodo = (todo: TodoPayloadType) => {
  return (dispatch: Dispatch<any>) => {
    fetch(`${TODOS_URL}/${todo.id}`, {
  method: 'PATCH',
  body: JSON.stringify({
    title: todo.name,
    completed: todo.completed,
    favorite: todo.favorite,
    adddate: todo.addDate
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  }
}