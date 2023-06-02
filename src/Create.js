import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


const baseUrl = process.env.BACKURL || 'http://localhost:8080'

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [quant, setQuant] = useState(0);
  const [valor, setValor] = useState('');
  const [fornecedores, setFornecedores] = useState([]);
  // const [selectedFornecedor, setSelectedFornecedor] = useState(null);
  const history = useHistory();

  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    fetch(`${baseUrl}/fornecedores`)
      .then(res => res.json())
      .then(data => setFornecedores(data))
      .catch(error => console.error(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = { 
      nome: title, 
      descricao: body, 
      valor: parseInt(valor),
      quantidade: parseFloat(quant),
    };

    console.log(product);
    fetch(`${baseUrl}/produto`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    }).then(() => {
      console.log('new product added');
      history.push('/');
    })  
  }

  return (
    <div className="create">
      <h2>Adicionar produto</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome do produto:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Descrição:</label>
        <textarea
          type="text"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        >
        </textarea>
        <label>Quantidade:</label>
        <input
          type="number"
          required
          value={quant}
          onChange={(e) => setQuant(e.target.value)}
        />
      
        <label>Valor:</label>
        <input 
          type="float" 
          required 
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        {/* <label>Fornecedor:</label>
        <select
          value={selectedFornecedor}
          onChange={(e) => setSelectedFornecedor(e.target.value)}
        >
          <option value={null}>Select a supplier</option>
          {fornecedores.map(fornecedor => (
            <option key={fornecedor.id} value={fornecedor.name}>{fornecedor.name}</option>
          ))}
        </select> */}
        { !isPending && <button> Add Product</button> }
        { isPending && <button disabled> Addind product...</button>}
      </form>
    </div>
  );
}
 
export default Create;