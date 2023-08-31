import React, { useState } from "react";
import { data } from "../data"; // Importa los datos desde el archivo data.js

export const ProductList = ({
    allProducts,
    setAllProducts,
    countProducts,
    setCountProducts,
    total,
    setTotal,
}) => {
    const [quantityInput, setQuantityInput] = useState("1");

    const onAddProduct = (product, quantity) => {
        if (quantity > 0) {
            const updatedProduct = { ...product, quantity: quantity };
            const products = allProducts.concat(updatedProduct);

            setTotal(total + product.price * quantity);
            setCountProducts(countProducts + quantity);
            setAllProducts(products);
        }
    };

    return (
        <div className='container-items'>
            {data.map(product => (
                <div className='item' key={product.id}>
                    <figure>
                        <img src={product.img} alt={product.title} />
                    </figure>
                    <div className='info-product'>
                        <h2>{product.title}</h2>
                        <h2>Precio</h2>
                        <p className='price'>${product.price}</p>
                        <h2>Categoria</h2>
                        <p className="categoria">{product.categoria}</p>
                        <h2>Descripcion</h2>
                        <p className="descripcion">{product.descripcion}</p>
                        <h3>Cantidad</h3>
                        <input
                            name="cantidad"
                            type="number"
                            min="1"
                            value={quantityInput}
                            onChange={e => setQuantityInput(e.target.value)}
                        />
                        <button onClick={() => onAddProduct(product, parseInt(quantityInput))}>
                            Añadir al carrito
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};
