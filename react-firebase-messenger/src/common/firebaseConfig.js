import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// eslint-disable-next-line import/no-mutable-exports,
// @typescript-eslint/ban-types

const firebaseConfig = {
  apiKey: 'AIzaSyCrwhVjTonKzKaspFVAXBTXIrObATneqQM',
  authDomain: 'react-firebase--messenger.firebaseapp.com',
  projectId: 'react-firebase--messenger',
  storageBucket: 'react-firebase--messenger.appspot.com',
  messagingSenderId: '246937302816',
  appId: '1:246937302816:web:1f63ca2a91af5ebe130945',
  measurementId: 'G-QENMV0DCZ1',
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
export default firebaseConfig;
