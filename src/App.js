import { Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar';
import ProductList from './ProductList';
import Details from './Details';
import Cart from './Cart';
import Default from './Default';
import Modal from './Modal'
import ContextReducer from './ContextReducer'


function App() {
  return (
    <>
      <ContextReducer>
          <Navbar/>
          <Switch>
            <Route exact path='/' component={ProductList} />
            <Route exact path='/details' component={Details} />
            <Route exact path='/cart' component={Cart} />
            <Route component={Default} />
          </Switch>
            <Modal/>
      </ContextReducer>
    </>
  );
}

export default App;
