import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { SideBar } from "./SideBar";
import { Header } from "./Header";
import { useSelector } from "react-redux";
import { getNextTwoIndices } from "../utils";
import { ChatWrapper } from "./ChatWrapper";

export const Wrapper = () => {
  const [currentPage, setCurrentPage] = useState();
  const [currentUserId, setCurrentUserId] = useState(null);

  const { pathname } = useLocation();
  const { userId } = useParams();

  useEffect(() => {
    if (!currentUserId && userId) setCurrentUserId(userId);

    if (pathname) {
      const page = pathname.split("/")[3];
      setCurrentPage(page);
    }
  }, [userId, pathname, currentUserId]);

  const userData = useSelector((state) => {
    const allusers = state.users.users;
    return allusers.filter((item) => item.id === Number(userId))[0];
  });

  const otherUsers = useSelector((state) => {
    const [index1, index2] = getNextTwoIndices(Number(userId));
    return [state.users.users[index1], state.users.users[index2]];
  });

  return (
    <div className="wrapper">
      <SideBar currentPage={currentPage} currentUserId={currentUserId} />
      <div className="right-section-container">
        <Header
          currentPage={currentPage}
          userData={userData}
          otherUsers={otherUsers}
        />
        <Outlet />
        <div className="chats-container">
          <ChatWrapper />
        </div>
      </div>
    </div>
  );
};
