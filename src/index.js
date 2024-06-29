import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import 'bootstrap/dist/css/bootstrap.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9uoWgkzrMAWJG8b89NLvaDuqaBKd82iE",
  authDomain: "jinipro-a2903.firebaseapp.com",
  projectId: "jinipro-a2903",
  storageBucket: "jinipro-a2903.appspot.com",
  messagingSenderId: "39966975300",
  appId: "1:39966975300:web:5844c7c96aaa34dbc12311"
};

// 기존 Initialize Firebase
 firebase.initializeApp(firebaseConfig); 
// firebase의 firestore 인스턴스를 변수에 저장
 export const firestore = firebase.firestore();

// Firebase 초기화
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const storage = getStorage(app);
// export { auth, db, storage };



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>    
    </Provider>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
