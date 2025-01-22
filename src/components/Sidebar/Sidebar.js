import React from "react";
import { Drawer } from "@mui/material";
import { sidebarItems } from "../../utils/sidebarItems";
import { useSelector } from "react-redux";
import { capitalize } from "lodash";
// import { X } from "lucide-react";

const DrawerButton = ({ label, showArrow }) => (
  <button className="w-[90%] text-left p-2 py-3 ml-8 bg-transparent rounded-md flex items-center justify-between">
    <span className="text-gray-700">{label}</span>
    {showArrow && <span><i className="fi fi-rr-angle-small-right"></i></span>}
  </button>
);

const LeftSidebar = ({ open, toggleDrawer }) => {
  const username = useSelector((state) => state?.auth?.currentUser?.user?.username) || "Guest";

  return (
    <div className="relative">
      {open && (
        <button
          onClick={toggleDrawer}
          className="fixed z-[1300] top-4 left-[380px] text-white text-xl"
          aria-label="Close sidebar"
        >
         <i class="fi fi-rr-cross"></i>
        </button>
      )}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: "370px",
            padding: 0,
            margin: 0,
            boxSizing: "border-box",
          },
        }}
        BackdropProps={{
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.76)",
          },
        }}
      >
        <div className="flex items-center gap-x-2 p-1 border border-black bg-primary-light text-white font-robotogap-2">
          <i className="fi fi-br-circle-user text-2xl ml-7"></i>
          <span className="font-bold pb-1 text-xl">
            Hello, {capitalize(username)}
          </span>
        </div>
        <div>
          {sidebarItems.map((section, index) => (
            <div key={index} className="py-2 border-b border-gray-200">
              <h4 className="text-lg ml-9 font-bold mb-2">{section.title}</h4>
              {section.buttons.map((button, i) => (
                <div key={i} className="text-sm font-medium hover:bg-gray-200">
                  <DrawerButton
                    label={button.label}
                    showArrow={button.showArrow}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default LeftSidebar;