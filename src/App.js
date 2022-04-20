import Dropdown from "./components/Dropdown";
import Input from "./components/Input";
import Slider from "./components/Slider";
import Tap from "./components/Tab";
import Toggle from "./components/Toggle";

function App() {
  return (
    <div className="App">
      <Toggle />

      <Tap />

      {/* <Slider /> */}

      <Input />
      <hr />
      <Dropdown />
    </div>
  );
}

export default App;
