import React, { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    console.log(this.box);
    const { scrollHeight, clientHeight } = this.box; // 비구조화 할당
    // scrollHeight : 스크롤이 있는 박스 안의 div 높이
    // clientHeight : 스크롤이 이쓴 박스의 높이
    // scrollTop :새로 스크롤 바의 위치
    this.box.scrollTop = scrollHeight - clientHeight; //스크롤바 맨 아래쪽 좌표
  };
  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      positon: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white ,black)",
    };

    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
          //this.box는 div 요소의 DOM 가르킨다.
        }}
      >
        <div style={innerStyle}></div>
      </div>
    );
  }
}

export default ScrollBox;

/* 

ref
컴포넌트 내부에서 DOM에 직접 접근해야 할 때 사용한다.
ref는 전역적으로 작동하지 않으며 컴포넌트 내부에서만 작동한다.
d는 유일성을 가지므로 재사용성이 요구되는 컴포넌트 성격과 맞지 않으므로 ref 를 시용한다.

DOM을 꼭 사용해야 하는 상황
state를 사용만으로 해결할 수 없는 기능이 있다
- 특정 input에 포커스
- 스크롤 박스 조작
- Canvas 요소에 그림 그리기 등
DOM 직접적으로 접근해야 한다, 이를 위해 ref를 사용한디

*/
