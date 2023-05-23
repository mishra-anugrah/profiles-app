import React from "react";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import { UserListItem } from "./UserListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

export const UserList = (props) => {
  const { users } = props;

  const useStyles = makeStyles(() => ({
    usersListContainer: {
      borderRadius: "30px",
      height: "560px",
      width: "602px",
    },
    usersTitle: {
      backgroundColor: "#F6F6F6",
      height: "108px",
      fontSize: "21px",
      color: "#545454",
      lineHeight: "108px",
      textAlign: "center",
      fontWeight: "500",
      borderRadius: "30px 30px 0 0",
      // overflow: "auto",
    },
    usersList: {
      height: "425px",
      overflow: "auto",
      padding: "0 15px",
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

  const classes = useStyles();

  return (
    <Paper
      className={classes.usersListContainer}
      sx={{ borderRadius: "30px" }}
      elevation={4}
    >
      <div className={classes.usersTitle}>Select an account</div>
      <Paper
        className={classes.usersList}
        sx={{ borderRadius: "30px" }}
        elevation={0}
      >
        {users ? (
          <List>
            {users.map((user, index) => (
              <>
                <Link
                  to={`user/${user.id}/profile`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <UserListItem
                    userName={user.name}
                    profilePhotoURL={user.profilepicture}
                  />
                </Link>
                {index === users.length - 1 ? (
                  <></>
                ) : (
                  <Divider variant="middle" />
                )}
              </>
            ))}
          </List>
        ) : (
          <></>
        )}
      </Paper>
    </Paper>
  );
};
