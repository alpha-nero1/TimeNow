import { useEffect, useState } from 'react';
import moment from 'moment';
import { calcTime } from '../data/utils';

export const Clock = (props) => {
  const { offset } = props;
  const getTime = () => offset ? calcTime(offset) : new Date();

  const [time, setTime] = useState(getTime());
  const second = 1000;

  const displayDate = () => {
    return moment(time).format("LL");
  }

  const displayTime = () => {
    return moment(time).format("h:mm:ss A");
  }

  useEffect(() => {
    setTimeout(() => {
      setTime(getTime());
    }, second)
  }, [time])

  return (
    <div>
        <h2 className="thetime">{displayTime(time)}</h2>
        <h2 className="thedate">{displayDate(time)}</h2>
    </div>
  )
}