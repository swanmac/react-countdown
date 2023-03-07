import { useEffect, useState } from "react";
import './App.css';

function App() {
        const calculateTimeLeft = () => {
          const difference = +new Date("2023-03-07T25:00:00+00:00") - +new Date();
          let timeLeft = {};

          if (difference > 0) {
            timeLeft = {
              hours: Math.floor(difference / (1000 * 60 * 60)),
              minutes: Math.floor((difference / 1000 / 60) % 60),
              seconds: Math.floor((difference / 1000) % 60),
            };
          }
      
          return timeLeft;
        };

        const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

        useEffect(() => {
          setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
          }, 1000);
        });

        return (
          <div align="center" className="App">
            <h3 align="center">Cheap Trick Show</h3> 
            <h3 align="center">Countdown Timer</h3>
            <h3 align="center">Hard Rock Hotel & Casino Tampa</h3>
            <h3 align="center">March 7, 2023</h3>
            <img src="https://sunbizlocal.com/chk.jpg" width={300} height={300} />
           {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
            <p>
               <span>{timeLeft.hours}</span>
               <span>:</span>
               <span>{timeLeft.minutes}</span>
               <span>:</span>
               <span>{timeLeft.seconds}</span>
            </p>
        ) : (
          <p>Time is up 🔥</p>
        )}
      </div>   
  );
}

export default App;
