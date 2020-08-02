import React from 'react';


const Product = ({ product, car, addToCar, products }) => {

    const { name, price, id } = product

    //agrega producto al carrito
    const selectProduct = id => {
        const product = products.filter(product => (product.id === id))[0];
        addToCar([
            ...car,
            product
        ])
    }
    //elimina producto del carrito

    const deleteProduct = id=>{
        const products=car.filter(product => product.id !==id)

        //colocar productos en el state
        addToCar(products)
    }

    return (
        <div>
            <h2>{name}</h2>
            <p>{price}</p>

            {products
                ?
                (
                    <button
                        type="button"
                        onClick={() => selectProduct(id)}
                    >Comprar</button>
                )
                :
                (
                    <button
                    type="button"
                    onClick={() => deleteProduct(id)}
                    >Eliminar</button>
                )

            }


        </div>

    );
}

export default Product;