import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Controle estoque
</h1>
      <div className="links">
        <Link to="/"  >Inicio/Novo Pedido</Link>
        <Link to="/pedidos">Pedidos</Link>
        <Link to="/fornecedores">Fornecedores</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/createfornecedor" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Novo Fornecedor</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Novo Produto</Link>
        

      </div>
    </nav>
  );
}
 
export default Navbar;