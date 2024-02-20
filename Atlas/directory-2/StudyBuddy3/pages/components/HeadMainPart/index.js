"use client"
import React from "react";
import Link from "next/link";
import PLUS from "../../../src/app/components/icons/plus-icon";
import classes from "../../../src/app/components/ui/button.module.css";
import styles from "./HeadMainPart.module.css";

async function MainPartDashboard({ disp }) {
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.leftContainer}>
            <div className={classes.slogan}>
              <h2>{disp}</h2>
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
    </>
  );
}

export default MainPartDashboard;
