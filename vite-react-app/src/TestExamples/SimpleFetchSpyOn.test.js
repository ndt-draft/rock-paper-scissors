import React from "react";
import { render, screen } from "@testing-library/react";
import SimpleFetch from "./SimpleFetch";

describe("SimpleFetch Component", () => {
  afterEach(() => {
    // Restore the original fetch implementation
    jest.restoreAllMocks();
  });

  it("renders mocked posts correctly", async () => {
    // Mock the fetch function
    jest.spyOn(global, "fetch").mockImplementationOnce(async () => ({
      ok: true,
      json: async () => ["Mock Post 1", "Mock Post 2"],
    }));

    render(<SimpleFetch url="https://example.com/api/posts" />);

    // Wait for the mocked posts to appear
    const items = await screen.findAllByRole("listitem");
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent("Mock Post 1");
    expect(items[1]).toHaveTextContent("Mock Post 2");
  });

  it("renders error message on fetch failure", async () => {
    // Mock the fetch function to simulate an error
    jest.spyOn(global, "fetch").mockImplementationOnce(async () => {
      throw new Error("Fetch failed");
    });

    render(<SimpleFetch url="https://example.com/api/posts" />);

    // Wait for the error message to appear
    const errorMessage = await screen.findByText(/Error: Fetch failed/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
