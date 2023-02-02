import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDfaaClqcJLfbFgPNg3LqlaKSZzXoY2ueQ",
//     authDomain: "share-it-8783f.firebaseapp.com",
//     projectId: "share-it-8783f",
//     storageBucket: "share-it-8783f.appspot.com",
//     messagingSenderId: "940512152583",
//     appId: "1:940512152583:web:d674ba36771ab43b1aaea2"
//   };

const firebaseConfig = {
  apiKey: "AIzaSyCZH4__tb5Rh_p4_xLkuKAT5VAp5g229OM",
  authDomain: "shareme-feb50.firebaseapp.com",
  projectId: "shareme-feb50",
  storageBucket: "shareme-feb50.appspot.com",
  messagingSenderId: "730487349561",
  appId: "1:730487349561:web:d2e4ba3b965e061765c8e8",
  measurementId: "G-DG1VWYW98P",
};

// export const createUserProfileDocument = async (userAuth, additionalData) => {

//   if(!userAuth) return;

//   const userRef = firestore.doc(`users/${userAuth.uid }`);

//   const snapShot = await userRef.get();

//   if(!snapShot.exists) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date ();

//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createdAt,
//         ...additionalData
//       })
//     } catch (error) {
//       console.log("error creating user:", error.message);
//     }
//   }

//   return userRef;
// }

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
