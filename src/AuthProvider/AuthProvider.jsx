import { createContext, useState, useEffect } from "react";
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
import PropTypes from "prop-types";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user with email and password
  const createUserWithEmail = async (email, password) => {
    try {
      return createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      return { errorCode: error.code, errorMessage: error.message };
    }
  };

  // signIn with email and password
  const signInWithEmail = async (email, password) => {
    try {
      return signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      return { errorCode: error.code, errorMessage: error.message };
    }
  };

  // login with google
  const signInWithGoogle = async () => {
    try {
      return signInWithPopup(auth, provider);
    } catch (error) {
      return { errorCode: error.code, errorMessage: error.message };
    }
  };

  // update profile
  const updateProfileInfo = async (name, imgURL) => {
    try {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: imgURL,
      });
    } catch (error) {
      return { errorCode: error.code, errorMessage: error.message };
    }
  };

  // forget/reset user password
  const resetUserPassword = async (email) => {
    try {
      return sendPasswordResetEmail(auth, email);
    } catch (error) {
      return { errorCode: error.code, errorMessage: error.message };
    }
  };

  // Email verification
  const sendVerificationEmail = async () => {
    try {
      return sendEmailVerification(auth.currentUser);
    } catch (error) {
      return { errorCode: error.code, errorMessage: error.message };
    }
  };

  // sign Out
  const logOut = async () => {
    setLoading(true);
    try {
      return signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    signInWithGoogle,
    updateProfileInfo,
    createUserWithEmail,
    signInWithEmail,
    logOut,
    user,
    loading,
    resetUserPassword,
    sendVerificationEmail,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;

