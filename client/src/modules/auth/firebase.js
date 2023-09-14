import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Rest of your code remains the same
const firebaseConfig = {
    apiKey: 'AIzaSyAvpA6IXpcLHE4iVIIJ1n0Ec8SGp5oCoOI',
    authDomain: 'dkshauth-9760d.firebaseapp.com',
    projectId: 'dkshauth-9760d',
    storageBucket: 'dkshauth-9760d.appspot.com',
    messagingSenderId: '211599753918',
    appId: '1:211599753918:web:2443c854bc523cff9194ef',
    measurementId: 'G-454K1GLSMX',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
