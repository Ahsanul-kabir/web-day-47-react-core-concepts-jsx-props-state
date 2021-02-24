import logo from './logo.svg';
import './App.css';

function App() {
  {/* 4. JSX, Dynamic content, Dynamic Style in React */}
  const name = "Dr. Mahfuz";
  const person = {
    name : "Hasan",
    age : 20
  }
  var style = {
    color:'red',
    backgroundColor:'yellow'
  }
  {/* --- */}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* 4. JSX, Dynamic content, Dynamic Style in React */}
        <h2 className ="" style={style} >My heading {(2+3)*25+65}</h2>
        <h2 style={{backgroundColor: 'grey' , color:'yellow'}}>Doctor name : {name}</h2>
        <h2>Person's {person.name + " " + person.age}</h2>
        <p>My first paragrapraph</p>
      {/* ----- */}
      </header>
    </div>
  );
}

export default App;
