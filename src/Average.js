import React, { useCallback, useMemo, useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산중 ...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const onChange = useCallback((e) => {
    // useCallback() :첫번째 파라미터에는 생성하고 싶은 함수, 두번째 파라미터에는 배열
    setNumber(e.target.value);
  }, []);
  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
    },
    [number, list]
  );

  const avg = useMemo(() => getAverage(list), [list]);
  // useMemo() : 렌더링하는 과정에서 특정 값(list)이 바뀌었을 때만 연산을 실행
  // 함수형 컴포넌트 내부에서 발생하는 연산을 최적화
  return (
    <div>
      <input value={number} onChange={onChange} />
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
