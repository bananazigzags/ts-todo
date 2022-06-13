import './TodoList.css'
import { useState } from 'react'
import { Todo } from '../Todo/Todo'
import { Modal } from '../Modal/Modal'
import { ConfirmModal } from '../ConfirmModal.js/ConfirmModal'
import { useSelector } from 'react-redux'
import { selectTodos } from '../../redux/todos/selectors'
import { selectFilter } from '../../redux/filter/selectors'

export const TodoList: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenConfirm, setIsOpenConfirm] = useState(false)
  const [openTodoId, setOpenTodoId] = useState("");
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);

  const filteredTodos = {...todos}
  if (Object.keys(todos).length > 0) {
    for(let todo in todos) {
      if(filter === "pending" && todos[todo].isCompleted) {
          delete filteredTodos[todo]
      } else if (filter === "favorites" && !todos[todo].isFavorite) {
          delete filteredTodos[todo]
      } else if (filter === "completed" 
      && !todos[todo].isCompleted) {
          delete filteredTodos[todo]
      }
    }
  }

  const handleClose = () => {
    setIsOpen(false);
  }

  const handleCloseConfirm = () => {
    setIsOpenConfirm(false);
  }

  const handleOpenConfirm = () => {
    setIsOpenConfirm(true);
  }

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    setIsOpen(true)
    setOpenTodoId((e.target as HTMLInputElement).id)
  }
  const todosList = [] 
  for (let todo in filteredTodos) {
    todosList.push(
    <Todo 
      key={todo} 
      name={filteredTodos[todo].name} 
      id={todo} 
      onMenuOpen={handleOpen}
    />)
  }

  return (
    <div className='todos'>
      {Object.keys(todos).length > 0 && todosList}
      {isOpen && <Modal id={openTodoId} onClose={handleClose} openConfirm={handleOpenConfirm}/>}
      {isOpenConfirm && <ConfirmModal id={openTodoId} onClose={handleCloseConfirm}/>}
    </div>
  )
}