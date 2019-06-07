import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import { withRouter } from "react-router-dom";
import Header from "../header/header.jsx";
import Useritem from "./User.jsx";
import axios from "../../axios/axios";
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar
}));

function ClippedDrawer(props) {
  useEffect(() => {
    axios
      .post("", {
        query: `query {
        users{
          id
          email
        }
      }`
      })
      .then(res => {
        if (res.data.errors) {
        } else {
          setUsers(res.data.data.users);
        }
      });
    axios
      .post("", {
        query: `subscription{
          newUserRegistered{
            id
            email
          }
        }`
      })
      .then(res => {
        if (res.data.errors) {
        } else {
          var data = users;
          data.push(res.data.data.newUserRegistered);
          setUsers(data);
        }
      });
  }, []);
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {users.length == 0 ? (
            <div
              style={{
                textAlign: "center",
                marginTop: 10,
                marginBottom: 10,
                fontSize: 17
              }}
            >
              {"No User found"}
            </div>
          ) : (
            users.map(({ email, id }, index) => (
              <Useritem id={id} text={email.toString().split("@")[0]} />
            ))
          )}
        </List>
      </Drawer>
    </div>
  );
}

export default withRouter(ClippedDrawer);
