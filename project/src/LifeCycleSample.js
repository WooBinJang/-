import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };
  myRef = null;

  constructor(props) {
    // 생성자
    // 컴포넌트가 새로 만들어질 때마다 호출
    // 초기 state 설정
    super(props);
    console.log("constructor");
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    // props로 받아온 값을 state 로 동기화
    // 컴포넌트가 마운트될때와 업데이트될 때 호출
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    // 비동기 작업
    // 외부 라이브러리 연동: D3, masonry, etc
    // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
    // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
    console.log("componentDidMount");
    console.log(this.myRef.getBoundingClientRect());
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 컴포넌트를 최적화
    // Virtual DOM 랜더링 할지 결정  return false 하면 업데이트를 안함
    console.log("shouldComponentUpdate", nextProps, nextState);
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    // 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  getSnapshotBeforeUpdate(prevProps, prevState) {
    //  render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
    // return 값을 componentDidUpdate에서 세번째 파라미터인 snapshot 값으로 전달
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // 업데이트 된 렌더링 할 결과물이 렌더링 된 후 호출
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트 되기 전에 색상 : " + snapshot);
    }
  }
  render() {
    // UI 렌더링
    console.log("render");

    const style = {
      color: this.props.color,
    };
    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
