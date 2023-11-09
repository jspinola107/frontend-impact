import FornecedorList from "./FornecedorList";
import useFetch from "./useFetch";

const HomeFornecedor = () => {
  const { error, isPending, data: fornecedores } = useFetch('http://localhost:8080/fornecedores')
  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { fornecedores && <FornecedorList fornecedores={fornecedores} /> }
    </div>
  );
}
 
export default HomeFornecedor;
