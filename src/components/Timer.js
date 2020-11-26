import React, {useState, useEffect} from 'react';

const Timer = ({activeTimer, setActiveTimer, setTimerMinutes, visibleModal, setVisibleModal}) => {
  const [secTimerLeft, setSecTimerLeft] = useState(parseInt(setTimerMinutes) * 60);
  const [timerData, setTimerData] = useState({
    hoursLeft: 0,
    minutesLeft: 0,
    secLeft: 0
  });

  useEffect(() => {
    let timer = null;

    if (activeTimer) {
      timer = setInterval(() => {
        let seconds = secTimerLeft%60;
      let minutes = secTimerLeft/60%60;
      let hour = secTimerLeft/60/60%60;

      if (secTimerLeft <= 0) {
        clearInterval(timer);
        setActiveTimer(!activeTimer);
        setVisibleModal(!visibleModal)
        alert("Время закончилось");
      } else {
      function setFidexViewNumber(number) {
        number = Math.trunc(number)

        if(String(number).length < 2) number = "0" + number;

        return number;
      }

      setTimerData({hoursLeft: setFidexViewNumber(hour), minutesLeft: setFidexViewNumber(minutes), secLeft: setFidexViewNumber(seconds)})
    }
    setSecTimerLeft(secTimerLeft - 1);
    }, 1000);
  } 
    return () => clearInterval(timer);
  });

  return(
    <>
      <div className="modal_timer">
        <div className="timer-item">
          <span className="timer-item__numbers" id="timer-v-hours">{timerData.hoursLeft || '00'}</span>
        </div>
        <div className="timer-item">
          <span className="timer-item__numbers" id="timer-v-minutes">{timerData.minutesLeft || '00'}</span>
        </div>
        <div className="timer-item">
          <span className="timer-item__numbers" id="timer-v-seconds">{timerData.secLeft || '00'}</span>
        </div>
      </div>
    </>
  )
}

export default Timer;