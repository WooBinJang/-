import { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";
import LifeCycleSample from "./LifeCycleSample";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}
export default App;

/* 
클래스형 컴포넌트
state 기능 및 라이프사이클 기능을 사용 할 수 있다.
임의 메서드를 사용 할 수 있다.
*/
