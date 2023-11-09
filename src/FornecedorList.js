import { Link } from 'react-router-dom';

const FornecedorList = ({ fornecedores }) => {
  return (
    <div className="fornecedor-list">
      {fornecedores.map(fornecedor => (
        <div className="fornecedor-preview" key={fornecedor.id} >
          <Link to={`/fornecedores/${fornecedor.id}`}>
            <h2>{ fornecedor.nome_fornecedor }</h2>
            <p>Fornecedor: { fornecedor.nome_fornecedor }</p>
            <p>Endereço: { fornecedor.endereco }</p>
         </Link>
        </div>
      ))}
    </div>
  );
}
 
export default FornecedorList;