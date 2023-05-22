import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";

export const UserListItem = (props) => {
  const { userName, profilePhotoURL } = props;
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar src={profilePhotoURL} />
          </ListItemAvatar>
          <ListItemText primary={userName} />
        </ListItemButton>
      </ListItem>
    </>
  );
};
