import React, { useState } from 'react';
import styled from '@emotion/styled';
import Phrase from './components/Phrase';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column-reverse;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574a 100%);
  background-size: cover;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

function App() {
  const [phrase, setPhrase] = useState({});

  const queryAPI = async () => {
    const result = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const phrase = await result.json();

    setPhrase(phrase[0]);
  }

  return (
    <Container>
      <Button onClick={queryAPI}>Obtener Frase</Button>
      <Phrase author={phrase.author}>{phrase.quote}</Phrase>
    </Container>
  );
}

export default App;
