import { render, screen } from "@testing-library/react";
import { expect, test, vi, describe } from "vitest";
import "@testing-library/jest-dom";
import VegetarianCheckbox from "./VegetarianCheckbox";

describe("Vegetarian checkbox", () => {
  test("should render correctly", () => {
    render(<VegetarianCheckbox isChecked={false} onCheck={vi.fn()} />);

    const checkbox = screen.getByText("Vegetarian");
    expect(checkbox).toBeInTheDocument();
  });

  test("should toggle vegetarian menu", () => {
    const mockOnCheck = vi.fn();

    render(<VegetarianCheckbox isChecked={false} onCheck={mockOnCheck} />);

    screen.getByText("Vegetarian").click();
    expect(mockOnCheck).toHaveBeenCalledWith(true);
  });
});
