import './App.css';
import Header from './components/common/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import LoginUser from './components/auth/Login';
import Register from './components/auth/Register';
import AddProd from './components/dashboard/AddProduct';
import UpdateProd from './components/dashboard/UpdateProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Route path="/login"><LoginUser /></Route>
      <Route path="/register"><Register /></Route>
      <Route path="/add"><AddProd /></Route>
      <Route path="/update"><UpdateProd /></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
