import * as api from "../api/index";

export const signIn = (email, password, navigate) => (dispatch) => {
  dispatch(ChangeLoadingStatus(true));

  setTimeout(() => {
    api
      .signIn(email, password)
      .then((response) => {
        //   console.log(response.status);
        if (response.status === 200) {


          dispatch(ChangeLoadingStatus(false));
          
          localStorage.setItem("creds", response.data.token);
          localStorage.setItem("profile", JSON.stringify(response.data.user));

          dispatch({ type: "LOGIN", payload: response.data });
          dispatch(ChangeAlertMessage("Successfully Logged In!"));
          dispatch(ChangeAlertSeverity("success"));
          dispatch(ChangeAlertOpen(true));
          
          setTimeout(() => {
            navigate("/app");
          }, 2100);
        }
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.response);
        alert(error.response.data.msg);

        dispatch(ChangeLoadingStatus(false));
        dispatch(ChangeAlertMessage("Login Failed!"));
        dispatch(ChangeAlertSeverity("error"));
        dispatch(ChangeAlertOpen(true));
      });
  }, 2000);
};

export const signUp = (email, password, name, navigate) => (dispatch) => {
  dispatch(ChangeLoadingStatus(true));

  setTimeout(() => {
    api
      .signUp(email, password, name)
      .then((response) => {
        //   console.log(response.status);
        if (response.status === 200) {
          //   console.log("inn");
          // localStorage.setItem("profile", response.data.token);

          localStorage.setItem("creds", response.data.token);
          localStorage.setItem("profile", JSON.stringify(response.data.user));

          dispatch(ChangeLoadingStatus(false));
          dispatch({ type: "LOGIN", payload: response.data });
          dispatch(ChangeAlertMessage("Successfully Logged In!"));
          dispatch(ChangeAlertSeverity("success"));
          dispatch(ChangeAlertOpen(true));
          setTimeout(() => {
            navigate("/app");
          }, 2100);
        }
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.response);
        alert(error.response.data.msg);

        dispatch(ChangeLoadingStatus(false));
        dispatch(ChangeAlertMessage("Sign Up Failed!"));
        dispatch(ChangeAlertSeverity("error"));
        dispatch(ChangeAlertOpen(true));
      });
  }, 2000);
};

export const LogOut = (navigate) => (dispatch) => {
  dispatch({ type: "LOGOUT" });
  navigate("/signin");
};

export const ChangeLoadingStatus = (dat) => ({
  type: "CHANGE_LOADING_STATUS",
  payload: dat,
});
export const ChangeAlertMessage = (dat) => ({
  type: "CHANGE_ALERT_MESSAGE",
  payload: dat,
});

export const ChangeAlertSeverity = (dat) => ({
  type: "CHANGE_ALERT_SEVERITY",
  payload: dat,
});
export const ChangeAlertOpen = (dat) => ({
  type: "CHANGE_ALERT_OPEN",
  payload: dat,
});
