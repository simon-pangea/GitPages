import React, { Component } from "react";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

class SimpleNotification extends Component {
  constructor() {
    super();
    this.showNotification = this.showNotification.bind(this);
  }

  componentDidMount() {
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
  }

  showNotification() {
    new Notification("Hey");
  }

  render() {
    return (
      <div>
        <Button onClick={this.showNotification}>SHOW NOTIFICATION</Button>
        <Divider />
      </div>
    );
  }
}

export default SimpleNotification;
