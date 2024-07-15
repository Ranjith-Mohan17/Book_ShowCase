import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBIY41CvCaRYmKbHdDejKqdHaEo-gRXSVQ",
  authDomain: "book-show-42a2b.firebaseapp.com",
  projectId: "book-show-42a2b",
  storageBucket: "book-show-42a2b.appspot.com",
  messagingSenderId: "722870540411",
  appId: "1:722870540411:web:908c816d8f5b3c3dbd2ade"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {auth,provider};