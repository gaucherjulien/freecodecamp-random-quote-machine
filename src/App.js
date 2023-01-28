
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';


const COUNT = 10;

function random (min, max) { // max not included
  return Math.floor(Math.random() * (max - min) + min)
}

let quotes = [];
for (let i = 0; i < COUNT; ++i) {
  quotes.push (['Citation #'+i, 'Author #'+i]);
}

function App() {

  const [quote, setQuote] = useState (quotes [random (0, COUNT)]);

  function handleClick() {
    setQuote (quotes [random (0, COUNT)]);
  }

  return (
    <Container id="quote-box" className='bg-light rounded-3'>
      <div id="text" className='p-2'>{quote[0]}</div>
      <div id="author" className='p-2'>{quote[1]}</div>
      <button id="new-quote" onClick={handleClick}>new</button>
      <a id="tweet-quote" href='twitter.com/intent/tweet'>link</a>
    </Container>
  );
}

export default App;
