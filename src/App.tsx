import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header";
import { useTodos } from "./hooks/useTodos";
import { HandleTodoContext } from "./context/HandleTodoContext";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const { todoList, error, handleCompleted, handleRemove, handleOnAddTodo } =
    useTodos();
  return (
    <>
      <Header onAddTodo={handleOnAddTodo}></Header>
      {error ? (
        <ErrorMessage error={error} />
      ) : (
        <HandleTodoContext.Provider value={{ handleRemove, handleCompleted }}>
          <TodoList todoList={todoList} />
        </HandleTodoContext.Provider>
      )}
    </>
  );
}

export default App;
