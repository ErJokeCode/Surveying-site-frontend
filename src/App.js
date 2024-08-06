import logo from './logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Main from './pages/main';
import NoPage from "./pages/Nopage";
import Services from './pages/services';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
