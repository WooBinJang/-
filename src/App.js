import { Component } from "react";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        {/* 
        리액트에서 컴포넌트에도 ref를 달 수 있디.
        컴포넌트 내부에 있는 DOM을 컴포넌트 외부에서 사용할 뗴 쓴다.
        */}
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          {/* 
          내부의 메서드 및 멤버 변수에도 접근이 가능하다.
          */}
          맨 밑으로
        </button>
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
