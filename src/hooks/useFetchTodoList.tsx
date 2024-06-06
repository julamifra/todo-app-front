import { useEffect, useState } from "react";
import { getTodoList } from "../services/todoService";
import { Todo } from "../types/Todo";

export const useFetchTodoList = () => {
  const [todoList, setTodoList] = useState([] as Todo[]);
  const [errorState, setErrorState] = useState("");

  useEffect(() => {
    async function fetchData() {
      const [error, todoListData] = await getTodoList();
      if (error) {
        setErrorState(error.message);
        return [];
      }
      if (todoListData) {
        setTodoList(todoListData);
      }
    }
    fetchData();
  }, []);

  return {
    todoList,
    errorState,
    setTodoList,
    setErrorState,
  };
};
