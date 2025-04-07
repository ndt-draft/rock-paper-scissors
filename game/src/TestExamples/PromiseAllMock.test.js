import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import PromiseAll from "./PromiseAll";
import { fetchPosts, fetchComments } from "./api";

jest.mock("./api", () => ({
  fetchPosts: jest.fn(),
  fetchComments: jest.fn(),
}));

describe("PromiseAll Component", () => {
  it("renders posts and comments correctly", async () => {
    // Mock API responses
    fetchPosts.mockResolvedValue([
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" },
    ]);
    fetchComments.mockResolvedValue([
      { id: 1, body: "Comment 1" },
      { id: 2, body: "Comment 2" },
    ]);

    // Render the component
    render(<PromiseAll />);

    // Wait for posts and comments to appear
    await waitFor(() => {
      expect(screen.getByText("Post 1")).toBeInTheDocument();
      expect(screen.getByText("Post 2")).toBeInTheDocument();
      expect(screen.getByText("Comment 1")).toBeInTheDocument();
      expect(screen.getByText("Comment 2")).toBeInTheDocument();
    });
  });
});
