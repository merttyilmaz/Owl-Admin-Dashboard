import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssessmentIcon from "@mui/icons-material/Assessment";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const SidebarItem = ({
  icon,
  name,
}: {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  name: string;
}) => {
  const Icon = icon;
  return (
    <div className="flex cursor-pointer items-center justify-start gap-1.5 p-2 hover:bg-[#ECE8FF]">
      <Icon className="text-violet-600 " />
      <span className="text-sm text-gray-400">{name}</span>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="min-h-screen  max-w-fit flex-1 border-r border-[#e6e3e3] bg-white px-2 ">
      <div>
        <span className="flex items-center justify-center p-4 text-xl font-bold text-violet-500">
          Owl Admin
        </span>
      </div>
      <hr className="h-0 border text-[#e6e3e3] " />
      <div className=" pl-2.5">
        <ul>
          <p className="mb-1 text-xs font-bold text-gray-500">MAIN</p>
          <SidebarItem icon={DashboardIcon} name="Dashboard" />
          <p className="my-1 text-xs font-bold text-gray-500">LISTS</p>
          <SidebarItem icon={PersonOutlineOutlinedIcon} name="Users" />
          <SidebarItem icon={StoreMallDirectoryIcon} name="Products" />
          <SidebarItem icon={CreditCardOutlinedIcon} name="Orders" />
          <SidebarItem icon={LocalShippingIcon} name="Delivery" />
          <p className="my-1 text-xs font-bold text-gray-500">USEFUL</p>
          <SidebarItem icon={AssessmentIcon} name="Stats" />
          <SidebarItem
            icon={NotificationsNoneOutlinedIcon}
            name="Notifications"
          />
          <p className="my-1 text-xs font-bold text-gray-500">SERVICE</p>
          <SidebarItem icon={MonitorHeartOutlinedIcon} name="System Health" />
          <SidebarItem icon={PsychologyOutlinedIcon} name="Logs" />
          <SidebarItem icon={SettingsApplicationsIcon} name="Settings" />
          <p className="my-1 text-xs font-bold text-gray-500">USER</p>
          <SidebarItem icon={AccountBoxIcon} name="Profile" />
          <SidebarItem icon={ExitToAppIcon} name="Logout" />
        </ul>
      </div>
      <div className="mt-4 flex items-center justify-center gap-3">
        <div className="h-10 w-10 rounded-full border  bg-black" />
        <div className="h-10 w-10 rounded-full border border-black bg-white" />
      </div>
    </div>
  );
};

export default Sidebar;
