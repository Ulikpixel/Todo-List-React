import logo from './logo.svg';
import s from './App.module.css';
import Todolist from './components/TodoList/todolist';


function App() {
  return (
    <div className={s.app}>
      <Todolist />
    </div>
  );
} 

export default App;
