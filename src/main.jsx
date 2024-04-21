import React from 'react'; // Importa la biblioteca React
import ReactDOM from 'react-dom/client'; // Importa el método createRoot de ReactDOM
import App from './App'; // Importa el componente principal de la aplicación
import './index.css'; // Importa el archivo de estilos CSS

const root = ReactDOM.createRoot(document.getElementById('root')); // Crea un root usando createRoot de ReactDOM y obtiene el elemento DOM con el id 'root'

root.render( // Renderiza el componente principal de la aplicación en el root
  <App /> // Componente principal de la aplicación
);