import logo from './logo.svg';
import './App.css';
import Left from './components/Left';
import Right from './components/Right';

function App() {
  const x = 12;
  const y = 13;
  const result = x + y;
  const name = "Root Benji";
  return (
    <div className="App">
      <Left result={result} name={name}/>
      <Right result={result} />
    </div>
  );
}

export default App;
