import { useState } from "react";
import { useHistory } from "react-router-dom";

const baseUrl = process.env.BACKURL || 'http://localhost:8080'

const Createfornecedor = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [number, setNumber] = useState('');

  const history = useHistory();

  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

  const fornecedor = { 
    nome_fornecedor: title, 
    endereco: body, 
    numero: number,
      
    };
    console.log(fornecedor);
    fetch(`${baseUrl}/fornecedor`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fornecedor)
    }).then(() => {
      console.log('fornecedor adicionado');
      history.push('/');
    })  
  }

  return (
    <div className="create">
      <h2>Adicionar Fornecedor</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome do Fornecedor:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Endereço do Fornecedor:</label>
        <textarea
          type="text"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        >
        </textarea>
        <label>Número do Fornecedor:</label>
        <input 
          type="text" 
          required 
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        
        { !isPending && <button> Adicionar Fornecedor</button> }
        { isPending && <button disabled> Adicionando Fornecedor...</button>}
      </form>
    </div>
  );
}
 
export default Createfornecedor;