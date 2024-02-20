import { useState } from "react";
import styles from "./Signup.module.css";
import { CollectionReference, DocumentData, addDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { signIn } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleGitHubSignIn = async (e) => {
    e.preventDefault();
    await signIn("github");
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    await signIn("google");
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const credentials = { username, password };
      const querySnapshot = await getDocs(collection(db, "users"));

      for (const doc of querySnapshot.docs) {
        console.log(
          doc.id,
          " => ",
          doc.data(),
          " => ",
          doc.data().username,
          " => ",
          doc.data().password
        );

        if (doc.data().username == credentials.username) {
          alert("User already exists");
          console.error("User already exists");
          setPassword("");
          setUsername("");
          return;
        }
      }

      await addDoc(collection(db, "users"), { username, password });
      setPassword("");
      setUsername("");

      console.log("User added to Firestore");
    } catch (error) {
      console.error("Error adding user to Firestore:", error);
    }
  };

  return (
    <div className={styles.SigninBody}>
      <div className={styles.form}>
        <div>
          <h2 className={styles.heading}>Sign Up to your account</h2>
        </div>
        <button onClick={handleGitHubSignIn} className={styles.button}>
          <FontAwesomeIcon icon={faGithub} />{" "}
          <span className={styles.buttonText}>Sign in with GitHub</span>
        </button>

        <button onClick={handleGoogleSignIn} className={styles.button}>
          <FontAwesomeIcon icon={faGoogle} />{" "}
          <span className={styles.buttonText}>Sign in with Google</span>
        </button>
        <form className={styles.form} onSubmit={handleSignUp}>
          <div className={styles.inputGroup}>
            <label htmlFor="username" className={styles.label}>
              Username
            </label>
            <input
              id="username"
              type="text"
              className={styles.input}
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              id="password"
              type="password"
              className={styles.input}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit" className={styles.button}>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
