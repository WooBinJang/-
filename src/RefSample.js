import React, { useRef } from "react";

const RefSample = () => {
  // 컴포넌트 로컬 변수를 사용할 때에도 useRef 활용가능
  // 로컬 변수란?
  // 렌더링과 상관없이 바뀔수 있는 값을 의미
  // ref 안의 값이 바뀌어도 컴포넌트가 렌더링되지 않음
  //렌더링과 관련되지 않은 값을 관리할 때만 이러한 방식
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  };
  const printId = () => {
    console.log(printId);
  };
  return <div>refSample</div>;
};

export default RefSample;
