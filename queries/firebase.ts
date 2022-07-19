import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDAZujoOd4gyhx0S3yKyCGP4P1QPWPd994',
  authDomain: 'solana-discord-auth.firebaseapp.com',
  projectId: 'solana-discord-auth',
  storageBucket: 'solana-discord-auth.appspot.com',
  messagingSenderId: '940127994314',
  appId: '1:940127994314:web:cbd0244e3b7ca77c048f33',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const fetchConnectedUsers = async () => {
  const colRef = collection(db, 'connectedUsers');
  const docsSnapshot = await getDocs(colRef);
  return docsSnapshot.docs.map((document) => document.data());
};

export const userAlreadyExists = async (address: string) => {
  const userList = await fetchConnectedUsers();
  if (userList.filter((user) => user.solanaAddress === address).length > 0) {
    return true;
  }
  return false;
};

export const addConnectedUser = async (user: {
  solanaAddress: string;
  discordUsername: string;
  discordEmail: string;
}) => {
  const userCheck = await userAlreadyExists(user.solanaAddress);
  if (!userCheck) {
    await addDoc(collection(db, 'connectedUsers'), user);
  }
};
