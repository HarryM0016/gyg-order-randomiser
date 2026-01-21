import { render, screen } from "@testing-library/react";
import { expect, test, vi, describe } from "vitest";
import "@testing-library/jest-dom";
import MealCheckbox from "./MealCheckbox";

describe("Meal checkbox", () => {
  test("should render correctly", () => {
    render(<MealCheckbox isChecked={false} onCheck={vi.fn()} />);

    const checkbox = screen.getByText("Make it a Meal");
    expect(checkbox).toBeInTheDocument();
  });

  test("should toggle main menu", () => {
    const mockOnCheck = vi.fn();

    render(<MealCheckbox isChecked={false} onCheck={mockOnCheck} />);

    screen.getByText("Make it a Meal").click();
    expect(mockOnCheck).toHaveBeenCalledWith(true);
  });
});
