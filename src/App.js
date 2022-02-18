import React, { useState } from "react";

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
    </div>
  );
};

export default App;
