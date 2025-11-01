import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton, Switch } from "@mui/material";

export default function Header({ Name }) {

  return (
    <div className="grid grid-cols-12 text-xl p-3 bg-[#1e3a8a] text-white items-center">
      <div className="col-span-6">
        <div className="flex items-center gap-2">
          <IconButton size="medium" color="inherit">
            <MenuIcon />
          </IconButton>
          <div className="text-bold ">{Name}</div>
        </div>
      </div>
      <div className="col-span-6 flex justify-end">
        <Avatar alt="Remy Sharp">S</Avatar>

      </div>
    </div>
  );
}
