import React, {useState} from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CarouselContainer from "./component/CarouselContainer";
import loginSample from "./loginSample.jpg";
import axios from "axios";
import { baseUrl } from "./baseUrl";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import { signIn, ChangeAlertOpen, ChangeLoadingStatus } from "./redux/ActionCreators/Auth";
import { useDispatch, useSelector } from "react-redux";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const theme = createTheme();

export default function Login() {

  const [open, setOpen] = useState(false);
  // const [loadingInfo, setLoadingInfo] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initials = useSelector(
    (state) => state.initials
  );

  const loadingInfo = useSelector(
    (state) => state.loading
  );


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(ChangeAlertOpen(false));
    // navigate("/");
  };

  const vertical = 'top';
  const horizontal = 'center';

  const handleSubmit1 = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    dispatch(signIn(data.get("email"), data.get("password"), navigate));
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });

  //   const obj = {
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   };

  //   console.log(obj);

  //   console.log(baseUrl);

  //   setLoadingInfo(true);

  //   axios
  //     .post(baseUrl + "/api/auth/login", obj)
  //     .then((response) => {
  //       console.log(response);
  //       if (response.status === 200) {
  //         localStorage.setItem("creds", response.data.token);
  //         localStorage.setItem("profile", JSON.stringify(response.data.user));
  //         setAlertMessage('Successfully Logged In !');
  //         setAlertSeverity('success')
  //         setOpen(true);
  //         setLoadingInfo(false);
  //         setTimeout(() => {
  //           navigate("/app");
  //         }, 2100);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setAlertSeverity('error')
  //       setAlertMessage('Could not login, Please try again!');
  //       setOpen(true);
  //       setLoadingInfo(false);
  //     });
  // };

  return (
    <>
    {loadingInfo.isLoading && <LinearProgress />}
      <CarouselContainer />
      <Snackbar anchorOrigin={{ vertical, horizontal }} open={initials.alertOpen} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={initials.alertSeverity} sx={{ width: '100%' }}>
          {initials.alertMessage}
        </Alert>
      </Snackbar>
      <ThemeProvider theme={theme}>
        <Grid container component="main">
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              textAlign: "center",
            }}
            // sx={{
            //   // backgroundImage: 'url(https://source.unsplash.com/random)',
            //   // backgroundRepeat: 'no-repeat',
            //   // backgroundColor: (t) =>
            //   //   t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            //   // backgroundSize: 'cover',
            //   // backgroundPosition: 'center',
            // }}
          >
            <img
              src={loginSample}
              style={{
                maxWidth: "45vw",
                maxHeight: "84vh",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            style={{
              boxShadow: "none",
            }}
          >
            <Box
              sx={{
                my: 3,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit1}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/register" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

