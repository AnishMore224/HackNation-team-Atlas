// "use client"
import React from "react";
import Sidebar from "../components/sidebar";
import styles from "./experts.module.css";
import MainPartDashboard from "../components/DashBoardComponents/HeadMainPart";
import ChartRoomCard from "../components/DashBoardComponents/ChartRoomCard";
function ChatRoom() {
  const numcards = 4;
  const arr=["Calculus","Algoritm Design","Python","Digital Logic Design"]
  const globalStyles = `
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: "Open Sans", "Lato", sans-serif;
      color: #414141;
      background-color: #e4f1f1;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    .center {
      margin: auto;
      text-align: center;
    }
    
  `;
  return (
    <>
      <style>{globalStyles}</style>
      <div className={styles.dashboardContainer}>
        <div className={styles.sidebarContainer}>
          <Sidebar />
        </div>
        <div className={styles.mainPart}>
          <MainPartDashboard disp={"Ask from Experts"} />
          <h4 className={styles.h6}>Ask from Experts</h4>
          <div className={styles.mainContentContainer}>
            {[...Array(numcards)].map((_, index) => (
              <ChartRoomCard key={index} room_no={880} name={arr[index]} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatRoom;
