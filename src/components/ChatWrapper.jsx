import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { ChatList } from "./ChatList";
import { ChatBox } from "./ChatBox";

export const ChatWrapper = (props) => {
  const [activeChats, setActiveChats] = useState(null);

  const useStyles = makeStyles(() => ({
    chatWrapper: {
      display: "flex",
      flexDirection: "row-reverse",
      height: "50px",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.chatWrapper}>
      <ChatList activeChats={activeChats} setActiveChats={setActiveChats} />
      {activeChats && activeChats.length
        ? activeChats.map((chat, chatIndex) => (
            <ChatBox title={chat.name} isUserChat={true} />
          ))
        : null}
    </div>
  );
};
