import './App.css';
import { Route } from 'react-router';
import { MainPage } from './app/main/main';
import { Country } from './app/country/country';
import { City } from './app/city/city';

function App() {
  
  return (
    <>
      <Route exact path='/' component={MainPage}/>
      <Route exact path='/:country' component={Country}/>
      <Route exact path='/:country/:city' component={City}/>
    </>
    
  );
}

export default App;
