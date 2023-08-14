import React from "react";
import DashboardBox from "../componants/DashboardBox";

const DashboardScreen = () => {
  return (
    <div>
      <DashboardBox title="7" desc="Applied jobs" />
      <DashboardBox title="12" desc="Total Post" />
      <DashboardBox title="14" desc="Today's post" />
    </div>
  );
};

export default DashboardScreen;
