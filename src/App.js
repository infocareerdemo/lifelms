import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <div>
      <Router>
        <NavbarComp />  
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
