import React from "react";
import Link from "next/link";
import PLUS from "../icons/plus-icon";
import classes from "../ui/button.module.css";
import styles from "./HeadMainPart.module.css";
import { getServerSession } from "next-auth/next";
import { options } from "../../api/auth/[...nextauth]/option";

async function MainPartDashboard() {
  let user = null;
  try {
    const session = await getServerSession();
    user = session?.user;
  } catch (error) {
    console.error("Error while fetching session:", error);
  }

  return (
    <>
      {user ? (
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.leftContainer}>
              <div className={styles.heading}>
                <p>Hi {user.name}, ready to join</p>
              </div>
              <div className={classes.slogan}>
                <h2>Enjoy your study session!</h2>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.online}>
              <div className={styles.green}></div>
              <p>11270</p>
              <p>Online</p>
            </div>
            <div className={styles.createNewRoom}>
              <button className={classes.btn}>
                <PLUS />
                <span>Create</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Not logged in</h1>
        </div>
      )}
    </>
  );
}

export default MainPartDashboard;
