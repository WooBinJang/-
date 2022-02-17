import React, { useCallback, useMemo, useRef, useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산중 ...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);
  const onChange = useCallback((e) => {
    // useCallback() :첫번째 파라미터에는 생성하고 싶은 함수, 두번째 파라미터에는 배열
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
      inputEl.current.focus();
      // useRef 사용하여 ref를 설정하면 useRef를 통해 만든 객체안의 current 값이 실제 엘리먼트를 가리킴
    },
    [number, list]
  );

  const avg = useMemo(() => getAverage(list), [list]);
  // useMemo() : 렌더링하는 과정에서 특정 값(list)이 바뀌었을 때만 연산을 실행
  // 함수형 컴포넌트 내부에서 발생하는 연산을 최적화
  //useMemo 사용하지 않을경우 input에 값이 바뀔때 마다 함수가 실해되어 성능을 낮춘다.
  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      <div>
        <b>평균값 :</b> {avg}
      </div>
    </div>
  );
};

export default Average;

/*
숫자, 문자열, 객체처럼 일반 값을 재사용하려면 -> useMemo
함수를 재사용하려면 -> useCallback
*/
