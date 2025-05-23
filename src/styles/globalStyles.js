import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        text-decoration: none;
        font-family: "Montserrat", serif;
        
    }

 body {
    margin: 0;
    padding: 0;
    background-color: #000; /* Evita fundo preto ao quebrar */
    overflow-x: hidden; /* Impede rolagem lateral */
}

html, body, #root {
  margin: 0;
  padding: 0;
  overflow-x: hidden;  /* bloqueia scroll horizontal */
  width: 100%;
  height: 100%;
}

`