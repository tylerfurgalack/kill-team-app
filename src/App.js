import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <div className="appContainer">
      <div>
        <h2 className="displayText">Command Points</h2>
        <Counter />
      </div>
      <div className="displayText">Image will go here</div>
      <div>
        <h2 className="displayText">Victory Points</h2>
        <Counter />
      </div>
    </div>
  );
}

export default App;
