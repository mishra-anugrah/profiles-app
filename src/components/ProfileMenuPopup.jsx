import {
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

export const ProfileMenuPopup = (props) => {
  const { userData } = props;

  const useStyles = makeStyles(() => ({
    popupMenu: {
      width: "320px",
      height: "420px",
      position: "fixed",
      top: "13%",
      left: "calc(100% - 377px)",
      padding: "30px",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    popupMenuProfilePicture: {
      height: "96px",
      width: "96px",
      borderRadius: "48px",
    },
    popupUserName: {
      color: "#545454",
      fontSize: "18px",
    },
    popupUserEmail: {
      color: "#9A9A9A",
      fontSize: "16px",
    },
    popupUsersAvatar: {
      "& img": {
        height: "100%",
        width: "100%",
      },
    },
    popupMenuItem: {
      marginBottom: "10px",
    },
    popupMenuUsersList: {
      display: "flex",
      flexDirection: "column",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Paper
        className={classes.popupMenu}
        sx={{ borderRadius: "30px" }}
        elevation={12}
      >
        <img
          src={userData.profilepicture}
          alt={userData.name}
          className={`${classes.popupMenuProfilePicture} ${classes.popupMenuItem}`}
        />
        <span className={`${classes.popupUserName} ${classes.popupMenuItem}`}>
          {userData.name}
        </span>
        <span className={`${classes.popupUserEmail} ${classes.popupMenuItem}`}>
          {userData.email}
        </span>
        <Divider flexItem variant="fullWidth" />
        <div className={classes.popupMenuUsersList}>
          <List disablePadding>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={`${classes.popupUsersAvatar}`}>
                  <img src={userData.profilepicture} alt={userData.name} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>{userData.name}</ListItemText>
            </ListItem>

            <Divider
              flexItem
              variant="fullWidth"
              sx={{
                position: "relative",
                left: "-21%",
                width: "144%",
              }}
            />

            <ListItem>
              <ListItemAvatar>
                <Avatar className={`${classes.popupUsersAvatar}`}>
                  <img src={userData.profilepicture} alt={userData.name} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>{userData.name}</ListItemText>
            </ListItem>
          </List>
          <Button
            variant="contained"
            className={classes.signoutButton}
            sx={{
              backgroundColor: "#D55151",
              borderRadius: "20px",
              width: "75%",
            }}
          >
            Sign out
          </Button>
        </div>
      </Paper>
    </>
  );
};
