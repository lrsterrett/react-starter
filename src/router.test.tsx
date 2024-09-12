import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import App from "./App";

vi.mock("./features/home/Home", () => ({
  default: () => <span>Home is working</span>,
}));

describe("Router", () => {
  it("should render the home screen when the path is /", async () => {
    render(<App />);
    await expect
      .poll(() => screen.getByText("Home is working"))
      .toBeInTheDocument();
  });
});
