import React from 'react';
import styled from '@emotion/styled';

const PhraseContainer = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;
  margin-top: 20rem;

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    &::before {
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }

  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
 `;

const Phrase = ({ children, author }) => {
  if (children === null || author === null) return null;

  return (
    <PhraseContainer>
      <h1>{children}</h1>
      <p>{author}</p>
    </PhraseContainer>
  );
};

export default Phrase;