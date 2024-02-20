import classes from "./ChartRoomCard.module.css";
import LessThan from "../icons/chevron-left-icon";
import styles from "../ui/button.module.css";
import Link from "next/link";
function ChartRoomCard({room_no,name}) {
  return (
    <>
      <div className={classes.outer}>
        <div className={classes.cardOuter}>
          <div className={classes.cardOuterUp}>
            <div className={classes.online}>
              <div className={classes.green1}></div>
              <p>Live</p>
            </div>
            <div className={classes.cardTitle}>{name}</div>
          </div>
          <div className={classes.symbol}></div>
          <div className={classes.cardOuterDown}>
            <div className={classes.cardOuterDownContent}>
              <p>Join and start right away with the community</p>
            </div>
            <div className={classes.symbol}>
              <Link href={`https://study-buddy-rooms.onrender.com/?meetingID=${room_no}`} className={styles.btn}>
                <LessThan />
                <span>Join</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ChartRoomCard;
