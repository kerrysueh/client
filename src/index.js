import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/Header';
import Card from './Components/Card';
import stock from './Images/stock.png';
import covid from './Images/covid.png';
import covidandstock from './Images/covidandstock.png';


function App() {
  return(
    <div id="body">
      <Header/>
      <Card
        className = 'section'
        img = {stock}
        title = 'Stock Market Trends'
        description = 'Select a time period and sector to view Stock Market trends'
        linkto = '/Stock'
      />
      <Card
        className = 'section'
        img = {covid}
        title = 'Covid Trends'
        description = 'Select a time period and location to view trends in Covid statistics'
        linkto = '/Covid'
      />
      <Card
        className = 'section'
        img = {covidandstock}
        title = 'Covid and Stock Trends'
        description = 'Compare trends in Covid and Stock Market statistics'
        linkto = '/StockAndCovid'
      />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



