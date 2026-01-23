import { render, screen } from "@testing-library/react";
import { expect, test, vi, describe } from "vitest";
import "@testing-library/jest-dom";
import BreakfastCheckbox from "./BreakfastCheckbox";

describe("Breakfast checkbox", () => {
  test("should render correctly", () => {
    render(<BreakfastCheckbox isChecked={false} onCheck={vi.fn()} />);

    const checkbox = screen.getByText("Breakfast Menu");
    expect(checkbox).toBeInTheDocument();
  });

  test("should toggle breakfast menu", () => {
    const mockOnCheck = vi.fn();

    render(<BreakfastCheckbox isChecked={false} onCheck={mockOnCheck} />);

    screen.getByText("Breakfast Menu").click();
    expect(mockOnCheck).toHaveBeenCalledWith(true);
  });
});
