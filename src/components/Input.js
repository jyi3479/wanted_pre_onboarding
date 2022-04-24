import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Check } from "../image/check.svg";
import { ReactComponent as Visible } from "../image/visible.svg";
import { ReactComponent as Invisible } from "../image/noneVisible.svg";

const Input = () => {
  const [isEmail, setIsEmail] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isPrivate, setIsPrivate] = useState(true);
  const clickedPrivate = () => {
    setIsPrivate(!isPrivate);
  };

  const checkedEmail = (email) => {
    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    return regExp.test(email);
  };

  const blurEmailChecked = (e) => {
    setIsError(!checkedEmail(e.target.value));
    if (!e.target.value) {
      setIsError(false);
    }
  };

  const changeEmailChecked = (e) => {
    setIsEmail(checkedEmail(e.target.value));
    if (!e.target.value) {
      setIsError(false);
    }
  };

  return (
    <>
      <InputBox>
        <Label>E-mail</Label>
        <InputField placeholder="E-mail" onBlur={blurEmailChecked} onChange={changeEmailChecked}></InputField>
        <IconBox isEmail={isEmail}>
          <Check />
        </IconBox>
        {isError && <Warning>Invalid e-mail address.</Warning>}
      </InputBox>

      <InputBox>
        <Label>password</Label>
        <InputField placeholder="password" type={isPrivate ? "password" : ""} />
        <IconBox onClick={clickedPrivate}>{isPrivate ? <Invisible className="invisible" /> : <Visible className="visible" />}</IconBox>
      </InputBox>
    </>
  );
};

const InputBox = styled.div`
  position: relative;

  margin-bottom: 20px;
`;

const Label = styled.p`
  font-size: 10px;
  margin: 2px;
  color: #5d5d5d;
`;

const InputField = styled.input`
  width: 230px;
  height: 25px;

  padding-left: 5px;

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

const Warning = styled.p`
  position: absolute;
  bottom: -23px;

  font-size: 10px;
  color: red;
`;

const IconBox = styled.div`
  position: absolute;
  right: 5px;
  bottom: 0px;

  svg {
    width: 15px;
    ${(props) => (props.isEmail ? `fill: #008299;` : `fill: #ccc;`)}
  }

  .invisible {
    fill: #000000;
  }
  .visible {
    fill: #008299;
  }

  cursor: pointer;
`;

export default Input;
