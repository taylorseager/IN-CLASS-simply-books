/* eslint-disable react-hooks/exhaustive-deps */
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { useAuth } from '../utils/context/authContext';

export default function UserProfile() {
  const { user } = useAuth();
  console.warn({ user });

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{user.displayName}</Card.Title>
        <h6>{user.email}</h6>
        <h6>{user.metadata.lastSignInTime}</h6>
      </Card.Body>
    </Card>
  );
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string,
    photoURL: PropTypes.bool,
    lastSignInTime: PropTypes.string,
  }).isRequired,
};
