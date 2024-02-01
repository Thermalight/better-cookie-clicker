import { createContext, useState } from 'react';

const PopupContext = createContext();

let initialState = {
  cookiesClicked: 0,
  goldenCookiesClicked: 0,
  upgradesBought: 0,
  buildingsBought: 0,
  settings: {
    autoCookieClicker: false,
    autoGoldenCookieClicker: false,
    autoUpgradeBuyer: false,
    autoBuildingBuyer: false,
    stockMarketHelper: false,
  }
};

export default PopupContext;

export const PopupContextProvider = ({ children }) => {
  const [popupStore, setPopupStore] = useState(initialState);
  return (
    <PopupContext.Provider value={{popupStore, setPopupStore}}>
      {children}
    </PopupContext.Provider>
  );
}