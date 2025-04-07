import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import PromiseAll from "./PromiseAll";
import * as api from "./api";

describe("PromiseAll Component with spyOn", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders posts and comments correctly using spyOn", async () => {
    // Spy on API methods and mock their resolved values
    const fetchPostsSpy = jest.spyOn(api, "fetchPosts").mockResolvedValue([
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" },
    ]);
    const fetchCommentsSpy = jest
      .spyOn(api, "fetchComments")
      .mockResolvedValue([
        { id: 1, body: "Comment 1" },
        { id: 2, body: "Comment 2" },
      ]);

    // Render the component
    render(<PromiseAll />);

    // Wait for posts and comments to appear
    await waitFor(() => {
      expect(
        screen.getByText((content) => content.includes("Post 1"))
      ).toBeInTheDocument();
      expect(
        screen.getByText((content) => content.includes("Post 2"))
      ).toBeInTheDocument();
      expect(
        screen.getByText((content) => content.includes("Comment 1"))
      ).toBeInTheDocument();
      expect(
        screen.getByText((content) => content.includes("Comment 2"))
      ).toBeInTheDocument();
    });

    // Ensure the spies were called
    expect(fetchPostsSpy).toHaveBeenCalledTimes(1);
    expect(fetchCommentsSpy).toHaveBeenCalledTimes(1);

    // Restore the original implementations
    fetchPostsSpy.mockRestore();
    fetchCommentsSpy.mockRestore();
  });

  it("renders posts and comments correctly using global fetch spyOn", async () => {
    // Spy on global fetch and mock its resolved values
    const fetchSpy = jest.spyOn(global, "fetch").mockImplementation((url) => {
      if (url.includes("posts")) {
        return Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve([
              { id: 1, title: "Post 1" },
              { id: 2, title: "Post 2" },
            ]),
        });
      }
      if (url.includes("comments")) {
        return Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve([
              { id: 1, body: "Comment 1" },
              { id: 2, body: "Comment 2" },
            ]),
        });
      }
      return Promise.reject(new Error("Unknown URL"));
    });

    // Render the component
    render(<PromiseAll />);

    // Wait for posts and comments to appear
    await waitFor(() => {
      expect(
        screen.getByText((content) => content.includes("Post 1"))
      ).toBeInTheDocument();
      expect(
        screen.getByText((content) => content.includes("Post 2"))
      ).toBeInTheDocument();
      expect(
        screen.getByText((content) => content.includes("Comment 1"))
      ).toBeInTheDocument();
      expect(
        screen.getByText((content) => content.includes("Comment 2"))
      ).toBeInTheDocument();
    });

    // Ensure the fetch spy was called
    expect(fetchSpy).toHaveBeenCalledTimes(2);

    // Restore the original implementation
    fetchSpy.mockRestore();
  });
});
