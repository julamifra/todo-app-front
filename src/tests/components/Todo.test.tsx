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
  let handleEditNameMock: Mock;
  let rendComponent: RenderResult;

  beforeEach(() => {
    handleCompletedMock = vi.fn();
    handleRemoveMock = vi.fn();
    rendComponent = render(
      <HandleTodoContext.Provider
        value={{
          handleCompleted: handleCompletedMock,
          handleRemove: handleRemoveMock,
          handleEditName: handleEditNameMock,
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
    const checkbox = rendComponent.getByRole("checkbox");
    expect(checkbox).toBeDefined();

    fireEvent.click(checkbox);
    expect(handleCompletedMock).toHaveBeenCalledTimes(1);
  });

  test("clicking the button calls event handler once", () => {
    const button = rendComponent.getByRole("button");
    expect(button).toBeDefined();

    fireEvent.click(button);

    expect(handleRemoveMock).toHaveBeenCalledWith({ id: mockTodoProp.id });
  });

  test("doubleClinking the label, the checkbox dissapears", () => {
    const label = rendComponent.getByText(mockTodoProp.name);
    expect(label).toBeDefined();
    fireEvent.dblClick(label);
    const checkbox = rendComponent.container.querySelector(
      'input[type="checkbox"]'
    );
    expect(checkbox).toBeNull();
  });

  test("doubleClinking the label, an input appears", () => {
    const label = rendComponent.getByText(mockTodoProp.name);
    expect(label).toBeDefined();

    fireEvent.dblClick(label);
    rendComponent.getByRole("textbox");
  });
});
