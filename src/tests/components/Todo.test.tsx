import {
  test,
  expect,
  describe,
  vi,
  afterEach,
  beforeEach,
  Mock,
} from "vitest";
import {
  RenderResult,
  cleanup,
  fireEvent,
  render,
} from "@testing-library/react";
import Todo from "../../components/Todo";
import { HandleTodoContext } from "../../context/HandleTodoContext";

afterEach(cleanup);

describe("Testing Todo component", () => {
  const mockTodoProp = {
    id: "1",
    name: "mock name",
    completed: false,
  };

  let handleCompletedMock: Mock;
  let handleRemoveMock: Mock;
  let rendComponent: RenderResult;

  beforeEach(() => {
    handleCompletedMock = vi.fn();
    handleRemoveMock = vi.fn();
    rendComponent = render(
      <HandleTodoContext.Provider
        value={{
          handleCompleted: handleCompletedMock,
          handleRemove: handleRemoveMock,
        }}
      >
        <Todo {...mockTodoProp} />
      </HandleTodoContext.Provider>
    );
  });

  test("component is defined", () => {
    expect(rendComponent).toBeDefined();
  });

  test("renders content", () => {
    rendComponent.getByText(mockTodoProp.name);
  });

  test("clicking the checkbox calls event handler once", () => {
    expect(rendComponent).toBeDefined();

    const checkbox = rendComponent.getByRole("checkbox");
    expect(checkbox).toBeDefined();

    fireEvent.click(checkbox);
    expect(handleCompletedMock).toHaveBeenCalledTimes(1);
  });

  test("clicking the button calls event handler once", () => {
    expect(rendComponent).toBeDefined();

    const button = rendComponent.getByRole("button");
    expect(button).toBeDefined();

    fireEvent.click(button);

    expect(handleRemoveMock).toHaveBeenCalledWith({ id: mockTodoProp.id });
  });

  test("clicking the button, the label is crossed out", () => {});
});
