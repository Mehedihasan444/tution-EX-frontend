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
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      return { errorCode: error.code, errorMessage: error.message };
    }
  };

  // signIn with email and password
  const signInWithEmail = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      return { errorCode: error.code, errorMessage: error.message };
    }
  };

  // login with google
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      return { errorCode: error.code, errorMessage: error.message };
    }
  };

  // update profile
  const updateProfileInfo = async (name, imgURL) => {
    try {
      await updateProfile(auth.currentUser, {
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
      await sendPasswordResetEmail(auth, email);
      return { message: true };
    } catch (error) {
      return { errorCode: error.code, errorMessage: error.message };
    }
  };

  // Email verification
  const sendVerificationEmail = async () => {
    try {
      await sendEmailVerification(auth.currentUser);
      return { code: "successful" };
    } catch (error) {
      return { errorCode: error.code, errorMessage: error.message };
    }
  };

  // sign Out
  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
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
    logout,
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



// import { createContext, useState } from "react";
// import auth from "../Firebase/firebase.config";
// import {
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   sendEmailVerification,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
//   updateProfile,
//   sendPasswordResetEmail,
// } from "firebase/auth";
// import { useEffect } from "react";

// import PropTypes from "prop-types";

// export const AuthContext = createContext(null);
// const provider = new GoogleAuthProvider();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // create user with email and password

//   const create_user_with_email = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };
//   // signIn with email and password

//   const signIn_with_email = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   // login with google
//   const signIn_Google = () => {
//     return signInWithPopup(auth, provider);
//   };

//   // update profile
//   const update_profile = (name, imgURL) => {
//     return updateProfile(auth.currentUser, {
//       displayName: name,
//       photoURL: imgURL,
//     });
//   };
//   // forget/reset user password
//   const update_password = (email) => {
//     sendPasswordResetEmail(auth, email)
//       .then(() => {
//         return { message: true };
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         return { errorCode, errorMessage };
//         // ..
//       });
//   };
//   // Email verification
//   const email_verify = () => {
//     sendEmailVerification(auth.currentUser).then(() => {
//       return { code: "successful" };
//     });
//   };

//   // sign Out
//   const logOut = () => {
//     setLoading(true);
//     return signOut(auth);
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       if (currentUser) {
//         console.log(currentUser);
//         setUser(currentUser);
//         setLoading(false);
//       } else {
//         console.log("no user");
//         setUser(false);
//       }
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, [user]);

//   const info = {
//     signIn_Google,
//     update_profile,
//     create_user_with_email,
//     signIn_with_email,
//     logOut,
//     signInWithPopup,
//     user,
//     loading,
//     update_password,
//     email_verify,
//     sendEmailVerification,
//   };

//   return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
// };
// export default AuthProvider;

// AuthProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };
