import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  console.log(products);
  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product-preview" key={product.id} >
          <Link to={`/produtos/${product.id}`}>
            <h2>{ product.nome }</h2>
            <p>Nome: { product.nome }</p>
            <p>Descrição: { product.descricao }</p>
            <p>Quantidade: { product.quantidade }</p>
            <p>Valor: { product.valor }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default ProductList;