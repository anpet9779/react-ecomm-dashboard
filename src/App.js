import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';
import Header from './components/common/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import LoginUser from './components/auth/Login';
import RegisterUser from './components/auth/Register';
import AddProd from './components/dashboard/AddProduct';
import UpdateProd from './components/dashboard/UpdateProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <h1>Ecomm-Project</h1>
      <Route path="/login"><LoginUser /></Route>
      <Route path="/register"><RegisterUser /></Route>
      <Route path="/add"><AddProd /></Route>
      <Route path="/update"><UpdateProd /></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
