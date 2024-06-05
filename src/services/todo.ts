import {
  CreateTodoType,
  ERROR_CODES,
  ErrorResponse,
  UpdateTodoBodyRequest,
} from "../types/ApiTypesd";
import { Todo, TodoId } from "../types/Todo";

export const getTodoList = async (): Promise<[Error?, Todo[]?]> => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_TODO_APP_API_URL}/api/todos`
    );
    if (!res.ok) {
      const resKO: ErrorResponse = await res.json();
      return [new Error(resKO.errorCode)];
    }
    const json: Todo[] = await res.json();
    return [undefined, json];
  } catch (error) {
    if (error instanceof Error) return [error];
    return [new Error(ERROR_CODES.UNKNOWN)];
  }
};

export const createTodo = async (
  todo: CreateTodoType
): Promise<[Error?, Todo?]> => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_TODO_APP_API_URL}/api/todos`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      }
    );
    if (!res.ok) {
      const resKO: ErrorResponse = await res.json();
      return [new Error(resKO.errorCode)];
    }
    const json = await res.json();
    return [undefined, json];
  } catch (error) {
    if (error instanceof Error) return [error];
    return [new Error(ERROR_CODES.UNKNOWN)];
  }
};

export const updateTodo = async (
  id: string,
  newCompleted: boolean
  //   newName?: string
): Promise<[Error?, Todo?]> => {
  try {
    const newBody = {
      newCompleted: newCompleted,
    } as UpdateTodoBodyRequest;

    const res = await fetch(
      `${import.meta.env.VITE_TODO_APP_API_URL}/api/todos/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBody),
      }
    );
    if (!res.ok) {
      const resKO: ErrorResponse = await res.json();
      return [new Error(resKO.errorCode)];
    }
    return [undefined, res.status == 204 ? {} : await res.json()];
  } catch (error) {
    if (error instanceof Error) return [error];
    return [new Error(ERROR_CODES.UNKNOWN)];
  }
};

export const deleteTodo = async ({ id }: TodoId): Promise<[Error?, Todo?]> => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_TODO_APP_API_URL}/api/todos/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      const resKO: ErrorResponse = await res.json();
      return [new Error(resKO.errorCode)];
    }
    return [undefined, res.status == 204 ? {} : await res.json()];
  } catch (error) {
    if (error instanceof Error) return [error];
    return [new Error(ERROR_CODES.UNKNOWN)];
  }
};
