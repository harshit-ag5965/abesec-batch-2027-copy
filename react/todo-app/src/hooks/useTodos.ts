import { useEffect, useState } from 'react';
import type { Todo } from '../types/todo';

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  async function fetchTodos() {
    const response = await fetch('http://localhost:8080/todos');
    const fetchedTodos: Todo[] = await response.json();
    setTodos(fetchedTodos);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = (todo: Omit<Todo, 'id'>) => {
    const newTodo: Todo = {
      ...todo,
      id: Date.now(),
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const updateTodo = (id: number, updatedTodo: Partial<Todo>) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo))
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
  };
}
