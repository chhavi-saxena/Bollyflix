import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_RhiCPPWdHHt2Ggn-ZnOb1gTFHxsnJ2U",
    authDomain: "netflix-clone-58a61.firebaseapp.com",
    projectId: "netflix-clone-58a61",
    storageBucket: "netflix-clone-58a61.appspot.com",
    messagingSenderId: "144243182725",
    appId: "1:144243182725:web:a613c1e359309e85122dec",
    measurementId: "G-VWH792WJNS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;