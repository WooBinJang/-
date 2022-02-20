import React, { Component } from "react";
import "./VaildationSample.css";

class VaildationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  input = React.createRef();
  // 리액트에 내장된 createRef를 통한 ref 설정

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.input.current.focus();
    // 콜백함수와 다른점 -> 뒷부분에 .current를 넣어줌
  };

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          ref={this.input}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default VaildationSample;
