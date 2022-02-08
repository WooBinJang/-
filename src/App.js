import { Component } from "react";
import Mycomponent from "./Mycomponent";

class App extends Component {
  render() {
    const name = "react";
    return <Mycomponent name={name}>리액트</Mycomponent>;
  }
}
export default App;

/* 
클래스형 컴포넌트
state 기능 및 라이프사이클 기능을 사용 할 수 있다.
임의 메서드를 사용 할 수 있다.
*/
