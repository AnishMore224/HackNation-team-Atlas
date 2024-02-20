// pages/leaderboard.tsx

import React from "react";
import styles from "./leaderboard.module.css"; // Import CSS module for styling
import Sidebar from "../components/sidebar";
import MainPartDashboard from "../components/leaderboardComponent/HeadMainPart";

interface User {
  id: number;
  name: string;
  score: number;
}

const defaultUsers: User[] = [
  { id: 1, name: "John Doe", score: 100 },
  { id: 2, name: "Jane Smith", score: 90 },
  { id: 3, name: "Alice Johnson", score: 80 },
  { id: 4, name: "Bob Brown", score: 70 },
  { id: 5, name: "Charlie Davis", score: 60 },

  // Add more users as needed
];

const LeaderboardPage: React.FC = () => {
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
          <h2 className={styles.h3}>Leaderboard</h2>
          <div className={styles.usersContainer}>
            {defaultUsers.map((user) => (
              <div key={user.id} className={styles.user}>
                <span className={styles.userId}>{user.id}</span>
                <span className={styles.userName}>{user.name}</span>
                <span className={styles.userScore}>{user.score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderboardPage;
