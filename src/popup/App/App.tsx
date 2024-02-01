import React from 'react';
import './App.css';
import Button from '../../components/Button';
import popupContext from '../PopupContext';

function App() {
  const { popupStore, setPopupStore } = React.useContext(popupContext);

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
        <p>Upgrades Bought: {popupStore.upgradesBought}</p>
        <p>Buildings Bought: {popupStore.buildingsBought}</p>
        <p>Cookie Clicks: {popupStore.cookiesClicked}</p>
        <p>Golden Cookies Clicked: {popupStore.goldenCookiesClicked}</p>
      </header>
    </div>
  );
}

export default App;
