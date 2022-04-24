import React, { useState } from "react";
import styled from "styled-components";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);
  const clickedToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <ToggleBox>
        <ClickBox toggle={toggle} />
        <ToggleBtn
          onClick={() => {
            clickedToggle(true);
          }}
          toggle={toggle}
        >
          기본
        </ToggleBtn>
        <ToggleBtn
          onClick={() => {
            clickedToggle(false);
          }}
          toggle={!toggle}
        >
          상세
        </ToggleBtn>
      </ToggleBox>
    </>
  );
};

const ToggleBox = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 300px;
  height: 35px;
  background-color: #d3d3d3;
  border: red;
  border-radius: 20px;
`;

const ClickBox = styled.div`
  position: absolute;
  left: 2px;

  height: calc(100% - 3px);
  width: calc(50% - 2px);

  border-radius: 15px;
  background-color: #fff;

  transform: ${(props) => (props.toggle ? "translateX(0%)" : "translateX(100%)")};
  transition: all 0.2s linear;
  z-index: 1;
`;

const ToggleBtn = styled.button`
  width: 50%;
  height: 100%;

  background-color: transparent;
  border: none;

  color: ${(props) => (props.toggle ? "#5D5D5D" : "#8C8C8C")};
  font-weight: bold;

  z-index: 5;
  cursor: pointer;
`;

export default Toggle;
