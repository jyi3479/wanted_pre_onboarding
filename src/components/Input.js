import React, { useState } from "react";
import styled from "styled-components";

const Input = () => {
  const [isPrivate, setIsPrivate] = useState(false);
  const clickedPrivate = () => {
    setIsPrivate(!isPrivate);
  };

  const checkedEmail = (e) => {
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // 형식에 맞는 경우 true 리턴
    console.log("이메일 유효성 검사 :: ", regExp.test(e.target.value));
  };

  return (
    <>
      <InputBox>
        <Label>E-mail</Label>
        <InputField placeholder="E-mail" onBlur={checkedEmail} />
        {/* <Icon>@@</Icon> */}
      </InputBox>
      <InputBox>
        <Label>password</Label>
        <InputField placeholder="password" type={isPrivate ? "password" : ""} />
        <button onClick={clickedPrivate}>보여주기</button>
      </InputBox>
    </>
  );
};

const InputBox = styled.div``;

const Label = styled.p`
  font-size: 10px;
  margin: 2px;
  color: #5d5d5d;
`;

const InputField = styled.input`
  //position: absolute;

  width: 230px;
  height: 25px;

  border: 1px solid #bdbdbd;
  border-radius: 3px;
  &:focus {
    outline: none;
    border: 1px solid #000000;
  }

  &::placeholder {
    color: rgba(124, 130, 136, 0.5);
  }
`;

const Icon = styled.span`
  position: relative;
  width: 5px;
  right: 0;
`;

export default Input;