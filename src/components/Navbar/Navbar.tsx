import './Navbar.css'
import { useSelector, useDispatch } from 'react-redux'
import { selectFilter } from '../../redux/filter/selectors'
import { toggleFilter } from '../../redux/filter/actions'

export const Navbar: React.FC = () => {
  const filter = useSelector(selectFilter)
  const dispatch = useDispatch()

  const handleFilter = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(toggleFilter((e.target as HTMLInputElement).id))
  }

  return (
    <div className="navbar">
      <h1>ДЕЛА</h1>
      <ul className='filters'>
        <li className={filter === 'pending' ? 'active' : undefined} id='pending' onClick={handleFilter}>
          В работе
        </li>
        <li className={filter === 'favorites' ? 'active' : undefined} id='favorites' onClick={handleFilter}>
          Избранные
        </li>
        <li className={filter === 'completed' ? 'active' : undefined} id='completed' onClick={handleFilter}>
          Выполненные
        </li>
      </ul>
    </div>
  )
}