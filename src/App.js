import './App.css';
import { Footer } from './app/Footer';
import { Clock } from './app/Clock';

function App() {
  
  return (
    <div className="App">
      <header style={{ paddingTop: '2rem' }}>
        <h1>The time now</h1>
        <h2>Your real-time clock.</h2>
      </header>
      <div className='centered'>
        <Clock />
      </div>
      <Footer />
    </div>
  );
}

export default App;
