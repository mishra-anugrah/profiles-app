import { MenuList, MenuItem, ListItemText, ListItemIcon } from "@mui/material";
import Divider from "@mui/material/Divider";
import arrow from "../assets/arrow.svg";
import { Link } from "react-router-dom";

export const SideBar = (props) => {
  const { currentPage, currentUserId } = props;

  return (
    <div className="sidebar-container">
      <MenuList className="list">
        {/* <img src={arrow} alt="active-menu-item"></img> */}

        <Link to={`user/${currentUserId}/profile`}>
          <MenuItem disablePadding disableRipple>
            {/* <ListItemButton> */}
            <ListItemText
              primary={"Profile"}
              className={`${currentPage === "profile" ? "active" : ""}`}
            />
            {currentPage === "profile" ? (
              <ListItemIcon>
                <img
                  src={arrow}
                  alt="active-menu-item"
                  className="active-menu-item-indicator"
                ></img>
              </ListItemIcon>
            ) : (
              <></>
            )}
            {/* </ListItemButton> */}
          </MenuItem>
        </Link>

        <Divider variant="middle" className="divider" />

        <Link to={`user/${currentUserId}/posts`}>
          <MenuItem disablePadding disableRipple>
            {/* <ListItemButton> */}
            <ListItemText
              primary={"Posts"}
              className={`${currentPage === "posts" ? "active" : ""}`}
            />
            {currentPage === "posts" ? (
              <ListItemIcon>
                <img
                  src={arrow}
                  alt="active-menu-item"
                  className="active-menu-item-indicator"
                ></img>
              </ListItemIcon>
            ) : (
              <></>
            )}
            {/* </ListItemButton> */}
          </MenuItem>
        </Link>

        <Divider variant="middle" className="divider" />

        <Link to={`user/${currentUserId}/gallery`}>
          <MenuItem disablePadding disableRipple>
            {/* <ListItemButton> */}
            <ListItemText
              primary={"Gallery"}
              className={`${currentPage === "gallery" ? "active" : ""}`}
            />
            {currentPage === "gallery" ? (
              <ListItemIcon>
                <img
                  src={arrow}
                  alt="active-menu-item"
                  className="active-menu-item-indicator"
                ></img>
              </ListItemIcon>
            ) : (
              <></>
            )}
            {/* </ListItemButton> */}
          </MenuItem>
        </Link>

        <Divider variant="middle" className="divider" />

        <Link to={`user/${currentUserId}/todo`}>
          <MenuItem disablePadding disableRipple>
            {/* <ListItemButton> */}
            <ListItemText
              primary={"ToDo"}
              className={`${currentPage === "todo" ? "active" : ""}`}
            />
            {currentPage === "todo" ? (
              <ListItemIcon>
                <img
                  src={arrow}
                  alt="active-menu-item"
                  className="active-menu-item-indicator"
                ></img>
              </ListItemIcon>
            ) : (
              <></>
            )}
            {/* </ListItemButton> */}
          </MenuItem>
        </Link>
      </MenuList>
    </div>
  );
};
