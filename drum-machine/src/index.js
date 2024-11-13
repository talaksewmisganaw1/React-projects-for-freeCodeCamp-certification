import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const heater = [
    {
      keyCode: 81,
      key: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      key: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      key: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      key: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      key: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      key: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      key: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      key: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      key: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];

const smoothPiano = [
    {
      keyCode: 81,
      key: 'Q',
      id: 'Chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      keyCode: 87,
      key: 'W',
      id: 'Chord-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      keyCode: 69,
      key: 'E',
      id: 'Chord-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      keyCode: 65,
      key: 'A',
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      keyCode: 83,
      key: 'S',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      keyCode: 68,
      key: 'D',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      keyCode: 90,
      key: 'Z',
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      keyCode: 88,
      key: 'X',
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      keyCode: 67,
      key: 'C',
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  ];

const Returner = ({play, sound: {id, key, url, keyCode}}) => {
  const keyHandler = (e) => {
    if(e.keyCode == keyCode) {
      play(key, id);
    };
  }
  
  useEffect(() => {
    document.addEventListener("keydown", keyHandler);
    return () => {
      document.removeEventListener("keydown", keyHandler);
    }
  }, [])
  
  return <button className="drum-pad disablable" id={id} onClick={() => play(key, id)}><audio src={url} className="clip" id={key}></audio>{key}</button>
}


const Buttons = ({play, soundType}) => {
  return (
    <div id="pad-container">
      {soundType.map((sound) => <Returner play={play} sound={sound}/>)}
    </div>
    )
}


const SoundChanger = ({ changeSound }) => {
  return (
    <button title="Change the sound group" id="sound-changer" class="disablable" onClick={changeSound}>
      <i class="fa-brands fa-itunes-note"></i>
    </button>
  )
} 

const Volume = ({ volumeHandler, volumeAmount }) => {
  return (
    <div id="volume">
      <p id="volume-amount">{Math.round(volumeAmount * 100)}%</p>
      <input id="volume-control" class="disablable" type="range" min="0" max="1" step="0.01" value={volumeAmount} onChange={volumeHandler} />
    </div>
  )
}


const App = () => {  
  const [ power, setPower ] = useState(true);
  const [ powerBtnColor, setPowerBtnColor ] = useState("orange");
  const [ volumeAmount, setVolumeAmount ] = useState(1);
  const [soundType, setSoundType] = useState(heater);
  
  const powerHandler = () => {
    setPower(!power);
      const buttons = document.querySelectorAll(".disablable");
    if(power) {
      setPowerBtnColor("black");
      buttons.forEach(button => {
        button.disabled = true;
        button.classList.add("disabled");
        document.getElementById("sound-changer").style.backgroundColor="lightgrey";
      });
      document.getElementById("display").innerHTML = "";
    } else {
      setPowerBtnColor("orange");
      buttons.forEach(button => {
        button.disabled = false;
        button.classList.remove("disabled");
        document.getElementById("sound-changer").style.backgroundColor="#D2B48C";
      });
    }
  }
  
  const displayer = (id) => {
    document.getElementById("display").innerHTML = id;
  }
  
  const player = (key, id) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
    displayer(id);
  }
  
  
  const changeSound = () => {
    if(soundType === heater) {
      setSoundType(smoothPiano);
      displayer("Smooth-piano");
    } else {
      setSoundType(heater)
      displayer("Heater");
    }
  }
  
  const volumeHandler = (e) => {
    setVolumeAmount(e.currentTarget.value);
  }
  
  const changeVolume = () => {
    const audios = soundType.map(sound => document.getElementById(sound.key));
      audios.forEach(audio => {
        if(audio) {
          audio.volume = volumeAmount;
        }
    })
  }
  
  
  return (
    <div id="drum-machine">
      <button id="power" onClick={powerHandler} style={{color: `${powerBtnColor}`}}><i class="fa-solid fa-power-off"></i></button>
      {changeVolume()}
      <div id="display"></div>
      <div id="pad-and-volume">
        <Buttons play={player} soundType={soundType} />
        <Volume volumeHandler={volumeHandler} volumeAmount={ volumeAmount } />
      </div>
      <SoundChanger changeSound={changeSound}/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />);