import { Todo } from "./Todo";

export type CreateTodoType = Pick<Todo, "name">;
export type UpdateTodoBodyRequest = {
  newName?: string;
  newCompleted?: boolean;
};

export interface ErrorResponse {
  errorCode: ErrorCodesTypes;
  message: string;
}

export const ERROR_CODES = {
  ERROR_POST_VALIDATE: "ERROR_POST_VALIDATE",
  ERROR_PUT_VALIDATE: "ERROR_PUT_VALIDATE",
  ERROR_GET_TODOS: "ERROR_GET_TODOS",
  ERROR_POST_TODOS: "ERROR_POST_TODOS",
  ERROR_PUT_TODOS_NOT_FOUND: "ERROR_PUT_TODOS_NOT_FOUND",
  ERROR_PUT_TODOS: "ERROR_PUT_TODOS",
  ERROR_DELETE_TODOS_NOT_FOUND: "ERROR_DELETE_TODOS_NOT_FOUND",
  ERROR_DELETE_TODOS: "ERROR_DELETE_TODOS",
  UNKNOWN: "UNKNOW",
} as const;

export type ErrorCodesTypes = (typeof ERROR_CODES)[keyof typeof ERROR_CODES];
