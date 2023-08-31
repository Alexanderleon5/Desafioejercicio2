import React from "react";
import {data} from "../data";
export const ProductList = ({

    allProducts,
    setAllProducts,
    countProducts,
    setCountProducts,
    total,
    setTotal,
}) => {
    const onAddProduct = product => {
        if (allProducts.find(item => item.id === product.id)) {
            const products = allProducts.map(item =>

                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setTotal(total + product.price * product.quantity);
            setCountProducts(countProducts + product.quantity);
            return setAllProducts([...products]);
        }
        setTotal(total + product.price * product.quantity);
        setCountProducts(countProducts + product.quantity);
        setAllProducts([...allProducts, product]);
    };
    return (
        <div className='container-items'>
            {data.map(product => (
                <div className='item' key={product.id}>
                    <figure>
                        <img src={product.img} alt={product.title} />
                    </figure>
                    <div className='info-product'>
                        <h2>{product.nameProduct}</h2>
                       
                        <h2 className="titulo">{product.title}</h2>
                        <h2>Precio</h2>
                        <p className='price'>${product.price}</p>
                        <h2>Categoria</h2>
                        <p className="categoria">{product.categoria}</p>
                        <h2>Descripcion</h2>
                        <p className="descripcion">{product.descripcion}</p>
                        <button onClick={() => onAddProduct(product)}>
                            Añadir al carrito
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};