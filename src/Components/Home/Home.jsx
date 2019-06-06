import React, { Component } from "react";
import Header from "../header/header.jsx";
import Sidebar from "../sidebar/sidebar.jsx";
import ChatMain from "../chat/Main.jsx";
class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <ChatMain />
      </div>
    );
  }
}

export default Home;
