/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails, viewBookDetails } from '../../api/mergedData';
import BookCard from '../../components/BookCard';

// shows individual author with books

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});
  const [bookDetails, setBookDetails] = useState({});
  const router = useRouter();
  console.warn(bookDetails);
  const { firebaseKey } = router.query;

  // useEffect is for the second render
  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
    viewBookDetails(firebaseKey).then(setBookDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="text-white ms-5 details">
        <h5>
          {authorDetails.first_name} {authorDetails.last_name}
          {authorDetails.favorite ? ' 🤍' : ''}
        </h5>
        Author Email: {authorDetails.email}
        <hr />
      </div>
      <p>
        {authorDetails.books?.map((book) => (
          <BookCard bookObj={book} key={book.firebaseKey} />
        ))}
      </p>
    </div>
  );
}
