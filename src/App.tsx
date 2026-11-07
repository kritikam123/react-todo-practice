import { useState } from 'react'
import type { Todo } from "./types/todo";
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'

export default function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: text,
      completed: false,

    };
    setTodos([...todos, newTodo]);
  }

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    );
  };

  const deleteTodo = (id:string) => {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
  }

  const editTodo = (id: string, newText: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, text: newText }
          : todo
      )
    );
  };
  

  return (
    <div>
      <h1>
        My Todo List
      </h1>

      <TodoForm onAdd={addTodo} />

      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} onEdit={editTodo} />
    </div>
  );
}

