import { useEffect, useState } from 'react';
import moment from 'moment';

export const Clock = () => {
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
    <div>
        <h2 className="thetime">{displayTime(time)}</h2>
        <h2 className="thedate">{displayDate(time)}</h2>
    </div>
  )
}