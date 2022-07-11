import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Rishi's Wish List.
        </p>

        <p>
        Cars
        </p>

        <Button variant="contained" size="large"
          href="https://bringatrailer.com/listing/1988-bmw-325is-61/"
          target="_blank"
          rel="noopener noreferrer"
        >BMW 325is</Button>

<p>
 
 </p>

        <Button variant="contained" size="small"
          href="https://classics.autotrader.com/classic-cars/1984/porsche/944/101749211"
          target="_blank"
          rel="noopener noreferrer"
        >Prosche 994 turbo</Button>

<p>
 Books
 </p>

        <Button variant="outlined" size="small"
          href="https://www.amazon.com/Being-Human-Adventures-Thousand-Consciousness/dp/1250783712"
          target="_blank"
          rel="noopener noreferrer"
        >Being a Human by Foster</Button>

<p>
 other
 </p>
        <Button variant="outlined" color="error" size="large" 
          href="https://www.lego.com/en-us/product/jazz-quartet-21334"
          target="_blank"
          rel="noopener noreferrer"
        >Lego Jazz Quartet</Button>

      </header>
    </div>
  );
}

export default App;
