import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Button from './components/Button'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

function App() {

  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  const addTodo = () => {
    todo.length > 0 && setTodoList([...todoList, todo])
    setTodo('');
  };

  return (
    <>
      <Header text="Todo List"></Header>
      <main>
        <aside>
            <input type="text" value={todo} placeholder="Type your todo task here..." onChange={(el) => setTodo(el.target.value)}/>
            <Button onClick={addTodo}>Add</Button>
        </aside>
        <div>
            <List list={todoList} />
        </div>
      </main>
    </>
  )
}

export default App
