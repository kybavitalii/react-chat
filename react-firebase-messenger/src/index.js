import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './common/firebaseConfig';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getFirestore } from 'firebase/firestore/lite';
import './index.css';

export const Context = createContext(null);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
// Get a list of cities from your database
// async function getCities(firestore) {
//   const citiesCol = collection(firestore, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}
  >
    <App />
  </Context.Provider>
);
