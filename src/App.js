import styled from "styled-components";
import Dropdown from "./components/Dropdown";
import Input from "./components/Input";
import Slider from "./components/Slider";
import Tab from "./components/Tab";
import Toggle from "./components/Toggle";

function App() {
  return (
    <Container>
      <Box>
        <Title>Dropdown</Title>
        <Dropdown />
      </Box>
      <Box>
        <Title>Toggle</Title>
        <Toggle />
      </Box>
      <Box>
        <Title>Tab</Title>
        <Tab />
      </Box>
      <Box>
        <Title>Slider</Title>
        <Slider />
      </Box>

      <Box>
        <Title>Input</Title>
        <Input />
      </Box>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled.div`
  margin: 10px;
  padding: 10px;
`;

const Title = styled.p`
  text-align: center;
`;

export default App;
