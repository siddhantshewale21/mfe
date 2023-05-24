import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { handlesubmit } from "./signUpHelper";
import Layout from "../layout/layout";
import signUpStyles from "./signUpStyles";
import {
  validateDate,
  validateEmail,
  validatePassword,
  validatePhone,
  validateText,
} from "../login/loginHelper";

export default function SignUp() {
  const classes = signUpStyles();
  const usenavigate = useHistory();
  // const [username, usernamechange] = useState("");
  // const [firstname, firstnamechange] = useState("");
  // const [lastname, lastnamechange] = useState("");
  // const [password, passwordchange] = useState("");
  // const [confirmpassword, confirmpasswordchange] = useState("");
  // const [dateOfBirth, dateOfBirthchange] = useState("");
  // const [phoneNo, phoneNochange] = useState("");
  const formik = loginForm({
    submit: async (values) => {
      proceedLoginusingAPI(values);
    },
  });
  // const systemDate = new Date();
  // const minimumDate = new Date("01-01-1970").setHours(0, 0, 0, 0);

  return (
    <div className={classes.container}>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form
            onSubmit={formik.handleSubmit}
            // onSubmit={(e) => {
            //   setIsSubmit(true);
            //   handlesubmit(
            //     e,
            //     {
            //       firstname,
            //       lastname,
            //       username,
            //       phoneNo,
            //       dateOfBirth,
            //       password,
            //       confirmpassword,
            //     },
            //     usenavigate
            //   );
            // }}
            className={classes.form}
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  autoComplete="firstname"
                  name="firstname"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstname"
                  label="First Name"
                  autoFocus
                  error={!!(formik.touched.firstname && formik.errors.firstname)}
                  helperText={formik.touched.firstname && formik.errors.firstname}
                  value={formik.values.firstname}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastname"
                  label="Last Name"
                  name="lastname"
                  autoComplete="lastName"
                  error={!!(formik.touched.lastname && formik.errors.lastname)}
                  helperText={formik.touched.lastname && formik.errors.lastname}
                  value={formik.values.lastname}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="username"
                  name="username"
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Email Address"
                  error={!!(formik.touched.username && formik.errors.username)}
                  helperText={formik.touched.username && formik.errors.username}
                  value={formik.values.username}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phoneNo"
                  label="Phone No"
                  name="phoneNo"
                  autoComplete="phoneNo"
                  // onChange={(e) => {
                  //   let num = e.target.value.replace(".", "");
                  //   !isNaN(num) && phoneNochange(num);
                  // }}
                  error={!!(formik.touched.phoneNo && formik.errors.phoneNo)}
                  helperText={formik.touched.phoneNo && formik.errors.phoneNo}
                  value={formik.values.phoneNo}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="dateOfBirth"
                  label="Date of Birth"
                  name="dateOfBirth"
                  type="date"
                  autoComplete="dateOfBirth"
                  error={!!(formik.touched.dateOfBirth && formik.errors.dateOfBirth)}
                  helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
                  value={formik.values.dateOfBirth}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={!!(formik.touched.password && formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="confirmpassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmpassword"
                  error={!!(formik.touched.confirmPassword && formik.errors.confirmPassword)}
                  helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                  value={formik.values.confirmPassword}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/auth/signin">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </form>
        </div>
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
