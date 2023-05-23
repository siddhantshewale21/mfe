import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link, useHistory } from "react-router-dom";
import {
  ProceedLoginusingAPI,
  validateEmail,
  validateText,
} from "./loginHelper";
import Layout from "../layout/layout";
import loginStyles from "./loginStyles";

export default function Login() {
  const classes = loginStyles();
  const history = useHistory();
  const [username, usernameupdate] = useState("");
  const [password, passwordupdate] = useState("");

  return (
    <div className={classes.container}>
      <Container
        maxWidth="xs"
        style={{
          alignItems: "stretch",
          maxWidth: "50% !important",
          margin: "0px !important",
        }}
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            onSubmit={(e) => {
              ProceedLoginusingAPI(e, username, password);
            }}
            className={classes.form}
            noValidate
          >
            <TextField
              error={!validateEmail(username)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => usernameupdate(e.target.value)}
            />
            <TextField
              error={!validateText(password)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => passwordupdate(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/auth/signup">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <div className={classes.leftside}></div>
      </Container>
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
