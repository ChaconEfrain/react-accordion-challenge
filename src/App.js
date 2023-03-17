import useMultipleExpansion from "./hooks/useMultipleExpansion";
import Accordion from "./components/Accordion";
import { sections } from "./mocks/sections";
import "./App.css";

function App() {
  const { allowMultipleExpansion, toggleMultipleExpansion } =
    useMultipleExpansion();
  return (
    <div className="App">
      <Accordion
        sections={sections}
        allowMultipleExpansion={allowMultipleExpansion}
      />
      <button onClick={toggleMultipleExpansion} style={{ cursor: "pointer" }}>
        Toggle multiple expansion
      </button>
    </div>
  );
}

export default App;
