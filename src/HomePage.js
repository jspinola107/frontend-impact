import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

const baseUrl = process.env.BACKURL || 'http://localhost:8080'

const HomePage = ({ props }) => {

const history = useHistory();
const [selectedProducts, _setSelectedProducts] = useState([])
const [selectedQuantities, _setSelectedQuantities] = useState({})

const selectedProductsRef = React.useRef(selectedProducts)
const selectedQuantitiesRef = React.useRef(selectedQuantities)

const setSelectedProducts = (e, productId) =>{
    const isChecked = e.target.checked
    if(isChecked){
        selectedProductsRef.current = [...selectedProductsRef.current, productId]
        _setSelectedProducts([...selectedProductsRef.current, productId])
    }
    else{
        selectedProductsRef.current = selectedProductsRef.current.filter(prod=> prod != productId)
        _setSelectedProducts(selectedProductsRef.current)
    }
}

const setSelectedQuantities = (e, productId) =>{
    selectedQuantitiesRef.current = {...selectedQuantitiesRef.current, [productId]: e}
    _setSelectedQuantities({...selectedQuantitiesRef.current, [productId]: e})
}

const handleProductChange = (e, productId) => {
      setSelectedProducts(e, productId)
};
  
const handleQuantityChange = (e, productId) => {
const quantity = e.target.value;
setSelectedQuantities(quantity, productId)
};

const handleSubmit = (e) => {
    e.preventDefault();

  const pedido = selectedQuantitiesRef.current
  const produtos = selectedProductsRef.current
  let body = {
    produtos:[],
    valorTotal: 0,
    createdAt: new Date()
  }
  
    produtos.forEach((produto)=>{
        body.produtos.push({
          id: produto,
          quantidade: parseInt(pedido[produto])
        })
    })
    body.valorTotal = body.produtos.reduce((acc, product)=> acc + (product.quantidade * props.products.find(p=>p.id == product.id).value), body.valorTotal)
    console.log(body);

    fetch(`${baseUrl}/pedidos`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).then((res) => {
      console.log('fornecedor adicionado');
      console.log(res.body);
      window.location.reload();
    })  
  }



return (
    <div>
      <h2>Fornecedores cadastrados: {props.fornecedores.length}</h2>
      <h2>Produtos cadastrados: {props.products.length}</h2>
      <br></br>
      <h3>Selecionar Produtos</h3>
      <form className="checkbox-and-number-form" onSubmit={handleSubmit}>
      {props.products.map(product => (
        <div className="create" key={product.id}>
            <label>
                
                {product.name}
            </label>
                <input
                type="number"
                min="0"
                value={selectedQuantitiesRef.current[product.id] || ""}
                onChange={(e) => handleQuantityChange(e, product.id)}
                />
                <input
                    type="checkbox"
                    checked={selectedProductsRef.current.includes(product.id) || false}
                    onChange={(e) => handleProductChange(e, product.id)}
                />
                
        </div>
      ))}
      {selectedProductsRef.current.length != 0 && <button> Realizar pedido</button>}
        </form>
      </div>
  );
}

export default HomePage;