import { initializeApp } from "firebase/app";
import { getFirestore} from '@firebase/firestore'

const firebaseConfig = {
   apiKey: "AIzaSyDPZ1DmM2oOOLtZpE_KktkZsUgWR4Ev8Mo",
   authDomain: "tez-sat-be6e8.firebaseapp.com",
   projectId: "tez-sat-be6e8",
   storageBucket: "tez-sat-be6e8.appspot.com",
   messagingSenderId: "442601903828",
   appId: "1:442601903828:web:c2c5a7f4a8eb4d0b350d41"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)