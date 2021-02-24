import logo from './logo.svg';
import './App.css';

function App() {
  {/* 7. Pass dynamic data to components, props in react */}
  const nayoks = ['Azmol', 'Manna'];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/* 7. Pass dynamic data to components, props in react */}
        <Person nayok="Rebel" Naika="Mousumi"></Person>
        <Person nayok={nayoks[1]} Naika="Sabnur"></Person>
        {/* --- */}
      </header>
    </div>
  );
}

// 7. Pass dynamic data to components, props in react
function Person(props) {
  const personStyle = {
    border: '2px solid yellow',
    margin: "10px"
  }
  return (
    <div style={personStyle}>
      <h1>Nayok: {props.nayok}</h1>
      <h3>Hero of {props.Naika}</h3>
    </div>
  )
}
// ---
export default App;
