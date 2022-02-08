import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  /* ReactDOM.render(페이지에 렌더링 할 내용 , 렌더링 할  document 내부 요소 설정) : 컴포넌트를 페이지에 렌더링하는 역할 */
  <React.StrictMode>
    {/*  <React.StrictMode> : 리액트의 레거시 기능들을 사용하지 못하게 하는 기능 */}
    <App />
  </React.StrictMode>,
  document.getElementById("root") /* public/index 에 있는 <div> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
