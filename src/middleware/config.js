import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBYnQesRSu38Gi3hR-MJcanzakeKq1Qz1I",
    authDomain: "user-form-c36c1.firebaseapp.com",
    databaseURL: "https://user-form-c36c1.firebaseio.com",
    projectId: "user-form-c36c1",
    storageBucket: "user-form-c36c1.appspot.com",
    messagingSenderId: "302861224466",
    appId: "1:302861224466:web:0219a6649248bae1f0a6cb"
  };

  export default firebase.initializeApp(firebaseConfig);