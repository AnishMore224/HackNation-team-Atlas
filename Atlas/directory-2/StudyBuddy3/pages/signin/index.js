import styles from "./Login.module.css";
import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleGitHubSignIn = async (e) => {
    e.preventDefault();
    await signIn("github");
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    await signIn("google");
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      router.push("/dashboard");
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };
  return (
    <div className={styles.LoginBody}>
      <div className={styles.form}>
        <div>
          <h2 className={styles.heading}>Log in to your account</h2>
        </div>
        <button onClick={handleGitHubSignIn} className={styles.button}>
          <FontAwesomeIcon icon={faGithub} />{" "}
          <span className={styles.buttonText}>Sign in with GitHub</span>
        </button>

        <button onClick={handleGoogleSignIn} className={styles.button}>
          <FontAwesomeIcon icon={faGoogle} />{" "}
          <span className={styles.buttonText}>Sign in with Google</span>
        </button>

        <form className={styles.form} onSubmit={handleSignIn}>
          <div className={styles.inputGroup}>
            <label htmlFor="username" className={styles.label}>
              User Name
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
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
