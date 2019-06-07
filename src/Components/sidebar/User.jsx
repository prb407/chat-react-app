import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircle from "@material-ui/icons/AccountCircle";

import Profilepicmodel from "../other/ProfilepicModel.jsx";

function ClippedDrawer({ text, id }) {
  const [profilemodel, setProfilemodel] = useState(false);
  const closeProfile = () => {
    setProfilemodel(false);
  };
  return (
    <ListItem button>
      <ListItemIcon>
        <AccountCircle
          onClick={() => {
            setProfilemodel(true);
          }}
        />
        {profilemodel && (
          <Profilepicmodel open={profilemodel} handleClose={closeProfile} />
        )}
      </ListItemIcon>
      <ListItemText
        primary={text}
        onClick={() => {
          alert(id);
        }}
      />
    </ListItem>
  );
}

export default ClippedDrawer;
