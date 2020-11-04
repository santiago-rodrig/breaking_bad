import React from 'react';

const Phrase = ({ children, author }) => (
  <div>
    <h1>{children}</h1>
    <p>{author}</p>
  </div>
);

export default Phrase;