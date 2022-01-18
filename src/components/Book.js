import React from 'react';
import Button from './Button';

const Book = (props) => {
  const name = props;
  return (
    <div key={name.data[0].id}>
      <h1>{name.data[0].type}</h1>
      <h2>{name.data[0].name}</h2>
      <h2>{name.data[0].author}</h2>
      <Button />
      <h1>{name.data[1].type}</h1>
      <h2>{name.data[1].name}</h2>
      <h2>{name.data[1].author}</h2>
      <Button />
      <h1>{name.data[2].type}</h1>
      <h2>{name.data[2].name}</h2>
      <h2>{name.data[2].author}</h2>
      <Button />

    </div>
  );
};

export default Book;