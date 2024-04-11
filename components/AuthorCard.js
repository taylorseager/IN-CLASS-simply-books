import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { updateAuthor } from '../api/authorData';
import { deleteAuthorBooks } from '../api/mergedData';

// shows all authors

function AuthorCard({ authorObj, onUpdate }) {
  const toggleFavorite = () => {
    if (authorObj.favorite) {
      updateAuthor({ ...authorObj, favorite: false }).then(onUpdate);
    } else {
      updateAuthor({ ...authorObj, favorite: true }).then(onUpdate);
    }
  };

  const deleteThisAuthor = () => {
    if (window.confirm(`Are you absolutely positive you want to delete ${authorObj.first_name} ${authorObj.last_name}?!?! This cannot be undone!! Tread lightly`)) {
      deleteAuthorBooks(authorObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={authorObj.image} alt={authorObj.first_name} style={{ height: '300px' }} />
        <Card.Body>
          <Card.Title> {authorObj.first_name} {authorObj.last_name} <Button variant="dark" onClick={toggleFavorite}><span>{authorObj.favorite ? '💚' : '🤍'}</span></Button></Card.Title>
          <Link href={`/author/${authorObj.firebaseKey}`} passHref>
            <Button variant="primary" className="m-2">VIEW</Button>
          </Link>
          <Link href={`/author/edit/${authorObj.firebaseKey}`} passHref>
            <Button variant="info">EDIT</Button>
          </Link>
          <Button variant="danger" onClick={deleteThisAuthor} className="m-2">
            DELETE
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    image: PropTypes.string,
    favorite: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default AuthorCard;
