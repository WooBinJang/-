import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    error: false,
  };
  componentDidCatch(error, info) {
    // 컴포넌트 렌더링 도중에 에러가 발생시 오류 UI 표시
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }
  render() {
    if (this.state.error) return <div>에러가 발생했습니다.</div>;
    return this.props.children;
  }
}

export default ErrorBoundary;
