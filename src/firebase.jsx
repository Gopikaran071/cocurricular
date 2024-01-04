import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDbh8VVeGUB2sEL_0GgImd-Y_MNDRnDoiI",
    authDomain: "co-curricular-bd604.firebaseapp.com",
    projectId: "co-curricular-bd604",
    storageBucket: "co-curricular-bd604.appspot.com",
    messagingSenderId: "43930288408",
    appId: "1:43930288408:web:83c6e676795d82c41b1e6d",
    measurementId: "G-7J5XHC5TZB"
  };

  const app = initializeApp(firebaseConfig);
  export const db=getFirestore(app);