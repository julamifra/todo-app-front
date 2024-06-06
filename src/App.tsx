import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header";
import { useHandleTodos } from "./hooks/useHandleTodos";
import { HandleTodoContext } from "./context/HandleTodoContext";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const {
    todoList,
    error,
    handleCompleted,
    handleRemove,
    handleEditName,
    handleOnAddTodo,
  } = useHandleTodos();

  return (
    <>
      <Header onAddTodo={handleOnAddTodo}></Header>
      {error ? (
        <ErrorMessage error={error} />
      ) : (
        <HandleTodoContext.Provider
          value={{ handleRemove, handleCompleted, handleEditName }}
        >
          <TodoList todoList={todoList} />
        </HandleTodoContext.Provider>
      )}
    </>
  );
}

export default App;
