/* eslint-disable react-hooks/exhaustive-deps */
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function UserProfile() {
  // useAuth gets user object from the auth context
  const { user } = useAuth();
  console.warn({ user });
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Img variant="top" src={user.photoURL} alt="profile image" style={{ height: '300px' }} />
          <Card.Title>{user.displayName}</Card.Title>
          <h6 className="card-text bold">Email: {user.email}</h6>
          <h6 className="card-text bold">Last Sign In: {user.metadata.lastSignInTime}</h6>
        </Card.Body>
      </Card>
      <Button type="button" size="lg" className="copy-btn" onClick={signOut}>
        Peace Out
      </Button>
    </>
  );
}
// metadata is pulled from firebase; is an object
UserProfile.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string,
    photoURL: PropTypes.bool,
    lastSignInTime: PropTypes.string,
  }).isRequired,
};

// parse format to change time format from military time
