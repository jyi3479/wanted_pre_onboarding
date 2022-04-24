import React, { useState } from "react";
import styled from "styled-components";

const Tab = () => {
  const [tab, setTab] = useState("potato");
  const clickedTab = (status) => {
    setTab(status);
  };
  return (
    <>
      <TabBox>
        <ClickBox tab={tab} />
        <TabBtn
          onClick={() => {
            clickedTab("potato");
          }}
          tab={tab === "potato"}
        >
          감자
        </TabBtn>
        <TabBtn
          onClick={() => {
            clickedTab("sweet");
          }}
          tab={tab === "sweet"}
        >
          고구마
        </TabBtn>
        <TabBtn
          onClick={() => {
            clickedTab("curry");
          }}
          tab={tab === "curry"}
        >
          카레라이스
        </TabBtn>
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

  border-bottom: 2px solid #bdbdbd;
`;

const ClickBox = styled.div`
  position: absolute;
  width: 140px;
  height: 100%;
  border-bottom: 2px solid #3db7cc;

  transform: ${(props) => (props.tab === "potato" ? "translateX(0%)" : props.tab === "sweet" ? "translateX(140px)" : "translateX(280px)")};
  transition: all 0.2s linear;
`;

const TabBtn = styled.button`
  width: 50%;
  height: 100%;

  background-color: transparent;
  border: none;

  color: ${(props) => (props.tab ? "#5D5D5D" : "#8C8C8C")};
  font-weight: bold;

  cursor: pointer;
`;
export default Tab;
