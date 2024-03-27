import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import NewWorkoutButton from "./NewWorkoutButton";
import NewWorkoutForm from "./NewWorkoutForm";

function App() {
  const [modalState, setModalState] = useState(false);

  return (
    <div className="App">
      <div
        style={{
          width: "75%",
          marginLeft: "auto",
          marginRight: "auto",
          border: "1px solid black",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ marginRight: "10px" }}>Workout Tracker</h1>
          {!modalState && (
            <NewWorkoutButton
              modalState={modalState}
              setModalState={setModalState}
            />
          )}
        </div>

        {modalState && <NewWorkoutForm />}
      </div>
    </div>
  );
}

export default App;
