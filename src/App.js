import './App.css';
// import Counter from './components/Counter';
import Base from './components/UI/Base';
import { useSelector } from 'react-redux';

function App() {
  const count = useSelector((c) => c.counter.value);
  return (
    <div className="App">
      <h2>{count}</h2>
      <Base />
      {/* <Counter/> */}
    </div>
  );
}

export default App;
