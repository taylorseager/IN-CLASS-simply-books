import { useRouter } from 'next/router';

export default function EditAuthor() {
  // const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // TODO: grab the firebasekey
  const { firebaseKey } = router.query;
  return console.warn({ firebaseKey });
}
