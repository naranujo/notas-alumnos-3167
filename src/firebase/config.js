import app from 'firebase/app'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB7rS2AiqHz7R2z-SjEfDfXGmgtbODca3E",
    authDomain: "notas-alumnos-3167.firebaseapp.com",
    projectId: "notas-alumnos-3167",
    storageBucket: "notas-alumnos-3167.appspot.com",
    messagingSenderId: "335290001130",
    appId: "1:335290001130:web:6b3f162e5352555a15d993"
};

app.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const storage = firebase.storage()
export const db = firebase.firestore()
