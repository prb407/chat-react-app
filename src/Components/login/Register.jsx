import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "../../axios/axios";
import { withRouter } from "react-router-dom";
function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Built with love by "}
      BACKENDERS .
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function SignInSide(props) {
  const login = e => {
    e.preventDefault();
    // if (email === "admin@admin.com" && password === "admin") {
    seterrorText("");
    setLogin("Registering...");
    axios
      .post("", {
        query: `mutation{
        createUser(email:"${email}",password:"${password}"){
          id
          email
        }
      } `
      })
      .then(res => {
        // console.log(res.data);
        // return;
        setLogin("Register");
        if (res.data.errors) {
          seterrorText(res.data.errors[0].message);
        } else {
          props.history.push("/login");
        }
      });

    // }
  };
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginText, setLogin] = useState("Register");
  const [errorText, seterrorText] = useState("");

  //   const [username, setPassword] = useState("");

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          {/* <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form className={classes.form} onSubmit={login}>
            <TextField
              variant="outlined"
              margin="normal"
              type="email"
              fullWidth
              required
              label="Email Address"
              name="email"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              value={password}
              fullWidth
              name="password"
              label="Password"
              type="password"
              onChange={e => {
                setPassword(e.target.value);
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              //   onClick={login}
            >
              {loginText}
            </Button>
            <Grid container>
              <Grid item xs>
                <span style={{ color: "red" }}>{errorText}</span>
              </Grid>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Don have an account? Login"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <MadeWithLove />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default withRouter(SignInSide);
