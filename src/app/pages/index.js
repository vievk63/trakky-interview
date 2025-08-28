import React from "react";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();
  const handleNavigate = (route) => {
    navigate(route);
  };
  return (
    <>
      <div className="flex items-center justify-between p-2">
        <div
          onClick={() => handleNavigate("task1")}
          className="h-[60px] w-[100px] rounded-md bg-yellow-400 flex items-center justify-center"
        >
          Task 1
        </div>
        <div
          onClick={() => handleNavigate("task2")}
          className="h-[60px] w-[100px] rounded-md bg-yellow-400 flex items-center justify-center"
        >
          Task 2
        </div>
        <div
          onClick={() => handleNavigate("task3")}
          className="h-[60px] w-[100px] rounded-md bg-yellow-400 flex items-center justify-center"
        >
          Task 3
        </div>
      </div>
    </>
  );
}

export default Dashboard;
