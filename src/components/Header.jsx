import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Divider, Paper } from "@mui/material";
import { ProfileMenuPopup } from "./ProfileMenuPopup";

export const Header = (props) => {
  const { currentPage, userData } = props;
  const [heading, setHeading] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState();

  useEffect(() => {
    if (currentPage) {
      const head = currentPage[0].toUpperCase() + currentPage.slice(1);
      setHeading(head);
    }
  }, [currentPage]);

  const useStyles = makeStyles(() => ({
    headerContainer: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "30px",
    },
    pageName: {
      fontSize: "21px",
      color: "#545454",
      textAlign: "left",
      fontWeight: "500",
    },
    profileMenuContainer: {
      display: "flex",
      alignItems: "center",
      columnGap: "10px",
      cursor: "pointer",
      "& span": {
        fontSize: "18px",
        color: "#545454",
      },
    },
    headerProfileImage: {
      height: "36px",
      width: "36px",
      borderRadius: "18px",
    },
  }));

  const classes = useStyles();

  const handleProfileHeaderClick = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <>
      <div className={classes.headerContainer}>
        <div className={classes.pageName}>{heading}</div>
        <div
          className={classes.profileMenuContainer}
          onClick={handleProfileHeaderClick}
        >
          <img
            src={userData.profilepicture}
            alt={userData.name}
            className={classes.headerProfileImage}
          />
          <span>{userData.name}</span>
        </div>
      </div>
      {showProfileMenu ? <ProfileMenuPopup userData={userData} /> : <></>}
      <Divider />
    </>
  );
};
