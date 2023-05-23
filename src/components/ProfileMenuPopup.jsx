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
import { Link } from "react-router-dom";

export const ProfileMenuPopup = (props) => {
  const { userData, otherUsers } = props;

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
      "& a": {
        color: "#545454",
        textDecoration: "none",
      },
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
            <Link to={`user/${otherUsers[0].id}/profile`}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={`${classes.popupUsersAvatar}`}>
                    <img
                      src={otherUsers[0].profilepicture}
                      alt={otherUsers[0].name}
                    />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>{otherUsers[0].name}</ListItemText>
              </ListItem>
            </Link>

            <Divider flexItem variant="fullWidth" />

            <Link to={`user/${otherUsers[1].id}/profile`}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={`${classes.popupUsersAvatar}`}>
                    <img
                      src={otherUsers[1].profilepicture}
                      alt={otherUsers[1].name}
                    />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>{otherUsers[1].name}</ListItemText>
              </ListItem>
            </Link>
          </List>
          <Link to="/">
            <Button
              variant="contained"
              className={classes.signoutButton}
              sx={{
                backgroundColor: "#D55151",
                borderRadius: "20px",
                width: "50%",
                left: "25%",
              }}
            >
              Sign out
            </Button>
          </Link>
        </div>
      </Paper>
    </>
  );
};
