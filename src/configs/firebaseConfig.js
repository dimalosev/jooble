import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCXYCHoxB56YxUarz9w7IDYISF1Q0Ur70U',
  authDomain: 'druglist-c8e3e.firebaseapp.com',
  databaseURL: 'https://druglist-c8e3e.firebaseio.com',
  projectId: 'druglist-c8e3e',
  storageBucket: 'druglist-c8e3e.appspot.com',
  messagingSenderId: '387963534533',
  appId: '1:387963534533:web:57dd2963a4c0c33326c4ac',
  measurementId: 'G-L8368S09J2',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export { firebase };
