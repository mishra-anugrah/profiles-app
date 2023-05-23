import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { getValueFromObject } from "../utils";
import { Map } from "./Map";

export const ProfileFieldsGroup = (props) => {
  const { userData, groupConfig, alignTitle } = props;
  const [isUserDetailsGroup, setIsUserDetailsGroup] = useState(false);

  useEffect(() => {
    setIsUserDetailsGroup(groupConfig.isUserDetails);
  }, [groupConfig]);

  const useStyles = makeStyles(() => ({
    profileFieldsGroup: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontSize: "21px",
      fontWeight: "500",
      padding: "15px 0",
    },
    groupHeading: {
      marginBottom: "15px",
    },
    userDetailsGroupHeading: {
      color: "#545454",
    },
    generalGroupHeading: {
      color: "#9A9A9A",
      fontWeight: "400",
      width: alignTitle ? "100%" : "auto",
    },
    profilePicture: {
      height: "210px",
      width: "210px",
      borderRadius: "105px",
      marginBottom: "15px",
    },
    attribute: {
      display: "flex",
      width: "100%",
      columnGap: "15px",
      margin: "5px 0",
    },
    fieldLabel: {
      color: "#9A9A9A",
      minWidth: "30%",
      textAlign: "right",
      fontWeight: "400",
      fontSize: "20px",
    },
    fieldSeparator: {
      color: "#9A9A9A",
      minWidth: "5%",
      fontWeight: "400",
      textAlign: "center",
    },
    fieldValue: {
      color: "#545454",
      width: "70%",
      textAlign: "left",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.profileFieldsGroup}>
      {/* group header */}
      {isUserDetailsGroup ? (
        <img
          src={userData.profilepicture}
          alt={userData.name}
          className={classes.profilePicture}
        />
      ) : (
        <></>
      )}
      <div
        className={`${
          isUserDetailsGroup
            ? classes.userDetailsGroupHeading
            : classes.generalGroupHeading
        } ${classes.groupHeading}`}
      >
        {isUserDetailsGroup ? userData[groupConfig.title] : groupConfig.title}
      </div>

      {groupConfig.fields.map((field, fieldIndex) => (
        <>
          {field.label !== "map" ? (
            <div
              key={`${groupConfig.title}-${fieldIndex}`}
              className={classes.attribute}
            >
              <div className={classes.fieldLabel}>{field.label}</div>
              <div className={classes.fieldSeparator}>{" : "}</div>
              <div className={classes.fieldValue}>
                {getValueFromObject(userData, field.valueKey)}
              </div>
            </div>
          ) : (
            <Map
              positions={[
                Number(getValueFromObject(userData, field.valueKey).lng),
                Number(getValueFromObject(userData, field.valueKey).lat),
              ]}
              center={[
                Number(getValueFromObject(userData, field.valueKey).lng),
                Number(getValueFromObject(userData, field.valueKey).lat),
              ]}
              zoom={3}
              scrollWheelZoom={false}
            />
          )}
        </>
      ))}
      {/* fields */}
    </div>
  );
};
