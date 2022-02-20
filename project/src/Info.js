import React, { useEffect, useReducer } from "react";

function reducer(state, action) {
  return {
    ...state, //불변성을 지키면서 업데이트한 새로운 상태를 반환
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  //useState 보다 더 다양한 컴포넌트 상황에 따른 다양한 상태를 다른 값으로 업데이트해 주고 싶을 때 사용하는 Hook

  const { name, nickname } = state;
  useEffect(() => {
    //리액트 컴포넌트가 렌더링 될때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
    console.log("effect");
    return () => {
      console.log("unmount");
      // 컴포넌트가 언마운트 되기 전이나 업데이트 직전
      // useEffect에서 뒷정리 함수(cleanup)
    };
  }, []); // 빈 배열 일 경우 마운트될 떄만 실행

  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("clean up");
      console.log(name);
    };
  }, [name]);

  const onChange = (e) => {
    dispatch(e.target); // 액션값으로 e.target 값 자체를 사용 (useReducer에서의 액션은 그 어떤 값도 사용 가능)
  };

  return (
    <div>
      <input name="name" type="text" value={name} onChange={onChange} />
      <input name="nickname" type="text" value={nickname} onChange={onChange} />
      <div>
        <b>이름 : </b> {name}
      </div>
      <div>
        <b>닉네임 : </b> {nickname}
      </div>
    </div>
  );
};

export default Info;
