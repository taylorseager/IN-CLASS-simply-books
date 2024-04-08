/* eslint-disable react-hooks/exhaustive-deps */
import React, { UseEffect, UseState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { getAuthors } from '../../api/authorData';
import AuthorCard from '../../components/AuthorCard';
import { useAuth } from '../../utils/context/authContext';

function authorsPage() {
  const [authors, setAuthors] = UseState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user } = useAuth();
  const getAllTheAuthors = () => {
    getAuthors(user.uid).then(setAuthors);
  };

  UseEffect(() => {
    getAllTheAuthors();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/author" passHref>
        <Button>Add An Author</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* TODO: map over authors here using AuthorCard component */}
        {authors.map((author) => (
          <AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={getAllTheAuthors} />
        ))}
      </div>

    </div>
  );
}

export default authorsPage;
