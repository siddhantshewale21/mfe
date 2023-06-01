import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Layout from "../layout/layout";
import signUpStyles from "./signUpStyles";
import Register from "./Register";


export default function SignUp() {
  const classes = signUpStyles();
 
  

  
  return (
    <div className={classes.container}>
      <Register />
      <Container
        className={classes.layoutContainer}
        style={{
          alignItems: "stretch",
          maxWidth: "50% !important",
          margin: "0px !important",
        }}
      >
        <div className={classes.layout}>
          <Layout />
        </div>
      </Container>
    </div>
  );
}
