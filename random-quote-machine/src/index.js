import { useState, useEffect } from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import axios from 'axios';


const Quote = ({quotes,index}) => {
    return (
    <div id="text">
      <p id="quote">{quotes[index]?.quote}</p>
      <p id="author">— {quotes[index]?.author}</p> 
    </div>
  )
}

const Buttons = ({indexSetter}) => {
  return (
    <div id="buttons">
      <a href="https://x.com/intent/post" target="_blank" id="tweet-quote" class="button"><i class="fa-brands fa-x-twitter"></i></a>
      <div id="new-quote" class="button" onClick={indexSetter}>new quote</div>
    </div>
  )
}



const QuoteApp = () => {
  const [quotes, setQuotes] = useState([]);
  const [index, setIndex] = useState(Math.floor(Math.random() * quotes.length));
  

  useEffect(() => {
    axios.get('https://dummyjson.com/quotes')
    .then(res => setQuotes([...res.data.quotes]))
    .catch(err => {
      
      setQuotes([{quote: "To lose patience is to lose the battle." ,author:"Mahatma Gandhi"}])})
  },[index])

  const indexSetter = () => {
      setIndex(() => Math.floor(Math.random() * quotes.length));
  }

  return (
    <div id="quote-box">
      <h1>Quotes</h1>
      < Quote index={index} quotes={quotes}/>      
      < Buttons indexSetter={indexSetter} />   
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<QuoteApp />);