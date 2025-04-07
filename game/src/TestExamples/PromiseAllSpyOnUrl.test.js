import React from "react";
import { render, screen } from "@testing-library/react";
import PromiseAll from "./PromiseAll";

describe("PromiseAllSpyOnURL Component", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("spyOn mockImplementation url", async () => {
    jest.spyOn(global, "fetch").mockImplementation((url) => {
      if (url.includes("posts")) {
        return Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve([
              { id: 1, title: "Post 1" },
              { id: 2, title: "Post 2" },
            ]),
        });
      } else if (url.includes("comments")) {
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

    render(<PromiseAll />);

    const post1Title = await screen.findByText(/Post 1/i);
    const post2Title = await screen.findByText(/Post 2/i);
    expect(post1Title).toBeInTheDocument();
    expect(post2Title).toBeInTheDocument();
    const comment1Body = await screen.findByText(/Comment 1/i);
    const comment2Body = await screen.findByText(/Comment 2/i);
    expect(comment1Body).toBeInTheDocument();
    expect(comment2Body).toBeInTheDocument();
  });

  it("save spyOn instance instead of overwrite", async () => {
    // save spyon instance instead of overwrite
    let mockFetch = jest.spyOn(global, "fetch");
    // first promise all
    mockFetch
      .mockImplementationOnce((url) => {
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
      })
      .mockImplementationOnce((url) => {
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
      })
      .mockImplementationOnce((url) => {
        if (url.includes("posts")) {
          return Promise.resolve({
            ok: true,
            json: () =>
              Promise.resolve([
                { id: 3, title: "Post 3" },
                { id: 4, title: "Post 4" },
              ]),
          });
        }
      })
      .mockImplementationOnce((url) => {
        if (url.includes("comments")) {
          return Promise.resolve({
            ok: true,
            json: () =>
              Promise.resolve([
                { id: 3, body: "Comment 3" },
                { id: 4, body: "Comment 4" },
              ]),
          });
        }
      });

    render(<PromiseAll />);

    const post1Title = await screen.findByText(/Post 1/i);
    const post2Title = await screen.findByText(/Post 2/i);
    expect(post1Title).toBeInTheDocument();
    expect(post2Title).toBeInTheDocument();
    const comment1Body = await screen.findByText(/Comment 1/i);
    const comment2Body = await screen.findByText(/Comment 2/i);
    expect(comment1Body).toBeInTheDocument();
    expect(comment2Body).toBeInTheDocument();

    // second call
    render(<PromiseAll />);

    const post3Title = await screen.findByText(/Post 3/i);
    const post4Title = await screen.findByText(/Post 4/i);
    expect(post3Title).toBeInTheDocument();
    expect(post4Title).toBeInTheDocument();
    const comment3Body = await screen.findByText(/Comment 3/i);
    const comment4Body = await screen.findByText(/Comment 4/i);
    expect(comment3Body).toBeInTheDocument();
    expect(comment4Body).toBeInTheDocument();
  });

  it("multiple global fetch mockImplementationOnce", async () => {
    // first promise all
    jest.spyOn(global, "fetch").mockImplementationOnce((url) => {
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
      return Promise.reject(new Error("Unknown URL"));
    });
    jest.spyOn(global, "fetch").mockImplementationOnce((url) => {
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

    // second promise all
    jest.spyOn(global, "fetch").mockImplementationOnce((url) => {
      if (url.includes("posts")) {
        return Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve([
              { id: 3, title: "Post 3" },
              { id: 4, title: "Post 4" },
            ]),
        });
      }
      return Promise.reject(new Error("Unknown URL"));
    });
    jest.spyOn(global, "fetch").mockImplementationOnce((url) => {
      if (url.includes("comments")) {
        return Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve([
              { id: 3, body: "Comment 3" },
              { id: 4, body: "Comment 4" },
            ]),
        });
      }
      return Promise.reject(new Error("Unknown URL"));
    });

    // first call
    render(<PromiseAll />);

    const post1Title = await screen.findByText(/Post 1/i);
    const post2Title = await screen.findByText(/Post 2/i);
    expect(post1Title).toBeInTheDocument();
    expect(post2Title).toBeInTheDocument();
    const comment1Body = await screen.findByText(/Comment 1/i);
    const comment2Body = await screen.findByText(/Comment 2/i);
    expect(comment1Body).toBeInTheDocument();
    expect(comment2Body).toBeInTheDocument();

    // second call
    render(<PromiseAll />);

    const post3Title = await screen.findByText(/Post 3/i);
    const post4Title = await screen.findByText(/Post 4/i);
    expect(post3Title).toBeInTheDocument();
    expect(post4Title).toBeInTheDocument();
    const comment3Body = await screen.findByText(/Comment 3/i);
    const comment4Body = await screen.findByText(/Comment 4/i);
    expect(comment3Body).toBeInTheDocument();
    expect(comment4Body).toBeInTheDocument();
  });
});
