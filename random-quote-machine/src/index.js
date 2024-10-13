import { useState } from 'react';
import ReactDOM from "react-dom/client";
import './styles.css';

const quotes = [
  {
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky"
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
  },
  {
    quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr."
  },
  {
    quote: "Happiness is not something ready-made. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    quote: "Our lives begin to end the day we become silent about things that matter.",
    author: "Martin Luther King Jr."
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  },
  {
    quote: "The mind is everything. What you think you become.",
    author: "Buddha"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "Success is not how high you have climbed, but how you make a positive difference to the world.",
    author: "Roy T. Bennett"
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    quote: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    quote: "You can't use up creativity. The more you use, the more you have.",
    author: "Maya Angelou"
  },
  {
    quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll"
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    quote: "Change your thoughts and you change your world.",
    author: "Norman Vincent Peale"
  }
];

const Quote = (props) => {
  return (
    <>
      <p id="text">{quotes[props.index].quote}</p>
      <p id="author">{quotes[props.index].author}</p>
    </>
  )
}

const Buttons = (props) => {
 return (
  <div id="buttons">
    <a href="https://x.com/intent/post" target="_blank" id="tweet-quote" class="button"><i class="fa-brands fa-x-twitter"></i></a>
    <div id="new-quote" class="button" onClick={props.good}>new quote</div>
  </div>
 )
}

const QuoteApp = () => {
  const [index, setIndex] = useState(Math.floor(Math.random() * quotes.length));

  const good = () => {
    setIndex(() => Math.floor(Math.random() * quotes.length));
  }

  return (
    <div id="quote-box">
      < Quote index = {index}/>      
      < Buttons good={good} />   
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<QuoteApp />);