import PropTypes from "prop-types";
const Mycomponent = ({ name, children }) => {
  // const { name, children } = props; // 비구조화 할당 문법
  return (
    <div>
      <h1>안녕 {name}</h1>
      <h2>{children}</h2>
    </div>
  );
};

// props 기본값 설정
Mycomponent.defaultProps = {
  name: "기본이름",
};

// props 타입 설정
Mycomponent.propTypes = {
  name: PropTypes.string,
};

export default Mycomponent;
// 모듈 내보내기
