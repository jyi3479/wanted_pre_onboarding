import React, { useState } from "react";
import styled from "styled-components";

const Slider = () => {
  const [value, setValue] = useState(1);
  const valueList = [1, 25, 50, 75, 100];

  return (
    <Container>
      <ValueBox>
        <span>{value} %</span>
      </ValueBox>
      <Bar>
        {valueList.map((el) => (
          <Circle key={el} isFull={value > el} />
        ))}
        <TargetBar
          type="range"
          value={value}
          min="1"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </Bar>
      <ButtonBox>
        {valueList.map((el) => (
          <button
            key={el}
            onClick={() => {
              setValue(el);
            }}
          >
            {el}%
          </button>
        ))}
      </ButtonBox>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
`;

const ValueBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;

  width: 100%;
  height: 35px;

  border: 1px solid #bdbdbd;
  border-radius: 3px;

  span {
    margin-right: 10px;
  }
`;

const Bar = styled.div`
  position: relative;
  background: #bdbdbd;
  width: 100%;
  height: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px auto;
`;

const Circle = styled.div`
  ${(props) => (props.isFull ? `background: blue;` : `background: #bdbdbd;`)}

  height: 15px;
  width: 15px;
  border-radius: 50%;
`;

const TargetBar = styled.input`
  -webkit-appearance: none;
  position: absolute;
  width: 100%;
  height: 8px;
  border-radius: 8px;
  margin: 10px auto;
  background: #bdbdbd;

  background: linear-gradient(to right, blue 0%, blue ${(props) => props.value}%, #bdbdbd ${(props) => props.value}%, #bdbdbd 100%);

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid white;
    background: blue;
    box-shadow: 1px 1px 7px grey;
    cursor: pointer;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    width: 30px;
    border: none;
    border-radius: 5px;

    padding: 3px;

    font-size: 10px;
    text-align: center;

    cursor: pointer;
  }
`;

export default Slider;
