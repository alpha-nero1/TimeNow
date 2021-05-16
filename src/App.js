import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import moment from 'moment';

function App() {
  const [time, setTime] = useState(new Date());
  const second = 1000;

  const displayDate = () => {
    return moment(time).format("LL");
  }

  const displayTime = () => {
    return moment(time).format("h:mm:ss A");
  }

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date());
    }, second)
  }, [time])

  return (
    <div className="App">
      <div className="App-header">
        <h1>🕐 The time now</h1>
        <h2 className="thetime">{displayTime(time)}</h2>
        <h2 className="thedate">{displayDate(time)}</h2>
        <p className="tiny">💎 - The diamond standard in keeping track of time!</p>
      </div>
    </div>
  );
}

export default App;
