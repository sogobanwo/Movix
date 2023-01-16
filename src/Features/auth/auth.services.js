import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../FirebaseConfig";
import { toast } from "react-toastify";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const registerUser = async (values) => {
  try {
    const { email, password } = values;
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    // updateProfile(auth.currentUser, {
    //   displayName: name,
    // })

    const formData = { ...values };
    delete formData.password;
    formData.timestamp = serverTimestamp();

    await setDoc(doc(db, "users", user.uid), formData);

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
    return user;
  } catch (error) {
    const toastError = error.message.split("/")[1];
    toast.error(toastError);
  }
};

export const LoginUser = async (values) => {
  try {
    const { email, password } = values;
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    
  } catch (error) {
    const toastError = error.message.split("/")[1];
    toast.error(toastError);
  }
};
