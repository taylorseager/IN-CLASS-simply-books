import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSingleAuthor } from '../../../api/authorData';
import AuthorForm from '../../../components/forms/AuthorForm';

export default function EditAuthor() {
  const [editAuthorItem, setEditAuthorItem] = useState({});
  const router = useRouter();
  // grab the firebasekey
  const { firebaseKey } = router.query;

  // make api call to get author data
  useEffect(() => {
    getSingleAuthor(firebaseKey).then(setEditAuthorItem);
  }, [firebaseKey]);

  // pass object to the form
  return (<AuthorForm authorObj={editAuthorItem} />);
}
