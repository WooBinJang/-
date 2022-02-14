import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECRMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter_fnc = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  //첫번째 파라미터에는 리듀서 함수, 두번째 파라미터에는 해당 리듀서의 기본값을 넣어줌
  // state는 현재 가리키고 있는상태
  //  dispatch는 액션을 발생시키는 함수
  return (
    <div>
      <p>
        현재 카운터 값은 : <b>{state.value}</b>
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECRMENT" })}>-1</button>
    </div>
  );
};

export default Counter_fnc;
