import React from "react";

const NewWorkoutForm = () => {
  return (
    <div
      data-testid="new-workout-form"
      style={{
        marginBottom: "20px",
      }}
    >
      <form>
        <label>
          Date:
          <input type="date" />
        </label>
        <label>
          Workout:
          <input type="text" />
        </label>
        <label>
          Duration:
          <input type="number" />
        </label>
        <button>Save</button>
      </form>
    </div>
  );
};

export default NewWorkoutForm;
