import React from "react";
import useInputs from "./useInputs";

const InfoCustomhook = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
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

export default InfoCustomhook;
