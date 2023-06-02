import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
const baseUrl = process.env.BACKURL || 'http://localhost:8080'

const FornecedorDetails = () => {
  const { id } = useParams();
  const { data: fornecedor, error, isPending } = useFetch('http://localhost:8080/fornecedor/' + id);
  const history = useHistory();

  const handleClick = () => {
    console.log(baseUrl);
    fetch(`${baseUrl}/fornecedores/` + fornecedor.id,{
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    })
  }


  
  return (
    <div className="fornecedor-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { fornecedor && (
        <article>
          <h2>{ fornecedor.nome_fornecedor }</h2>
          <p>Endereço:{ fornecedor.endereco }</p>
                
        <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default FornecedorDetails;