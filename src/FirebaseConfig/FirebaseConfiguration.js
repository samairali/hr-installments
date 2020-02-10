import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBoVjjpGRYqyapUDnFTjOR_X-Azs1h6UJk",
    authDomain: "hrinstallments.firebaseapp.com",
    databaseURL: "https://hrinstallments.firebaseio.com",
    projectId: "hrinstallments",
    storageBucket: "hrinstallments.appspot.com",
    messagingSenderId: "715794924308",
    appId: "1:715794924308:web:33a2010d369d9afa8af801"
  };
  // Initialize Firebase
  var firebaseDatabase = firebase.initializeApp(firebaseConfig);
  export default firebaseDatabase;