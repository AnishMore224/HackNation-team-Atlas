// Import the CSS module
import styles from './Education.module.css';

// Define the component
export default function Education() {
    return (
        <div className={styles.container}>
            <h3>👋 Welcome to Study Together! Tell us about yourself!</h3>
            <p>
                Tell us about yourself, so that we can recommend you personalized study
                rooms and friends later on!
            </p>
            <div className={styles.progress}>
                <div className={styles.progressBar}></div>
            </div>
            <div>
                <b style={{ fontSize: '24px' }}>Are you a High School or University Student? 📚</b>
                <br /><br />
                <input type="radio" name="edu" id="highschool" className={styles.radioInput} /><label htmlFor="highschool" className={styles.radioLabel}>High School</label>
                <br />
                <input type="radio" name="edu" id="university-bachelor" className={styles.radioInput} /><label htmlFor="university-bachelor" className={styles.radioLabel}>University (Bachelor)</label>
                <br />
                <input type="radio" name="edu" id="university-master" className={styles.radioInput} /><label htmlFor="university-master" className={styles.radioLabel}>University (Master)</label>
                <br />
                <input type="radio" name="edu" id="else" className={styles.radioInput} /><label htmlFor="else" className={styles.radioLabel}>Else</label>
            </div>
            
            <hr />
            <div>
                <a id="skip" className={`${styles.btn} ${styles.skip}`} href="/country" role="button">Skip</a>
                <a id="next" className={`${styles.btn} ${styles.next}`} href="/country" role="button">Next </a>
            </div>
        </div>
    );
}
