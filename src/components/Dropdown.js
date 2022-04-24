import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../image/arrow.svg";

const Dropdown = () => {
  const list = [
    "ACHUSD.PERP",
    "BTCUSD.PERP",
    "ETHUSD.PERP",
    "BCHUSD.PERP",
    "LTCUSD.PERP",
    "XRPUSD.PERP",
    "DFAUSD.PERP",
    "AWOUSD.PERP",
    "DOGEUSD.PERP",
    "WEMIXUSD.PERP",
  ];
  const [category, setCategory] = useState("");
  const [active, setActive] = useState(false); // select 활성화 여부
  const [searchTerm, setSearchterm] = useState("");
  const [targetList, setTargetList] = useState(list);
  // 드롭박스 - 라벨을 클릭시 옵션 목록이 열림/닫힘
  const selectClick = () => {
    setActive(!active);
  };
  const optionClick = (e) => {
    setCategory(e.target.innerText);
    setActive(!active);
  };

  const searchList = (e) => {
    setSearchterm(e.target.value);
  };

  return (
    <>
      <Box>
        <Select className={active ? "active" : category ? "ok" : ""}>
          <Arrow />
          <button
            className="label"
            onClick={() => {
              selectClick();
            }}
          >
            {category ? category : "All Symbols"}
          </button>
          <ul className="optionList" id={active ? "active" : ""}>
            <input onChange={searchList}></input>
            <li className="optionItem" onClick={optionClick}>
              All Symbols
            </li>
            {list
              .filter((el) => {
                if (searchTerm.includes(" ")) {
                  return el;
                } else if (el.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return el;
                }
              })
              .map((el) => (
                <li key={el} className="optionItem" onClick={optionClick}>
                  {el}
                </li>
              ))}
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
  width: 250px;
  padding: 8px 0;
  border: 1px solid grey;
  border-radius: 4px;
  outline: none;
  svg {
    position: absolute;
    top: 12px;
    right: 3px;
    width: 15px;
  }

  input {
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid grey;
    padding-bottom: 6px;
  }

  &.active {
    outline: none;
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
    top: 22px;
    left: 0;
    width: 100%;
    background: #fff;
    box-shadow: 0 4px 8px 0 rgba(3, 1, 2, 0.08);
    border: 1px solid grey;
    border-radius: 4px;
    overflow: hidden;
    transition: 0.2s ease-in;
    opacity: 0;
    padding: 6px 0;
    z-index: 10;
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
