import React from "react";
import styled from "styled-components";

const Slider = () => {
  return (
    <>
      <ValueBox>36%</ValueBox>
    </>
  );
};

const ValueBox = styled.div`
  width: 300px;
  height: 35px;
  border: 1px solid #bdbdbd;
  border-radius: 3px;
`;

export default Slider;
