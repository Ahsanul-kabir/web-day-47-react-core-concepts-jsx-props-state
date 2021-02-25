import logo from './logo.svg';
import './App.css';

function App() {
  {/* 7. Pass dynamic data to components, props in react */ }
  const nayoks = ['Azmol', 'Manna'];

  // 8. Pass object to components and access object
  const products = [{ name: 'Photoshop', price: '$90.99' }, { name: 'Illustrator', price: '$85.99' }
  ];


  return (
    <div className="App">
      <header className="App-header">
      {/* 8. Pass object to components and access object */}
        {/* <Prodect name={products[0].name} price = {products[0].price}></Prodect> */}
        <Prodect product={products[0]}></Prodect>
        <Prodect product={products[1]}></Prodect>


        {/* 7. Pass dynamic data to components, props in react */}
        <Person nayok="Rebel" Naika="Mousumi"></Person>
        <Person nayok={nayoks[1]} Naika="Sabnur"></Person>
        {/* --- */}
      </header>
    </div>
  );
}

// 8. Pass object to components and access object
function Prodect(props) {
  const ProdectStyle = {
    border: "1px solid gray",
    borderRadius: '5px',
    backgroundColor: 'lightorange',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  // array desttucturing
  const {name, price} = props.product;

  return (
    <div style={ProdectStyle}>
      {/* <h3>{props.product.name}</h3> */}
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
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
