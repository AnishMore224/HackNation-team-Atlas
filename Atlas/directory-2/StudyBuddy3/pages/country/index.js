import React from "react";
import globe from "../../src/app/components/icons/globe";
import styles from "./Country.module.css";
import screenshot from "./Screenshot (312).png"; // Import the image file

export default function Home() {
    return (
        <>
            <div className={styles.container}>
                <h3>👋 Welcome to Study Buddy! Tell us about yourself!</h3>
                <p>
                    Tell us about yourself, so that we can recommend personalized study
                    rooms and friends later on!
                </p>
                <div className={styles.progress}>
                    <div className={styles.progressBar}></div>
                </div>
                <div>
                    <b style={{ fontSize: '24px' }}>
                        Great! Thank you!
                        <br />
                        And where are you from? 🌍
                    </b>
                    <br /><br />
                    <input type="text" placeholder="Please enter your country" className={styles.inputText} />
                </div>
                <div className={styles.image}>
                    <globe /> {/* Assuming globe is a component */}
                </div>
                
                <hr />
                <div>
                    <a id="skip" className={`${styles.btn} ${styles.skip}`} href="/education" role="button">Back</a>
                    <a id="next" className={`${styles.btn} ${styles.next}`} href="/signin" role="button">Next</a>
                </div>
            </div>
        </>
    );
}
