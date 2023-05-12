import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: "Montserrat";
 }
 body{
   background-color: rgb(212, 76, 76);
 }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <GlobalStyle/>
      <App />
  </React.StrictMode>,
)
