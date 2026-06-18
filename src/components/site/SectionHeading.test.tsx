import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { SectionHeading } from "./SectionHeading";

test("renders heading and subtitle", () => {
  render(<SectionHeading eyebrow="Test Eyebrow" title="Test Title" subtitle="Test Subtitle" />);

  expect(screen.getByText("Test Eyebrow")).toBeInTheDocument();
  expect(screen.getByText("Test Title")).toBeInTheDocument();
  expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
});
