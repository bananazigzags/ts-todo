import './Modal.css'
import { useSelector, useDispatch } from 'react-redux'
import { selectTodos } from '../../redux/todos/selectors'
import { toggleFavorite, toggleCompleted, toggleEdit } from '../../redux/todos/actions'
import React from 'react'

export type ModalProps = {
  id: string,
  onClose: () => void,
  openConfirm: () => void
}

export const Modal: React.FC<ModalProps> = ({id, onClose, openConfirm}) => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch()
  const todo = todos[id];

  const handleToggleFavorite = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(toggleFavorite(id));
    onClose();
  }

  const handleToggleCompleted = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(toggleCompleted(id));
    onClose();
  }

  const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
    openConfirm();
    onClose();
  }

  const handleEdit = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(toggleEdit(id));
    onClose();
  }

  return (
    <div className='modal-backdrop' onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
      <div className='close-btn-wrapper'><button className='close-btn' onClick={onClose}>X</button></div>
      <p 
      className="modal-msg"
      onClick={handleToggleFavorite}
      >{todo.isFavorite ? 'Убрать из избранного' : 'В избранное'}
      </p>
      <p 
        className="modal-msg"
        onClick={handleToggleCompleted}
      >{todo.isCompleted ? 'Вернуть в работу':'Выполнено'}</p>
      <p className="modal-msg" onClick={handleEdit}>Редактировать</p>
      <p className="modal-msg" onClick={handleDelete}>Удалить</p>
    </div>
    </div>
    
  ) 
}