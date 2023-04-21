import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const FIREBASE_CONFIG = {
    apiKey: 'AIzaSyBtW5xc-qOsU4Usa8e9UeDyTWlUhmP0W_Q',
    authDomain: 'ds-workbench-81187.firebaseapp.com',
    projectId: 'ds-workbench-81187',
    storageBucket: 'ds-workbench-81187.appspot.com',
    messagingSenderId: '373495552354',
    appId: '1:373495552354:web:2009cd6a353b93138c343b',
    measurementId: 'G-PW53YN43PY',
};

const app = initializeApp(FIREBASE_CONFIG);
export const auth = getAuth(app);
