import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Componentes
import AutoList from "./componentes/AutoList"
import autosJSON from './data/autos.json'
import NavBar from './componentes/NavBar'
import Auto from './componentes/Auto'
import GetAllSelector from './selectores/GetAllSelector'
import AutoByID from './componentes/AutoByID'
import AutoDestacado from './componentes/AutoDestacado'

// Selectores
import autoSelector from './selectores/autoSelector'



const autoByMarca = autoSelector("chevrolet");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetAllSelector autos={autosJSON} />} />
        <Route path="/destacados" element={<AutoDestacado />} />
        <Route path="/getAutos" element={<AutoList autos={autosJSON} />} />
        <Route path="/auto/:id" element={<AutoByID />} />

        {/* AUTO MODELO DE CARD */}
        <Route path="/autos" element={<Auto />} />

      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();