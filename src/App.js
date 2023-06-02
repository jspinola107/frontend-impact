import Navbar from './Navbar';
import Home from './Home';
import Detalhes from './Detalhes'
import Pedidos from './Pedidos'
import HomeFornecedor from './HomeFornecedores';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import ProductDetails from './ProductDetails';
import Createfornecedor from './Createfornecedor';
import FornecedorDetails from './FornecedorDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/produtos">
              <Home />
            </Route>
            <Route exact path="/">
              <Detalhes />
            </Route>
            <Route exact path="/pedidos">
              <Pedidos />
            </Route>
            <Route exact path="/fornecedores">
              <HomeFornecedor />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/createfornecedor">
              <Createfornecedor />
            </Route>
            <Route path="/produtos/:id">
              <ProductDetails />
            </Route>
            <Route path="/fornecedores/:id">
              <FornecedorDetails />
            </Route>
            
            
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
