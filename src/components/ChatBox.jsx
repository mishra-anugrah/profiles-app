import { Chat, KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Icon } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

export const ChatBox = (props) => {
  const { title, isUserChat, renderChatList } = props;
  //   const { messages } = props;
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);
  const useStyles = makeStyles(() => ({
    chatBox: {
      width: "260px",
      marginLeft: "30px",
    },
    chatboxTitle: {
      height: "50px",
      backgroundColor: "#2C65C8",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0 10px",
      color: "#fff",
      borderRadius: "10px 10px 0 0",
      cursor: "pointer",
    },
    chatTitleText: {
      flexBasis: "70%",
    },

    chatBody: {
      maxHeight: "260px",
      width: "260px",
      backgroundColor: "red",
    },

    chatBoxBody: {
      border: "1px solid #2C65C8",
      maxHeight: "260px",
      overflow: "auto",
      "&::-webkit-scrollbar": {
        backgroundColor: "#fff",
        width: "16px",
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: "#fff",
      },

      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#d8d8d8",
        borderRadius: "16px",
        border: "5px solid #fff",
      },
    },
  }));

  const handleChatToggle = () => {
    setIsChatBoxOpen(!isChatBoxOpen);
  };

  const classes = useStyles();
  return (
    <div className={classes.chatBox}>
      <div className={classes.chatboxTitle} onClick={handleChatToggle}>
        <Icon sx={{ flexBasis: "15%" }}>
          <Chat />
        </Icon>
        <div className={classes.chatTitleText}>{title}</div>
        <Icon sx={{ flexBasis: "15%" }}>
          {isChatBoxOpen ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
        </Icon>
        {isUserChat ? (
          <Icon>
            <CloseIcon />
          </Icon>
        ) : null}
      </div>
      <div className={classes.chatBoxBody}>
        {isChatBoxOpen ? (
          !isUserChat ? (
            renderChatList()
          ) : (
            <>{/*render message box*/}</>
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
