/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails } from '../../api/mergedData';
import BookCard from '../../components/BookCard';

// shows individual author with books

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});
  // const [bookDetails, setBookDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  // useEffect is for the second render
  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
    // viewBookDetails(firebaseKey).then(setBookDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <p>
        {authorDetails.books?.map((book) => (
          <BookCard bookObj={book} key={book.firebaseKey} />
        ))}
      </p>
      <div className="text-white ms-5 details">
        <h5>
          {authorDetails.first_name} {authorDetails.last_name}
          {authorDetails.favorite ? ' 🤍' : ''}
        </h5>
        Email: {authorDetails.email}
        <hr />
      </div>
    </div>
  );
}
