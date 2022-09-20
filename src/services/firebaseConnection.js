import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBcuAu9rIPuh66ZOjhg0NJLQ656p6Nah-A",
    authDomain: "infoglobo-project.firebaseapp.com",
    projectId: "infoglobo-project",
    storageBucket: "infoglobo-project.appspot.com",
    messagingSenderId: "313605982736",
    appId: "1:313605982736:web:be9538c0f6036abc875895",
    measurementId: "G-GBPBY42E1M"
  };

  if(!firebase.apps.length){ //Verificando se existe um banco de dados
    firebase.initializeApp(firebaseConfig);
  }
  
  // Initialize Firebase
  export default firebase