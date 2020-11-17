  
// ./App.js
import React from "react";
import Main from "./components/MainComponent"; 
import BottomTabNavigator from "./components/MainComponent"; 
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();


 const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
export default App