import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
import HomePage from './HomePage'

const Detalhes = () => {
    const { error, isPending, data: products } = useFetch('http://localhost:8080/produtos')
    const { error2, isPending2, data: fornecedores } = useFetch('http://localhost:8080/fornecedores')

    let prop = {
        products: products,
        fornecedores: fornecedores
    }
    return (
      <div className="home">
        { (error || error2) && <div>{ error }</div> }
        { (isPending||isPending2) && <div>Loading...</div> }
        { products && fornecedores && <HomePage props= {prop} /> }
      </div>
    );
  }

export default Detalhes;
