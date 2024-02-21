import React, { useState, useEffect } from "react";
import Sidebar from "../../src/app/components/sidebar";
import styles from "./solostudy.module.css";
import Picture from "../../src/app/components/icons/picture-icon";
import FullScreen from "../../src/app/components/icons/fullscreen-icon";
import Music from "../../src/app/components/icons/music-icon";
import Stats from "../../src/app/components/icons/stats-icon";
import LeaveRoom from "../../src/app/components/icons/leaveRoom-icon";
import Clock from "react-live-clock";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import MusicOff from "../../src/app/components/icons/music-off";

function SoloStudy() {
  const router = useRouter();
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    window.location.href = "/https://hack-nation-team-atlas.vercel.app/homePage/";
  };

  const handleMusicToggle = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  useEffect(() => {
    // Play music when isMusicPlaying becomes true
    if (isMusicPlaying) {
      const audio = new Audio("/The-Inspiration-mp3(chosic.com).mp3");
      audio.play();
      // Optionally, you can pause the music when isMusicPlaying becomes false
      return () => {
        audio.pause();
      };
    }
  }, [isMusicPlaying]);

  return (
    <>
      <div className={styles.solostudyContainer}>
        <div className={styles.sidebarContainer}>
          <Sidebar />
        </div>
        <div className={styles.mainContentContainer}>
          <div className={styles.upperPanel}>
            <ul className={styles.upperPanelLeft}>
              <li>
                <Clock
                  format={"h:mm:ssa"}
                  style={{ fontSize: "1em" }}
                  ticking={true}
                />
              </li>
              <li>
                <p>Session Goals</p>
              </li>
            </ul>
            <ul className={styles.upperPanelRight}>
              <li>
                <Picture />
              </li>
              <li onClick={handleMusicToggle}>
                {isMusicPlaying ? <Music /> : <MusicOff />}
              </li>
              <li>
                <FullScreen />
              </li>
            </ul>
          </div>
          <div className={styles.LowerPanel}>
            <ul className={styles.LowerPanelLeft}>
              <li>
                <div></div>
                <p>1123</p>
                <p>Studying</p>
              </li>
            </ul>
            <ul className={styles.LowerPanelRight}>
              <li onClick={handleSignOut}>
                <LeaveRoom />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SoloStudy;
