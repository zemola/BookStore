import React from 'react';
import Book from './Book';
import AddBooks from './AddBooks';

const Books = () => {
  const data = [
    {
      id: 1,
      type: 'Action',
      title: 'Koto Aye',
      author: 'Ajileye Osho',
      ratings: '100',
    },
    {
      id: 2,
      type: 'Love',
      title: 'Kokoro Ife',
      author: 'Kunle Afolayan',
      ratings: '70',
    },
    {
      id: 3,
      type: 'Drama',
      title: 'Aragbe laye',
      author: 'Taiwo Hassan',
      ratings: '85',
    },
  ];
  return (

    <div>
      <Book data={data} />
      <AddBooks />
    </div>
  );
};

export default Books;
