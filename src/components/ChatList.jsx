import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { ChatBox } from "./ChatBox";
import { useSelector } from "react-redux";
import {
  Avatar,
  //   Icon,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

export const ChatList = (props) => {
  const { activeChats, setActiveChats } = props;
  const [chatUsers, setChatUsers] = useState(null);

  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    if (!chatUsers && users) {
      setChatUsers(users.map((user) => ({ ...user, messages: [] })));
    }
  }, [users, chatUsers]);

  const useStyles = makeStyles(() => ({
    chatListImage: {
      height: "38px",
      width: "38px",
      borderRadius: "19px",
    },
    onlineStatus: {
      height: "7px",
      width: "7px",
      borderRadius: "4px",
      backgroundColor: "#4FAC60",
    },
  }));

  const handleChatSelection = (user) => {
    if (activeChats && activeChats.length) {
      const openChats = [...activeChats];
      if (!openChats.filter((chat) => chat.id === user.id).length) {
        openChats.push(user);
        if (openChats.length > 3) {
          const chatsToRemove = openChats.length - 3;
          for (let i = 0; i < chatsToRemove; i++) {
            openChats.shift();
          }
        }
        setActiveChats(openChats);
      }
    } else {
      setActiveChats([user]);
    }
  };

  const renderChatList = () => {
    return (
      <List>
        {users && users.length
          ? users.map((user, userIndex) => (
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <div className={classes.onlineStatus}></div>
                  </IconButton>
                }
                onClick={() => handleChatSelection(user)}
                key={`chatbox-${userIndex}`}
                sx={{
                  cursor: "pointer",
                }}
              >
                <ListItemAvatar>
                  <Avatar>
                    <img
                      src={user.profilepicture}
                      alt={user.name}
                      className={classes.chatListImage}
                    />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={user.name} />
              </ListItem>
            ))
          : null}
      </List>
    );
  };

  const classes = useStyles();
  return (
    <div className={classes.chatList}>
      <ChatBox
        title={"Chats"}
        isUserChat={false}
        users={chatUsers}
        activeChats={activeChats}
        setActiveChats={setActiveChats}
        handleChatSelection={handleChatSelection}
        renderChatList={renderChatList}
      />
    </div>
  );
};
