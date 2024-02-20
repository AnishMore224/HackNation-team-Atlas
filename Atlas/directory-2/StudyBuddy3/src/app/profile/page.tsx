import React from "react";
import styles from "./ProfilePart.module.css";
import Image from "next/image"; // Import Image from Next.js

function ProfilePart() {
  return (
    <div className={styles.outer}>
      <div className={styles.profile}>
        <div className={styles.top}>Profile</div>
        <div className={styles.details}>
          <div className={styles.pic}>
            <p>P</p>
          </div>
          <div className={styles.name}>
            <h3>Priyanshu Gupta</h3>
            <p>Expert (20-40h)</p>
          </div>
        </div>
        <h1 />

        <div className={styles.points}>
          <div className={styles.box1}>
            <p>0</p>
            <p>points</p>
          </div>
          <div className={styles.box2}>
            <p>0</p>
            <p>Friends</p>
          </div>
        </div>

        <div className={styles.country}>
          <div className={styles.box3}>
            <p>Level Of Education</p>
            <p>High School</p>
          </div>
          <div className={styles.box4}>
            <p>Country</p>
            <p>India</p>
          </div>
        </div>
      </div>
      <div className={styles.img}>
        <Image
          src="/graph.png"
          alt="graph"
          height={500}
          width={800} // Adjust width to match the actual image width
          className={styles.Image}
        />
      </div>
    </div>
  );
}

export default ProfilePart;
