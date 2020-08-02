import React from 'react';
import './car.css';
import Product from './Product';



const Car = ({car, addToCar}) => (
    <div className="car">
        <h2>Carrito de compras</h2>
        {car.length===0
         
         ?
          <p>No hay elementos</p>

         :
         car.map(product=>(
            <Product
                key={product.id}
                product={product}
                car={car}
                addToCar={addToCar}
            />
        ))
        
        }
    </div>
)
 
export default Car;
