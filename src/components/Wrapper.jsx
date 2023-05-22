import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { SideBar } from "./SideBar";
import { Header } from "./Header";
import { useSelector } from "react-redux";

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
  }, [userId, pathname]);

  const userData = useSelector((state) => {
    const allusers = state.users.users;
    return allusers.filter((item) => item.id === Number(userId))[0];
  });

  return (
    <div className="routed-pages">
      <SideBar currentPage={currentPage} currentUserId={currentUserId} />
      <div className="right-section-container">
        <Header currentPage={currentPage} userData={userData} />
        <Outlet />
      </div>
    </div>
  );
};
