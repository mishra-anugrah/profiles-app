import { useEffect, useState } from "react";
import { UserList } from "../components/UserList";
import { getUsers } from "../api/getUsers";

export const HomeList = () => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      const userList = await getUsers();
      setUsers(userList.users);
    };

    fetchUsers();
  }, []);

  return (
    <div className="home-list-container">
      <UserList users={users} />
    </div>
  );
};
