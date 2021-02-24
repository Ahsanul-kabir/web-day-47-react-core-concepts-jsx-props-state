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

     {/* 5. Component, 4 ways to identify a component = just previous module er gula repeat bolse code korai ni */}
      {/* 6 Create Component, return multiple HTML from a component */}
      <Person></Person>
      <Person></Person>
      {/* --- */}
      </header>
    </div>
  );
}

// 6 Create Component, return multiple HTML from a component
function Person(){
  const personStyle = {
    border: '2px solid yellow',
    margin: "10px"
  }
  return (
    <div style={personStyle}>
      <h1>Name: Sakib Al Hasan</h1>
      <h3>Hero of the year</h3>
    </div>
  )
}
// ---
export default App;
