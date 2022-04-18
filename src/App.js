import Input from "./components/Input";
import Slider from "./components/Slider";
import Tap from "./components/Tab";
import Toggle from "./components/Toggle";

function App() {
  return (
    <div className="App">
      <Toggle />
      <hr style={{ margin: "20px 0" }} />
      <Tap />
      <hr style={{ margin: "20px 0" }} />
      {/* <Slider /> */}
      <hr style={{ margin: "20px 0" }} />
      <Input />
    </div>
  );
}

export default App;
