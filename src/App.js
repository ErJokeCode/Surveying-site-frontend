import logo from './logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Main from './pages/main';
import NoPage from "./pages/Nopage";
import Services from './pages/services';
import { useEffect, useState } from 'react';
import axios from 'axios';



function App() {
  const [services, setServices] = useState([])

  useEffect(() => {
    getServices()
}, [])

const getServices = async() => {
    const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/services`);
    if(services.length == 0){
        setServices(data)
    }
}

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/services" element={<Services services={services}/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
