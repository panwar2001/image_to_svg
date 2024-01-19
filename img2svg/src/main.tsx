import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar';
import { createGlobalStyle } from 'styled-components';
import Dashboard from './components/Dashboard';
import { store } from './components/store/store';
import { Provider } from 'react-redux'
const Global=createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: none;
  border: none;
  text-decoration: none;
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  }
`;
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <Provider store={store}>
      <Global/>
      <Navbar/>
      <Dashboard/>
  </Provider>
  </React.StrictMode>
)
