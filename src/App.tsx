import './App.css';
import { Dispatch, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navbar } from './components/Navbar/Navbar';
import { TodoInput } from './components/TodoInput/TodoInput';
import { TodoList } from './components/TodoList/TodoList';
import { fetchTodos } from './redux/todos/asyncActions';

export const App: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch()
  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <div className="App">
      <Navbar />
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
