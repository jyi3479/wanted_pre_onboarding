import React from "react";
import styled from "styled-components";

const Dropdown = () => {
  const [category, setCategory] = React.useState("");
  const [active, setActive] = React.useState(false); // select 활성화 여부
  // 드롭박스 - 라벨을 클릭시 옵션 목록이 열림/닫힘
  const selectClick = () => {
    setActive(!active);
  };
  const optionClick = (e) => {
    setCategory(e.target.innerText);
    setActive(!active);
  };

  return (
    <>
      <Box>
        <Select className={active ? "active" : category ? "ok" : ""}>
          <button
            className="label"
            onClick={() => {
              selectClick();
            }}
          >
            All Symbols
          </button>
          <ul className="optionList" id={active ? "active" : ""}>
            <li className="optionItem" onClick={optionClick}>
              1
            </li>
            <li className="optionItem" onClick={optionClick}>
              2
            </li>
          </ul>
        </Select>
      </Box>
    </>
  );
};

const Box = styled.div`
  padding: 0;
  margin: 0 0 28px;
  display: flex;
  overflow: revert;
`;

const Select = styled.div`
  position: relative;
  width: 100%;
  padding: 8px 0;
  border: none;
  border-bottom: 1px solid rgba(124, 130, 136, 0.5);
  outline: none;
  img {
    position: absolute;
    top: 8px;
    right: 0;
    width: 16px;
  }

  &.active {
    outline: none;
    border-bottom: 1px solid #4149d3;
    .label {
      color: rgba(124, 130, 136, 1);
    }
    img {
      transform: rotate(180deg);
    }
  }

  &.ok {
    border-bottom: 1px solid #7c8288;
    .label {
      color: #030102;
    }
  }
  .label {
    display: flex;
    align-items: center;
    width: 100%;
    height: inherit;
    border: 0 none;
    outline: 0 none;
    background: transparent;
    font-size: 14px !important;
    color: rgba(124, 130, 136, 0.5);
    cursor: pointer;
  }
  .optionList {
    transform: scaleY(0);
    transform-origin: 0px 0px;
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    height: 300px;
    background: #fff;
    box-shadow: 0 4px 8px 0 rgba(3, 1, 2, 0.08);
    border-radius: 4px;
    overflow: hidden;
    transition: 0.2s ease-in;
    opacity: 0;
    padding: 6px 0;
    z-index: 2;
    > li {
      font-size: 12px;
      padding: 9px 10px;
      color: #030102;
      line-height: 14px;
      cursor: pointer;
      :hover {
        background-color: rgba(162, 170, 179, 0.2);
      }
    }
    &#active {
      transform: scaleY(1);
      opacity: 1;
    }
  }
`;

export default Dropdown;
