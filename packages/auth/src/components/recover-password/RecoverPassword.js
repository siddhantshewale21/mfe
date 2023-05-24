import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function RecoverPassword() {
  const classes = useStyles();
  const [sent, setSent] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const history = useHistory();

  const validatePassword = (value) => {
    if (!value) {
      setPasswordError('Password is required');
    } else if (value.length < 8) {
      setPasswordError('Password must be at least 8 characters');
    } else if (value.length > 20) {
      setPasswordError('Password must be at most 20 characters');
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/.test(value)) {
      setPasswordError(
        'Password must contain at least one uppercase letter, one lowercase letter, and one number'
      );
    } else {
      setPasswordError('');
    }
  };

  const validateConfirmPassword = (value) => {
    if (!value) {
      setConfirmPasswordError('Confirm Password is required');
    } else if (value !== password) {
      setConfirmPasswordError('Passwords must match');
    } else {
      setConfirmPasswordError('');
    }
  };

  useEffect(() => {
    validatePassword(password);
  }, [password]);

  useEffect(() => {
    validateConfirmPassword(confirmPassword);
  }, [confirmPassword, password]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password && confirmPassword && !passwordError && !confirmPasswordError) {
      // Redirect to the desired page
      history.push('/auth/signin');
      setSent(true);
      // Perform password recovery logic here
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Reset your password
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="New Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!passwordError}
                helperText={passwordError}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={!!confirmPasswordError}
                helperText={confirmPasswordError}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            className={classes.submit}
            disabled={sent || !!passwordError || !!confirmPasswordError}
            size="large"
            variant="contained"
            color="primary"
            fullWidth
          >
            {sent ? 'In progress...' : 'Submit'}
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default RecoverPassword;
