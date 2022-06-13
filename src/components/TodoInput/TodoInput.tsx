import './TodoInput.css'
import React, { Dispatch, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/todos/actions'
import { SymbolTracker } from '../SymbolTracker/SymbolTracker'
import { MAX_TODO_LENGTH } from '../../util/constants'
import { asyncAddTodo } from '../../redux/todos/asyncActions'

export const TodoInput: React.FC = () => {
  const [ todo, setTodo ] = useState("") 
  const dispatch: Dispatch<any> = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  }

  const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && todo.length <= MAX_TODO_LENGTH) {
      let newId = (+new Date()).toString();
      let addDate = (new Date()).toDateString()
      dispatch(addTodo({id: newId, name: todo, addDate}));
      dispatch(asyncAddTodo({id: newId, name: todo, addDate }));
      setTodo("");
    }
  }

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(todo.length <= MAX_TODO_LENGTH) {
      let newId = (+new Date()).toString();
      console.log(newId);
      dispatch(addTodo({id: newId, name: todo}));
      dispatch(asyncAddTodo({id: newId, name: todo })); 
      setTodo("")
    }
  }

  return (
    <div className='todo-input-block'>
      <div className="todo-input">
        <input 
        value={todo} 
        onChange={handleChange} 
        onKeyPress={keyPressHandler}
        type="text"
        >
        </input>
        <button 
          className="add-btn" 
          type="button"
          onClick={handleAdd}
        > Добавить
        </button>
      </div>
      <SymbolTracker len={todo.length} limit={MAX_TODO_LENGTH}/>
    </div>
  )
}
