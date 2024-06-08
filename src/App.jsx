import { useState, createContext } from 'react'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'
export const TodoContext = createContext()

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ])

  const toggleCompleted = (id, completed) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: completed };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };

  console.log(todos)

  const addTodo = (todoTitle) => {
    if (todoTitle === '') {
      return
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    }

    const updatedTodos = todos.concat(newTodo)
    setTodos(updatedTodos)
  }

  return (
    <TodoContext.Provider value={{ toggleCompleted, deleteTodo }}>
      <div className='bgImage'>
        <div className='flex justify-center items-center my-10'>
          <div className='w-full max-w-md min-h-screen'>
            <h1 className='font-bold text-4xl text-center mb-4 text-white'>My Todo List</h1>
            <TodoForm addTodo={addTodo} />
            <Todos todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />
          </div>
        </div>
      </div>
    </TodoContext.Provider>
  )
}


export default App