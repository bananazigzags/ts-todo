import './EditInput.css'
import React, { useRef, useEffect } from "react"
import { SymbolTracker } from '../SymbolTracker/SymbolTracker'
import { MAX_TODO_LENGTH } from '../../util/constants'

export type EditInputProps = {
  editedTodo: string,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>)=> void,
  handleEditDone: Function
}

export const EditInput = ({
  editedTodo, 
  handleChange,
  handleEditDone, 
}: EditInputProps) => {

  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if(inputRef.current) {
      inputRef && inputRef.current.focus()
    }
  }, [])

  const handleEditInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(editedTodo.length <= MAX_TODO_LENGTH) {
      handleEditDone(e);
    }
  }

  return (
    <div className='edit-input-wrapper'>
      <input 
        id="edit-input"
        type="textarea"
        className='edit-input'
        value={editedTodo}
        onChange={handleChange}
        onKeyPress={handleEditInput}
        ref={inputRef}
    ></input>
    <SymbolTracker len={editedTodo.length} limit={MAX_TODO_LENGTH}/>
    </div>
  )
}