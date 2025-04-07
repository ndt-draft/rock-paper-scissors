import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import SimpleFetch from "./SimpleFetch";

global.fetch = jest.fn();

describe("SimpleFetch", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render posts when the fetch is successful", async () => {
    const mockPosts = ["Post 1", "Post 2"];
    fetch.mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockPosts),
    });

    const url = "https://api.example.com/posts";
    render(<SimpleFetch url={url} />);

    await waitFor(() => {
      expect(screen.getByText("Post 1")).toBeInTheDocument();
    });

    const post2Title = await screen.getByText("Post 2");
    expect(post2Title).toBeInTheDocument();

    expect(fetch).toHaveBeenCalledWith(url);
  });

  it("should render an error message when the response is not ok", async () => {
    fetch.mockResolvedValue({
      ok: false,
      status: 404,
    });

    const url = "https://api.example.com/posts";
    render(<SimpleFetch url={url} />);

    await waitFor(() => {
      expect(
        screen.getByText("Error: HTTP error! status: 404")
      ).toBeInTheDocument();
    });

    expect(fetch).toHaveBeenCalledWith(url);
  });

  it("should render an error message when fetch fails", async () => {
    fetch.mockRejectedValue(new Error("Network error"));

    const url = "https://api.example.com/posts";
    render(<SimpleFetch url={url} />);

    await waitFor(() => {
      expect(screen.getByText("Error: Network error")).toBeInTheDocument();
    });

    expect(fetch).toHaveBeenCalledWith(url);
  });
});
