// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';
// import Link from 'next/link';
// import { useAuth } from '../../utils/context/authContext';

// function authorsPage() {
//   const [authors, setAuthors] = useState([]);
//   const { user } = useAuth();
//   const getAllTheAuthors = () => {
//     getAuthors(user.uid).then(setAuthors);
//   };

//   useEffect(() => {
//     getAllTheAuthors();
//   }, []);
