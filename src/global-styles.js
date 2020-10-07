import { createGlobalStyle } from 'styled-components' 

export const GlobalStyles = createGlobalStyle`

html, body {
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap');
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: black;
    color:#333333;
    font-size: 14px;

    margin: 0px;
    padding: 0px;
}


`;