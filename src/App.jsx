import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Button from './components/Button'

function App() {

  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    todo.length > 0 && setTodoList([...todoList, todo]);
    setTodo('');
  };

  const clearList = () => {
    setTodoList([]);
  }

  return (
    <>
      <Header text="Todo List"></Header>
      <main>
        <aside>
            <input type="text" value={todo} placeholder="Type your todo task here..." onChange={(el) => setTodo(el.target.value)}/>
            <Button onClick={addTodo}>Add</Button>
        </aside>
        <div>
            <List list={todoList} clearList={clearList}/>
        </div>
      </main>
    </>
  )
}

export default App
