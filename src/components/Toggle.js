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
  justify-content: space-between;

  width: 300px;
  height: 30px;
  background-color: #d3d3d3;
  border-radius: 15px;
`;

const ClickBox = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  border: none;
  border-radius: 15px;
  background-color: #fff;
  transform: ${(props) => (props.toggle ? "translateX(0%)" : "translateX(100%)")};
  transition: all 0.35s linear;
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
