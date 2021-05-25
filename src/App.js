import './App.css';
import Header from './components/common/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import LoginUser from './components/auth/Login';
import Register from './components/auth/Register';
import AddProd from './components/dashboard/AddProduct';
import UpdateProd from './components/dashboard/UpdateProduct';
import Protected from './components/protected';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path="/login"><LoginUser /></Route>
      <Route path="/register"><Register /></Route>
      <Route path="/add"><Protected cmp={AddProd} /></Route>
      <Route path="/update"><Protected cmp={UpdateProd} /></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
