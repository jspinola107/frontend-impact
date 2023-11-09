import useFetch from "./useFetch";

const Pedidos = () => {
  const { error, isPending, data: pedidos } = useFetch('http://localhost:8080/pedidos')
  const { errorP, isPendingP, data: produtos } = useFetch('http://localhost:8080/produtos')
  return (
    <div className="home">
      {(error || errorP) && <div>{error}</div>}
      {(isPending || isPendingP) && <div>Loading...</div>}
      {(pedidos && produtos) && <PedidosList pedidos={pedidos} produtos={produtos} />}
    </div>
  );
}

const PedidosList = (props) => {
  return (
    <div className="fornecedor-list">
      {props.pedidos.map(pedido => (
        <div className="fornecedor-preview" key={pedido.id} >
          <h2>{pedido.id}</h2>
          <p>Valor Total: R$:{pedido.valorTotal}</p>
          <p>Criado em: {new Date(pedido.createdAt).toLocaleDateString('pt-br', {
            year: 'numeric',
            month: ('long' || 'short' || 'numeric'),
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
          })}</p>
          <br></br>
          <b>Produtos:</b>
          {pedido.produtos.map(produto => (
            <div key={produto.id}>
              <p>{props.produtos.find(p => p.id == produto.id).name}</p>
              <p>qtd: {produto.quantidade}</p>
              <br></br>
            </div>
          ))}

        </div>
      ))}
    </div>
  );
}

export default Pedidos