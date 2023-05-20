import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import { UserListItem } from "./UserListItem";
import List from "@mui/material/List";

export const UserList = (props) => {
  const { users } = props;

  const useStyles = makeStyles((theme) => ({
    usersListContainer: {
      borderRadius: "30px",
      overflow: "auto",
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    console.log(users);
  }, [users]);
  return (
    <Paper
      classes={classes.usersListContainer}
      className="user-list-container"
      elevation={4}
    >
      <div className="users-title">Select an account</div>
      <Paper classes={classes.usersList} elevation={0}>
        {users ? (
          <List>
            {users.map((user, index) => (
              <UserListItem
                userName={user.name}
                profilePhotoURL={user.profilepicture}
              />
            ))}
          </List>
        ) : (
          <></>
        )}
      </Paper>
    </Paper>
  );
};
