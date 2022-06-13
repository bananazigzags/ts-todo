import './ConfirmModal.css'
import { useSelector, useDispatch } from 'react-redux'
import { selectTodos } from '../../redux/todos/selectors'
import { deleteTodo } from '../../redux/todos/actions'
import React, { Dispatch } from 'react'
import { asyncDeleteTodo } from '../../redux/todos/asyncActions'

export type ConfirmModalProps = {
  id: string,
  onClose: (e: React.MouseEvent<HTMLElement>) => void
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({id, onClose}) => {
  const dispatch: Dispatch<any> = useDispatch()
  const todos = useSelector(selectTodos);

  const handleConfirmDelete = () => {
    dispatch(deleteTodo(id))
    dispatch(asyncDeleteTodo(id))
  }

  return (
    <div className='confirm-modal-backdrop' onClick={onClose}>
      <div className="confirm-modal-container">
      <button onClick={onClose} className="x-btn">X</button>
      <p className="confirm-modal-msg">Вы действительно хотите удалить задачу?</p>
      <p>Задача: {todos[id].name}</p>
      <p>Создана: {todos[id].addDate}</p>
      <div className='confirm-btn-wrapper'>
        <button onClick={handleConfirmDelete} 
        className="confirm-btn">Да, удалить</button>
        <button onClick={onClose} className="confirm-btn">Отмена</button>
      </div>
    </div>
    </div>
  ) 
}