import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyDtiGl_DXJHzt6gvcBIw0eml2BuAgVpo88",
        authDomain: "crwn-db-4cf11.firebaseapp.com",
        databaseURL: "https://crwn-db-4cf11.firebaseio.com",
        projectId: "crwn-db-4cf11",
        storageBucket: "crwn-db-4cf11.appspot.com",
        messagingSenderId: "1062238087412",
        appId: "1:1062238087412:web:3c28dd92fa1425c00916a1",
        measurementId: "G-G3ZT64ZTQX"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
    
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
