import React, { useState } from "react";
import Average from "./Average";
import Counter_fnc from "./Counter_fnc";
import Info from "./Info";
import InfoCustomhook from "./InfoCustomhook";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기 " : "보이기"}
      </button>
      <hr />
      {visible && <InfoCustomhook />}
      <Counter_fnc />
      <Average />
    </div>
  );
};

export default App;
