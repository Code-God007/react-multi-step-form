import React from "react";
import { MuiThemeProvider } from "material-ui/styles";
import { AppBar } from "material-ui";

const Success = () => {
  return (
    <div>
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank You For Your Submission</h1>
          <p>You will get an email with further instructions</p>
        </React.Fragment>
      </MuiThemeProvider>
    </div>
  );
};

export default Success;
