import styled from "styled-components";
import Dropdown from "./components/Dropdown";
import Input from "./components/Input";
import Slider from "./components/Slider";
import Tap from "./components/Tab";
import Toggle from "./components/Toggle";

function App() {
  return (
    <Container>
      <Box>
        <Title>Toggle</Title>
        <Toggle />
      </Box>
      <Box>
        <Title>Tap</Title>
        <Tap />
      </Box>
      <Box>
        <Title>Slider</Title>
        {/* <Slider /> */}
      </Box>

      <Box>
        <Title>Input</Title>
        <Input />
      </Box>
      <Box>
        <Title>Dropdown</Title>
        <Dropdown />
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
  margin: 20px;
`;

const Title = styled.p`
  text-align: center;
`;

export default App;
