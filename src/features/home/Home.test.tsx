import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./Home";
import TestProviders from "../../test-utils/TestProviders";

describe("Home Component", () => {
  it("should render the welcome message", async () => {
    render(
      <TestProviders>
        <Home />
      </TestProviders>
    );
    expect
      .poll(() => screen.getByText("Welcome, ", { exact: false }))
      .toBeInTheDocument();
  });
});
