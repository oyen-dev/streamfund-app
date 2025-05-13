import React, { PropsWithChildren } from "react";
import SidebarLayout from "./sidebar";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-row w-full h-[90vh] items-start justify-start">
      <SidebarLayout />
      <div className="flex flex-col gap-5 w-full h-full bg-white">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
