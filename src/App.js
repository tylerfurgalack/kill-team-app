import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <div className="appContainer">
      <div>
        <h2 className="displayText">Command Points</h2>
        <Counter />
      </div>
      <img className="imageContainer" alt="Kill Team Logo"/>
      <div>
        <h2 className="displayText">Victory Points</h2>
        <Counter />
      </div>
    </div>
  );
}

export default App;
