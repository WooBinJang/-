import { Component } from "react";
import Counter from "./Counter";
import EventPractice from "./EventPractice";
import EventPractice_fnc from "./EventPractice_fnc";
import Mycomponent from "./Mycomponent";
import Say from "./Say";

class App extends Component {
  render() {
    return <EventPractice_fnc />;
  }
}
export default App;

/* 
클래스형 컴포넌트
state 기능 및 라이프사이클 기능을 사용 할 수 있다.
임의 메서드를 사용 할 수 있다.
*/
