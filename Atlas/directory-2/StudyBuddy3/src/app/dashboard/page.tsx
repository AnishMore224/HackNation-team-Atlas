// Dashboard.jsx
import React, { useState, useEffect } from "react";
import Sidebar from "../components/sidebar";
import MainPartDashboard from "../components/DashBoardComponents/HeadMainPart";
import styles from "./dashboard.module.css";
import ChartRoomCard from "../components/DashBoardComponents/ChartRoomCard";
import { CollectionReference, DocumentData, addDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import PLUS from "../components/icons/plus-icon";
import classes from "../components/ui/button.module.css";

async function fetchRoomData() {
  const querySnapshot = await getDocs(collection(db, "rooms"));
  let c = 0;
  querySnapshot.forEach((doc) => {
    c++;
  });
  return c;
}
const arr=["Calculus","Algoritm Design","Python","Digital Logic Design"]
function Dashboard() {
  const numcards = 4;
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
          <MainPartDashboard disp={"Enjoy your study session!"}/>
          
          <div className={styles.mainContentContainer}>
            {[...Array(numcards)].map((_, index) => (
              <ChartRoomCard key={index} room_no={Math.random} name={arr[index]}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
