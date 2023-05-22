import React from "react";
import { ProfileFieldsGroup } from "./ProfileFieldsGroup";
import { profilesGroupsConfig } from "../config/groupsConfig";

import Divider from "@mui/material/Divider";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const Profile = (props) => {
  const { userId } = useParams();

  const userData = useSelector((state) => {
    const allusers = state.users.users;
    return allusers.filter((item) => item.id === Number(userId))[0];
  });

  const useStyles = makeStyles(() => ({
    profileContainer: {
      display: "flex",
      width: "100%",
      padding: "40px 0",
    },
    profileSection: {
      padding: "0 30px 0 0",
    },
    profileLeft: {
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      alignItems: "stretch",
      flexWrap: "wrap",
      wordBreak: "break-word",
      flexBasis: "33.5%",
    },
    profileRight: {
      flexBasis: "60%",
      padding: "0 0 0 30px",
    },
    divider: {
      backgroundColor: "#eeeeee",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <div className={classes.profileContainer}>
        <div className={`${classes.profileSection} ${classes.profileLeft}`}>
          <ProfileFieldsGroup
            groupConfig={profilesGroupsConfig[0]}
            userData={userData}
          />
          <Divider className={classes.divider} variant="middle" />
          <ProfileFieldsGroup
            groupConfig={profilesGroupsConfig[1]}
            userData={userData}
          />
        </div>
        <Divider orientation="vertical" flexItem className={classes.divider} />
        <div className={`${classes.profileSection} ${classes.profileRight}`}>
          <ProfileFieldsGroup
            groupConfig={profilesGroupsConfig[2]}
            userData={userData}
            alignTitle="left"
          />
        </div>
      </div>
    </>
    // <>
    //   {profilesGroupsConfig.map((groupConfig, groupIndex) => (
    //     <ProfileFieldsGroup
    //       key={`profilegroup${groupIndex}`}
    //       groupConfig={groupConfig}
    //       // groupConfig={profilesGroupsConfig[0]}
    //       userData={userData}
    //     />
    //   ))}
    // </>
  );
};
