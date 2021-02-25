import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const nayoks = ['Razzak', 'Azmol', 'Manna'];
  const products = [{ name: 'Photoshop', price: '$90.99' }, { name: 'Illustrator', price: '$85.99' },
  { name: 'PDF Reader', price: '$7.99' }];

  return (
    <div className="App">
      <header className="App-header">

        <Counter></Counter>
        <ul>
          {
            nayoks.map(nk => <li>{nk}</li>)
          }

          {
            products.map(pd => <li>{pd.name}</li>)
          }
        </ul>

          {
            products.map(pd => <Prodect product={pd}></Prodect>)
          }
      </header>
    </div>
  );
}

function Prodect(props) {
  const ProdectStyle = {
    border: "1px solid gray",
    borderRadius: '5px',
    backgroundColor: 'orange',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  // array desttucturing
  const { name, price } = props.product;

  return (
    <div style={ProdectStyle}>
      {/* <h3>{props.product.name}</h3> */}
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  return(
    <div>
      <h1>Count: {count}</h1>

      {/* Apply Event Handler */}
      <button onClick={handleIncrease}>Increase</button>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}
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

export default App;
