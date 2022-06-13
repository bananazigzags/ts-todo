import React from 'react'
import "./SymbolTracker.css"

export type SymbolTrackerProps = {
  len: number,
  limit: number
}

export const SymbolTracker: React.FC<SymbolTrackerProps> = ({len, limit}) => {
  return (len > limit) 
  ? <span className="message warning">
    Превышен лимит текста задачи на {len - limit} символов
    </span> 
  : null
}