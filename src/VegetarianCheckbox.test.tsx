import { useState } from "react";
import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import "@testing-library/jest-dom";
import VegetarianCheckbox from "./VegetarianCheckbox";

test("vegetarian checkbox renders correctly", () => {
  render(<VegetarianCheckbox isChecked={false} onCheck={vi.fn()} />);

  const checkbox = screen.getByText("Vegetarian");
  expect(checkbox).toBeInTheDocument();
});

test("vegetarian checkbox toggles vegetarian menu", () => {
  const mockOnCheck = vi.fn();

  render(<VegetarianCheckbox isChecked={false} onCheck={mockOnCheck} />);

  screen.getByText("Vegetarian").click();
  expect(mockOnCheck).toHaveBeenCalledWith(true);
});
