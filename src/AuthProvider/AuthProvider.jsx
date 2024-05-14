import { createContext,  useState } from "react";
import auth from "../Firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useEffect } from "react";
import { toast } from "react-toastify";
export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // create user with email and password

  const create_user_with_email = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // signIn with email and password

  const signIn_with_email = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login with google
  const signIn_Google = () => {
    return signInWithPopup(auth, provider);
  };

  // update profile
  const update_profile = (name, imgURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imgURL,
    });
  };
  // forget/reset user password
  const update_password = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        return {message: true}
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return {errorCode,errorMessage}
        // ..
      });
  }
  // Email verification
  const email_verify=()=>{
    sendEmailVerification(auth.currentUser)
    .then(() => {
      return {code: "successful"}
    });
  }

  // sign Out
  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log(currentUser);
        setUser(currentUser);
        setLoading(false);
      } else {
        console.log("no user");
        setUser(false)
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user]);

  const info = {
    signIn_Google,
    update_profile,
    create_user_with_email,
    signIn_with_email,
    logOut,
    signInWithPopup,
    user,
    loading,
    update_password,
    email_verify,
    sendEmailVerification
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};
export default AuthProvider;