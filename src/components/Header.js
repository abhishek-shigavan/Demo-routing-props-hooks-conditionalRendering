import React from "react";

const HeaderContainer = ({toggleDrawer, currState}) => {
  return (
    <div style={{top: "0", width:'100%', display: "flex", justifyContent: "space-around", height: "90px", border: "1px solid black", zIndex: '5', backgroundColor: "white", position: "fixed"}}>
      <button onClick={()=> toggleDrawer(!currState)}>Toggle</button>
      <h1>Header Component</h1>
    </div>
  );
};

export default HeaderContainer;
