import { useState, useEffect } from "react";
import { TodoId, TodoName, Todo } from "../types/Todo";
import {
  createTodo,
  getTodoList,
  deleteTodo,
  updateTodo,
} from "../services/todo";

export const useTodos = (): {
  todoList: Todo[];
  error: string;
  handleCompleted: ({
    id,
    completed,
  }: {
    id: string;
    completed: boolean;
  }) => void;
  handleRemove: ({ id }: TodoId) => void;
  handleOnAddTodo: ({ name }: TodoName) => void;
} => {
  const [todoList, setTodoList] = useState([] as Todo[]);
  const [errorState, setErrorState] = useState("");

  useEffect(() => {
    async function fetchData() {
      const [error, todoListData] = await getTodoList();
      if (error) {
        console.error(error);
        setErrorState(error.message);
        return [];
      }
      if (todoListData) {
        setTodoList(todoListData);
      }
    }
    fetchData();
  }, []);

  const handleRemove = async ({ id }: TodoId) => {
    const [error] = await deleteTodo({ id });
    if (error) {
      console.error(error);
      setErrorState(error.message);
      return;
    }
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const handleCompleted = async ({
    id,
    completed,
  }: {
    id: string;
    completed: boolean;
  }) => {
    const [error] = await updateTodo(id, completed);
    if (error) {
      console.error(error);
      setErrorState(error.message);
      return;
    }
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: completed,
        };
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  const handleOnAddTodo = async ({ name }: TodoName) => {
    const newTodo = { name };
    const [error, todoCreated] = await createTodo(newTodo);
    if (error) {
      console.error(error);
      setErrorState(error.message);
      return;
    }
    if (todoCreated) {
      const newTodoList = [...todoList, todoCreated];
      setTodoList(newTodoList);
    }
  };

  return {
    handleCompleted,
    handleRemove,
    handleOnAddTodo,
    todoList: todoList,
    error: errorState,
  };
};
