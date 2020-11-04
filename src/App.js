import React from 'react';
import styled from '@emotion/styled';

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
  padding 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

function App() {
  const queryAPI = () => {
    console.log('consultando...');
  }

  return (
    <Container>
      <Button onClick={queryAPI}>Obtener Frase</Button>
    </Container>
  );
}

export default App;
