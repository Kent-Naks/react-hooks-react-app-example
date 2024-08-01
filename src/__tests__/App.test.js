// src/__tests__/App.test.js
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { format } from "date-fns";
import App from "../components/App";

beforeEach(() => {
  render(<App />);
});

test('should include "Now" in the header instead of a time', () => {
  // Check that the formatted current time is not in the document
  expect(
    screen.queryByText(format(new Date(), "MMMM do yyyy, h:mm:ss a"))
  ).not.toBeInTheDocument();
  
  // Check that "Now" is in the document
  expect(screen.queryByText(/Now/g)).toBeInTheDocument();
});

test("should include the <ExampleComponent />", () => {
  // Check that "Whoa!" is in the document
  expect(screen.queryByText("Whoa!")).toBeInTheDocument();
});

test("should include the <TestComponent />", () => {
  // Check that TestComponent with title "time video" is in the document
  expect(screen.queryByTitle("time video")).toBeInTheDocument();
});

