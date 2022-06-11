import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div className='appContainer'>
      <h2>Command Points</h2>
    <Counter />
      <h2>Victory Points</h2>
      <Counter />
    </div>
  );
}

export default App;
