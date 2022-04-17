import React, { useState } from "react";
import styled from "styled-components";

const Tap = () => {
  const [toggle, setToggle] = useState("potato");
  const clickedToggle = (status) => {
    setToggle(status);
  };
  return (
    <>
      <TabBox>
        <ClickBox toggle={toggle} />
        <ToggleBtn
          onClick={() => {
            clickedToggle("potato");
          }}
          toggle={toggle === "potato"}
        >
          감자
        </ToggleBtn>
        <ToggleBtn
          onClick={() => {
            clickedToggle("sweet");
          }}
          toggle={toggle === "sweet"}
        >
          고구마
        </ToggleBtn>
        <ToggleBtn
          onClick={() => {
            clickedToggle("curry");
          }}
          toggle={toggle === "curry"}
        >
          카레라이스
        </ToggleBtn>
      </TabBox>
    </>
  );
};

const TabBox = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;

  width: 420px;
  height: 30px;

  border-bottom: 1.5px solid #bdbdbd;
`;

const ClickBox = styled.div`
  position: absolute;
  width: 140px;
  height: 100%;
  border-bottom: 1.5px solid #3db7cc;

  transform: ${(props) => (props.toggle === "potato" ? "translateX(0%)" : props.toggle === "sweet" ? "translateX(140px)" : "translateX(280px)")};
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
export default Tap;
