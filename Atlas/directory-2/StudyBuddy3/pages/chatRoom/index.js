import React from "react";
import classes from "./chatRoom.module.css";
import Sidebar from "../../src/app/components/sidebar";
function ChatRoom() {
  return (
    <>
      <div className={classes.mainChat}>
        <Sidebar />
        <div className={classes.chat}>
          <iframe
            src="https://e.widgetbot.io/channels/1209138169123967076/1209138169593995284"
            allow="clipboard-write; fullscreen"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default ChatRoom;
