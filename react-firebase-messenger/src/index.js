import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
// import firebase from 'firebase/compat/app';
// import { getAuth } from 'firebase/auth';
import 'firebase/compat/firestore';
// import { getStorage } from 'firebase/storage';
// import { initializeApp } from 'firebase/app';
// import firebaseConfig from './common/firebaseConfig';
// import { getFirestore } from 'firebase/firestore/lite';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { AuthContextProvider } from './context/authContext/AuthContext';
import './index.css';

// export const Context = createContext(null);

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const firestore = getFirestore(app);
// const storage = getStorage();
// Get a list of cities from your database
// async function getCities(firestore) {
//   const citiesCol = collection(firestore, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    {/* <Context.Provider
      value={{
        firebase,
        auth,
        firestore,
      }}
    > */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </Context.Provider> */}
  </AuthContextProvider>
);
