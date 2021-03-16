import firebase from 'firebase';
require('@firebase/firestore')


  var firebaseConfig = {
    apiKey: "AIzaSyBQ1VKpXqoKZe2UpD7ozXGEiWNo9CoQJ90",
    authDomain: "green-pin-d24a4.firebaseapp.com",
    projectId: "green-pin-d24a4",
    storageBucket: "green-pin-d24a4.appspot.com",
    messagingSenderId: "896102990892",
    appId: "1:896102990892:web:776ce91568bcee3b7bfd89"
  };



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
