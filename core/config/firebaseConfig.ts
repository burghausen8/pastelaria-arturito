import { FirebaseOptions, initializeApp } from 'firebase/app';
import firebaseConfig from "../../env/firebase-config.json";
import { initializeAuth } from 'firebase/auth';

let options: FirebaseOptions = {
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId,
  storageBucket: firebaseConfig.storageBucket,
  messagingSenderId: firebaseConfig.messagingSenderId,
  appId: firebaseConfig.appId,
  measurementId: firebaseConfig.measurementId,
  databaseURL: firebaseConfig.databaseURL
};

export const app = initializeApp(options);
export const authF = initializeAuth(app);


