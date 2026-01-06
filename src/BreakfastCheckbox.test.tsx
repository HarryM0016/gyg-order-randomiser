import { useState } from "react";
import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import "@testing-library/jest-dom";
import BreakfastCheckbox from "./BreakfastCheckbox";

test("breakfast checkbox renders correctly", () => {
  render(<BreakfastCheckbox isChecked={false} onCheck={vi.fn()} />);

  const checkbox = screen.getByText("Breakfast Menu");
  expect(checkbox).toBeInTheDocument();
});

test("breakfast checkbox toggles vegetarian menu", () => {
  const mockOnCheck = vi.fn();

  render(<BreakfastCheckbox isChecked={false} onCheck={mockOnCheck} />);

  screen.getByText("Breakfast Menu").click();
  expect(mockOnCheck).toHaveBeenCalledWith(true);
});
