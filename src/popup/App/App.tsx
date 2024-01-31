import React from 'react';
import './App.css';
import Button from '../../components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Better Cookie Clicker</h1>
        <h2>Settings</h2>
        <Button text="Auto Clicker" />
        <Button text="Auto Golden Cookie" />
        <Button text="Auto Upgrade" />
        <Button text="Auto Building" />
        <Button text="Stock Helper" />
        <h2>Stats</h2>
        <p>Upgrades Bought</p>
        <p>Buildings Bought</p>
        <p>Cookie Clicks</p>
        <p>Golden Cookies Clicked</p>
      </header>
    </div>
  );
}

export default App;
