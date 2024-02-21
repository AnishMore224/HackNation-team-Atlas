"use client"
import React from "react";
import Link from "next/link";
import classes from "./sidebar.module.css";
import StudyRooms from "./icons/camera-icon.js";
import DuoStudy from "./icons/duo-icon.js";
import LeaderBoard from "./icons/leaderboard-icon.js";
import SignOut from "./icons/sign-out.js";
import SoloStudy from "./icons/solo-icon.js";
import Chat from "./icons/chat-icon";
import { signOut } from "next-auth/react";
import Experts from "./icons/experts-icon.js";
import User from "./icons/user.js";

const handleSignOut = async () => {
  await signOut();
  window.location.href = "https://hack-nation-team-atlas.vercel.app/homePage/";
};

function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarContent}>
        <ul>
          <li>
            <Link href="/profile" className={classes.link}>

              <User />
              <p>Profile</p>
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className={classes.link}>

              <StudyRooms />
              <p>StudyRooms</p>
            </Link>
          </li>
          <li>
            <Link href="/solostudy" className={classes.link}>
              <SoloStudy />
              <p>SoloStudy</p>
            </Link>
          </li>
          <li>
            <Link href="https://duo-connect.onrender.com/" className={classes.link}>
              <DuoStudy />
              <p>DuoStudy</p>
            </Link>
          </li>
          <li>
            <Link href="/chatRoom" className={classes.link}>
              <Chat />
              <p>Chat Rooms</p>
            </Link>
          </li>
          <li>
            <Link href="/leaderboard" className={classes.link}>
              <LeaderBoard />
              <p>LeaderBoard</p>
            </Link>
          </li>
          <li>
            <Link href="/experts" className={classes.link}>
              <Experts />
              <p>Experts</p>
            </Link>
          </li>
          <li onClick={handleSignOut}>
            <SignOut />
            <p>SignOut</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
