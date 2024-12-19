import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// const Timeleft = ({mins, secs}) => {  
//   return (<div id="time-left">{`${mins}:${secs}`}</div>)
// }

// const Setters = ({sessionLength, breakLength, changeBreakValue, changeSessionValue}) => {
//   return (
//     <div id="setter-container">
//       <BreakSetter breakLength={breakLength} changeBreakValue={changeBreakValue} />
//       <SessionSetter sessionLength={sessionLength} changeSessionValue={changeSessionValue} />
//     </div>
//   )
// }

// const BreakSetter = ({breakLength, changeBreakValue}) => {
//   return (
//     <div id="break-setter" className="setters">
//       <div id="break-label">break length</div>
//       <div className="adjust">
//         <div id="break-length">{breakLength}</div>
//         <div className="arrows">
//           <i class="fa-solid fa-caret-up" id="break-increment" onClick={() => {changeBreakValue("add")}}></i>
//           <i class="fa-solid fa-caret-down" id="break-decrement" onClick={() => {changeBreakValue("minus")}}></i>
//         </div>
//       </div>
//     </div>
//   )
// }

// const SessionSetter = ({sessionLength, changeSessionValue}) => {
//   return (
//     <div id="session-setter" className="setters">
//       <div id="session-label">session length</div>
//       <div className="adjust">
//         <div id="session-length">{sessionLength}</div>
//         <div className="arrows">
//           <i class="fa-solid fa-caret-up" id="session-increment" onClick={() => {changeSessionValue("add")}}></i>
//           <i class="fa-solid fa-caret-down" id="session-decrement" onClick={() => {changeSessionValue("minus")}}></i>
//         </div>
//       </div>
//   </div>
//   )
// }

      
// const Buttons = ({startHandler, clockState, reset}) => {
//   return (
//     <div id="buttons">
//       <audio id="beep" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"></audio>
//       <button id="start_stop" className="buttons" onClick={startHandler}>
//         {clockState==="pause"? <button className="play"><i class="fa-solid fa-play"></i></button>:
//         <button className="pause"><i class="fa-solid fa-pause"></i></button>}
//       </button>
//       <button id="reset" className="buttons" onClick={reset}>
//         <i class="fa-solid fa-rotate-right"></i>
//       </button>
//     </div>
//   )
// }
      
      
// const App = () => {
//   const [mins, setMins] = React.useState(25);
//   const [secs, setSecs] = React.useState("00");
//   const [time, setTime] = React.useState(25*60);
//   const [clockState, setClockState] = React.useState("pause");
//   const [sessionType, setSessionType] = React.useState("Session");
//   const [sessionLength, setSessionLength] = React.useState(25);
//   const [breakLength, setBreakLength] = React.useState(5);
//   const [icon, setIcon] = React.useState("");
//   const [intervalSetter, setIntervalSetter] = React.useState(null);
//   const [buttonEnabled, setButtonEnabled] = React.useState(true);
  
  
//   const changeSessionValue = (value) => {
//     if(buttonEnabled) {
//       if(value==="add") {
//         if(sessionLength < 60) {
//           setSessionLength(sessionLength + 1);
//           setMins(sessionLength + 1);
//           setTime((sessionLength + 1)*60);
//         }
//       } else if(value==="minus") {
//         if(sessionLength > 1) {
//           if(sessionLength -1 < 10) {
//             setMins(`0${sessionLength - 1}`);
//           } else {
//             setMins(sessionLength - 1);
//           }
//           setSessionLength(sessionLength - 1);
//           setTime((sessionLength - 1)*60);
//         }
//       }
//     }
//   }
  
//   const changeBreakValue = (value) => {
//     if(buttonEnabled) {
//       if(value==="add") {
//         if(breakLength < 60) {
//           setBreakLength(breakLength + 1);
//         }
//       } else if(value==="minus") {
//         if(breakLength > 1) {
//           setBreakLength(breakLength - 1)
//         }
//       }
//     }
//   }
  
//   const startHandler = () => {
//     const playPause = clockState==="pause"? "play": "pause";
//     setClockState(playPause);
    
//     if(playPause === "play") {
//       setButtonEnabled(false);
//       let currentTime;
//       const interval = setInterval(() => {
//         setTime((prevTime) => {
//           currentTime = prevTime - 1;
//           if(currentTime > 0) {
//             if(Math.floor(currentTime/(60)) < 10) {
//               setMins(`0${Math.floor(currentTime/(60))}`);
//             } else {
//               setMins(Math.floor(currentTime/(60)));
//             }
            
//             if(currentTime%60 < 10) {
//               setSecs(`0${currentTime%60}`);
//             } else {
//               setSecs(currentTime%60);
//             }
//             console.log(Math.floor(currentTime/(60)));
//             console.log(currentTime)
//             return prevTime - 1;
//           } else {
//             const audio = document.getElementById("beep");
//             audio.play();
//             setTime(sessionType === "Session"? breakLength * 60: sessionLength * 60);
//             setSessionType(sessionType === "Session"? "Break": "Session");
//             setSecs("00");
//           }
//         })
//       },1000);

//       setIntervalSetter(interval);
//     }

//     if(playPause === "pause") {
//       setButtonEnabled(true);
//       clearInterval(intervalSetter);
//       setIntervalSetter(null);
//     }
    
//   }
  
//   const reset = () => {
//     setMins(25);
//     setSecs("00");
//     setTime(25*60);
//     setSessionLength(25);
//     setBreakLength(5);
//   }
  
//   return (
//     <div id="clock">
//       <h1>25 + 5 Clock</h1>
//       <div id="timer-label">{sessionType}</div>
//       <Timeleft mins={mins} secs={secs} />
//       <Setters breakLength={breakLength} sessionLength={sessionLength} changeSessionValue={changeSessionValue} changeBreakValue={changeBreakValue}/>
//       <Buttons startHandler={startHandler} clockState={clockState} reset={reset} />
//     </div>
//   )
// }

 
const App = () => {
  return (<h1>love </h1>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);