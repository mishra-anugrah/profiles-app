import { useEffect, useState } from "react";
import { UserList } from "../components/UserList";
import { getUsers } from "../api/getUsers";
import { useDispatch } from "react-redux";
import { setUsers } from "../store/usersSlice";

export const LandingPage = () => {
  const [allUsers, setAllUsers] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUsers = async () => {
      const userList = await getUsers();
      setAllUsers(userList.users);
      dispatch(setUsers(userList.users));
    };

    fetchUsers();
  }, []);

  return (
    <div className="landing-page-container">
      {allUsers ? (
        <div className="home-list-container">
          <UserList users={allUsers} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
