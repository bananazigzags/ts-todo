import './Todo.css'
import React, { Dispatch } from 'react'
import menu from '../../icons/menu.svg'
import star from '../../icons/star.svg'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectTodos } from '../../redux/todos/selectors'
import { toggleFavorite, toggleEdit } from '../../redux/todos/actions'
import { editTodo } from '../../redux/todos/actions'
import { EditInput } from '../EditInput/EditInput'
import { asyncEditTodo } from '../../redux/todos/asyncActions'

export type TodoProps = {
  name: string,
  onMenuOpen: (e: React.MouseEvent<HTMLElement>) => void,
  id: string
}

export const Todo: React.FC<TodoProps> = ({name, onMenuOpen, id}) => {
  const todos = useSelector(selectTodos);
  const todo = todos[id]
  const dispatch: Dispatch<any> = useDispatch()
  const [editedTodo, setEditedTodo] = useState(todos[id].name)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTodo(e.target.value)
  }

  const handleEditDone = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {
      dispatch(editTodo({id: id, name: editedTodo}))
      dispatch(asyncEditTodo({id: id, name: editedTodo, completed: todo.isCompleted, favorite: todo.isFavorite, addDate: todo.addDate}))
      dispatch(toggleEdit(id));
    }
  }

  return (
    <div className="todo" data-testid="todo">
      {todo.isEdited
      ?<EditInput 
        editedTodo={editedTodo}
        handleEditDone={handleEditDone}
        handleChange={handleChange}
        />  
      : <p className={todo.isCompleted? 'completed todo-name' : "todo-name"}>{name}</p>}
      {todo.isFavorite? <img src={star} alt="" className="star-svg" onClick={e => dispatch(toggleFavorite(id))}/> : null}
      <img 
      src={menu} 
      alt='' 
      className='menu-btn'
      onClick={onMenuOpen}
      id={id}
      />
    </div>
  )
}