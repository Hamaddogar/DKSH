// // routes
// import { paths } from 'src/routes/paths';

export const DEV_MODE = process.env.MOODE === 'dev' ? true : false;

// // ----------------------------------------------------------------------

export const HOST_API = process.env.REACT_APP_HOST_API;
export const ASSETS_API = process.env.REACT_APP_ASSETS_API;

export const FIREBASE_API = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
