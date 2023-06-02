import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
const baseUrl = process.env.BACKURL || 'http://localhost:8080'

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, error, isPending } = useFetch('http://localhost:8080/produto/' + id);
  const history = useHistory();

  const handleClick = () => {
    console.log(baseUrl);
    fetch(`${baseUrl}/produto/` + product.id,{
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    })
  }


  console.log(product);
  return (
    <div className="product-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { product && (
        <article>
          <h2>{ product.nome }</h2>
          <p>Descrição: { product.descricao }</p>
          <div>Quantidade: { product.quantidade }</div>
          <div>Valor: R${ product.valor }</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default ProductDetails;