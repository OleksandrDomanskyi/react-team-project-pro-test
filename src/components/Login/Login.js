import React from "react";
import { useState } from "react";
import { GoogleLogin } from "react-google-login";
// refresh token
import { refreshTokenSetup } from "../../refreshToken";

const clientId =
  "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";

function Login() {
  const [user, setUser] = useState({});

  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    setUser(res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login. 😢`);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
      {Object.keys(user).length !== 0 && (
        <div>
          <img src={user.imageUrl} alt="userImg" />
          <h2>{user.name}</h2>
        </div>
      )}
    </div>
  );
}

export default Login;
