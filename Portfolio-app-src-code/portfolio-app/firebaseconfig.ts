// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const fireBaseAPIKey: string = import.meta.env.REACT_APP_FIREBASE_API_KEY;
const fireBaseAuthDomain: string = import.meta.env
  .REACT_APP_FIREBASE_AUTH_DOMAIN;
const fireBaseProjectId: string = import.meta.env.REACT_APP_FIREBASE_PROJECT_ID;
const fireBaseStorageBucket: string = import.meta.env
  .REACT_APP_FIREBASE_STORAGE_BUCKET;
const fireBaseMessagingSenderId: string = import.meta.env
  .REACT_APP_FIREBASE_MESSAGING_SENDER_ID;
const fireBaseAppId = import.meta.env.REACT_APP_FIREBASE_APP_ID;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: fireBaseAPIKey,
  authDomain: fireBaseAuthDomain,
  projectId: fireBaseProjectId,
  storageBucket: fireBaseStorageBucket,
  messagingSenderId: fireBaseMessagingSenderId,
  appId: fireBaseAppId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
