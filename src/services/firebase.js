// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUwp-LqQBo7XcTz0xQ8oNBNhwloNMdFvg",
  authDomain: "noteapp-e8575.firebaseapp.com",
  projectId: "noteapp-e8575",
  storageBucket: "noteapp-e8575.appspot.com",
  messagingSenderId: "95083497289",
  appId: "1:95083497289:web:7c6835b30069813ce9bc98",
  measurementId: "G-EV0NHX65HL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app)


const googleProvider = new GoogleAuthProvider();

const signInWithPopupGoogle = async ()=>{
  try{
    const res = await signInWithPopup(auth,googleProvider)
    const user = res.user;
    const q = query(collection(db,"users"),where("uid","==",user.uid))
    const doc = await getDocs(q);
    

    if (doc.docs.length==0){
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email
    })
  }


  }
  catch(err)
{
  console.error(err)
}
}

const getNotes = async () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged( auth, async (user) => {
      try {
        if (user) {
          
          const id = await searchByUID(user.uid)

          const q = query(collection(db, `users/${id}/notes`));
          const querySnapshot = await getDocs(q);
          const notes = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
          console.log(`users/${id}/notes`)
          resolve(notes);
        } else {
          console.log("No user is currently signed in.");
          resolve([1]); // Return an empty array if no user is signed in
        }
      } catch (error) {
        console.error("Error fetching notes:", error);
        reject(error); // Reject with error if any occurs
      } finally {
        unsubscribe(); // Unsubscribe from onAuthStateChanged
      }
    });
  });
};

const logout=()=>{
  signOut(auth)
}

const searchByUID = async (uid) => {
  const q = query(collection(db, "users"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  // querySnapshot.forEach((doc) => {
  //   return(doc.id);
  // });
  return querySnapshot.docs[0].id
};


const XSignInWithEmail = async(email,pass)=>{
  try {
    const name = await signInWithEmailAndPassword(auth, email, pass);
    const user = name.user;
    const q = query(collection(db,"users"),where("uid","==",name.user.uid))
    const doc = await getDocs(q);
    console.log(doc)
    if (doc.docs.length==0){
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email
    })
  }
  } catch (err) {
    console.error(err);
    return(err)
  }
}


export {signInWithPopupGoogle,auth,getNotes,logout,XSignInWithEmail}