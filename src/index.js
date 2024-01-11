import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/pages/Home';
import GerarCarnePagamento from './components/pages/GerarCarnePagamento';
import GerarFichaMatricula from './components/pages/GerarFichaMatricula';
import NovoAluno from './components/pages/NovoAluno';
import Alunos from './components/pages/Alunos';
import InformacoesAluno from './components/pages/InformacoesAluno';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/carnepagamento",
    element: <GerarCarnePagamento/>,
  },
  {
    path: "/fichamatricula",
    element: <GerarFichaMatricula/>,
  },
  {
    path: "/novoaluno",
    element: <NovoAluno/>,
  },
  {
    path: "/alunos",
    element: <Alunos/>,
  },
  {
    path: "/informacoes_aluno",
    element: <InformacoesAluno/>,
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

