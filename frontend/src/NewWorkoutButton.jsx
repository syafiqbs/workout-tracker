import React from "react";

const NewWorkoutButton = ({ setModalState }) => {
  return (
    <>
      <button
        data-testid="new-workout-button"
        onClick={() => setModalState(true)}
      >
        New Workout
      </button>
    </>
  );
};

export default NewWorkoutButton;
