import { render, screen } from "@testing-library/react";
import { expect } from "vitest"; // Correctly import expect from vitest
import "@testing-library/jest-dom"; // Import jest-dom for extended matchers
import TestVitestExamples from "./TestVitestExamples";

describe("TestVitestExamples Component", () => {
  it("renders the heading and paragraph", () => {
    render(<TestVitestExamples />);
    expect(screen.getByText("Test Vitest Examples")).toBeInTheDocument();
    expect(
      screen.getByText("This is a simple component for testing purposes.")
    ).toBeInTheDocument();
  });
});
