import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import Car from './components/Car';



function App() {

//listado de productos
const [products, setProducts]=useState([
  {id:1, name: 'Camisa ReactJS', price:50},
  {id:2, name: 'Camisa NodeJS', price:40},
  {id:3, name: 'Camisa VueJS', price:30},
  {id:4, name: 'Camisa AngularJS', price:20}
]);


//state para un carro de compras

const [car, addToCar]=useState([]);


//obteniendo la fecha para el footer
 const date = new Date().getFullYear();

  return (
      <Fragment>
        <Header
          title='Tienda Virtual'
        />
          <h1>Lista de productos</h1>
          {products.map(product=>(
              <Product
                key ={product.id}
                products={products}
                product={product}
                car={car}
                addToCar={addToCar}
              />
          ))}

        <Car
         car={car}
         addToCar={addToCar}
        />
        <Footer
         date ={date}
        />
     </Fragment>
  );
}

export default App;
