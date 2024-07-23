import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBzpWwViwravFmExGxe0V1du9I_OrBSKgY",
  authDomain: "netfix-clone-a5337.firebaseapp.com",
  projectId: "netfix-clone-a5337",
  storageBucket: "netfix-clone-a5337.appspot.com",
  messagingSenderId: "900660073096",
  appId: "1:900660073096:web:25f5fdb8221d16103e053d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    console.log("User document created in Firestore.");
  } catch (error) {
    console.error("Error signing up:", error);
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in successfully.");
  } catch (error) {
    console.error("Error logging in:", error);
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
};

const logout = () => {
  signOut(auth).then(() => {
    console.log("User signed out successfully.");
  }).catch((error) => {
    console.error("Error signing out:", error);
    alert(error.message);
  });
};

export {
  auth,
  db,
  login,
  signup,
  logout
};
