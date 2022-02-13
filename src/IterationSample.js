import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 0, text: "눈사람" },
    { id: 1, text: "얼음" },
    { id: 2, text: "눈" },
    { id: 3, text: "바람" },
    { id: 4, text: "겨울" },
  ]);
  const [inputText, setInpiutText] = useState("");
  const [nextId, setNextId] = useState(5);
  const nameList = names.map((name) => (
    // 배열 객체의 내장 함수인 map 함수를 사용하여 반복되는 컴포넌트를 렌더링
    // 불변성 유지가 필요
    // 상태를 업데이트할 때는 기존 상태를 그대로 두면서 새로운 값을 상태로 설정하는 것 -> 리액트 컴포넌트의 성능을 최적화 할 수 있음
    <li
      key={name.id}
      // 컴포넌트 배열을 렌더링 했을떄 어떤 원소에 변동이 있었는지 알아내려고 사용
      // key 값을 사용한다면 어떤변화가 일어나는지 더욱 빠르게 알아낼수 있다
      //key 값은 언제나 유일
      //데이터가 가진 고유의 값을 key 값으로 설정
      onDoubleClick={() => {
        onRemove(name.id);
      }}
    >
      {name.text}
    </li>
  ));

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    // 배열의 내장 함수 filter 사용(불변성을 유지하면서 배열의 특정 항목을 지울수 있다)
    setNames(nextNames);
  };

  const onChange = (e) => {
    setInpiutText(e.target.value);
  };
  const onClick = () => {
    const nextNames = names.concat({ id: nextId, text: inputText });
    //concat 새로운 배열 복사 (기본 배열은 유지)                                                                                                                                                                                                                                                                                     변경되지 않는다)
    setNextId(nextId + 1);
    setNames(nextNames);
    setInpiutText("");
  };
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
