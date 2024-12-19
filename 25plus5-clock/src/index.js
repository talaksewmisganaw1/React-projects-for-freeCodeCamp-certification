import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(1500);
  const [timeType, setTimeType] = useState("SESSION");
  const [play, setPlay] = useState(false);
  
  const timeout = setTimeout(() => {
    if(timeLeft && play) {
      setTimeLeft(timeLeft - 1);
    }
  }, 1000);
  
  const handleBreakIncrease = () => {
    if(breakLength < 60) {
      setBreakLength(breakLength + 1)
    }
  }
  
  const handleBreakDecrease = () => {
    if(breakLength > 1) {
      setBreakLength(breakLength - 1)
    }
  }
  
  const handleSessionIncrease = () => {
    if(sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setTimeLeft(timeLeft + 60);
    }
  }
  
  const handleSessionDecrease = () => {
    if(sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      setTimeLeft(timeLeft - 60);
    }
  }
  
  const timeFormatter = () => {
    const minutes = Math.floor(timeLeft/60);
    const seconds = timeLeft - minutes * 60;
    const formattedSeconds = seconds < 10 ? "0" + seconds: seconds;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    return `${formattedMinutes}:${formattedSeconds}`;
  }
  
  const handlePlay = () => {
    clearTimeout(timeout);
    setPlay(!play);
  }
  
  const handleReset = () => {
    clearTimeout(timeout);
    setPlay(false);
    setTimeLeft(1500);
    setBreakLength(5);
    setSessionLength(25);
    setTimeType("SESSION");
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
  }
  
  const resetTimer = () => {
    const audio = document.getElementById("beep");
    if(!timeLeft && timeType === "SESSION") {
      setTimeLeft(breakLength * 60);
      setTimeType("BREAK");
      audio.play();
      
      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
      }, 5000)
    }
    if(!timeLeft && timeType === "BREAK") {
      setTimeLeft(sessionLength * 60);
      setTimeType("SESSION");
      audio.play();
      
      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
      }, 5000)
    }
  }
   
  const clock = () => {
    if(play) {
      resetTimer();
    }else {
      clearTimeout(timeout);
    }
  }
  
  useEffect(() => {
    clock();
  }, [play, timeLeft])
  
  const title = timeType === "SESSION"? "Session": "Break";

  return (
    <div id="clock">
      <h1>25 + 5 Clock</h1>
      <div id="setter-container">
        <div id="break-setter" className="setters">
          <div id="break-label">Break Length</div>
          <div className="adjust">
            <div id="break-length">{breakLength}</div>
            <div className="arrows">
              <button disabled={play} onClick={handleBreakIncrease} id="break-increment">
              +
              </button>
              <button disabled={play} onClick={handleBreakDecrease} id="break-decrement">
              -
              </button>
            </div>
          </div>
        </div>
        <div id="session-setter" className="setters">
          <div id="session-label">Session Length</div>
          <div className="adjust">
            <div id="session-length">{sessionLength}</div>
            <div className="arrows">
              <button disabled={play} onClick={handleSessionIncrease} id="session-increment">
                +
              </button>
              <button disabled={play} onClick={handleSessionDecrease} id="session-decrement">
                -
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="timer-label">{title}</div>
      <div id="time-left">{timeFormatter()}</div>
      <div id="buttons">
        <audio id="beep" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"></audio>
        <button id="start_stop" onClick={handlePlay} className="buttons">
          {!play? <i className="fa-solid fa-play"></i>:<i className="fa-solid fa-pause"></i>}
        </button>
        <button id="reset" onClick={handleReset} className="buttons">
          <i className="fa-solid fa-rotate-right"></i>
        </button>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);