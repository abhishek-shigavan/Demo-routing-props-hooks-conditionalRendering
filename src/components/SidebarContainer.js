import React, { useState } from "react";
import { Drawer } from '@mui/material';
import "./sidebarContainer.css"
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useNavigate } from "react-router";


const SidebarContainer = ({drawerState, toggleDrawer}) => {
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
  }
  // const useState()
  return (
    <div>
      <SwipeableDrawer
        anchor={'left'}
        open={drawerState}
        onClose={() => {toggleDrawer(false)}}
        sx={{zIndex: 0}}
        // hideBackdrop={false}
      >
        <div style={{marginTop: "90px"}}>
        <br />
        <span onClick={() => handleNavigation('/dashboard/notes')}>Note</span>
        <br /><br />
        <span onClick={() => handleNavigation('/dashboard/archive')}>Archive</span>
        <br /><br />
        <span onClick={() => handleNavigation('/dashboard/trash')}>Trash</span>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default SidebarContainer;
