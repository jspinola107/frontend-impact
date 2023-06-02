import useFetch from "./useFetch";

const Pedidos = () => {
    const { error, isPending, data: pedidos } = useFetch('http://localhost:8080/pedidos')
    return (
      <div className="home">
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { pedidos && <PedidosList pedidos={pedidos} /> }
      </div>
    );
}

const PedidosList = ({ pedidos }) => {
    return (
      <div className="fornecedor-list">
        {pedidos.map(pedido => (
          <div className="fornecedor-preview" key={pedido.id} >
              <h2>{ pedido.id }</h2>
              <p>Valor Total: R$:{ pedido.valor_total }</p>
          </div>
        ))}
      </div>
    );
}

export default Pedidos