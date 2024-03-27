import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Workout Tracker heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/Workout Tracker/i);
  expect(headingElement).toBeInTheDocument();
});

test("renders NewWorkoutButton when modalState is false", () => {
  render(<App />);
  const newWorkoutButtonElement = screen.getByTestId("new-workout-button");
  expect(newWorkoutButtonElement).toBeInTheDocument();
});
