import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC7RM0ajoGtd51PEH6QqItl-CQ__kXWwjk",
  authDomain: "autiembrace-auth.firebaseapp.com",
  projectId: "autiembrace-auth",
  storageBucket: "autiembrace-auth.appspot.com",
  messagingSenderId: "1007870745477",
  appId: "1:1007870745477:web:f1c86e5691066b24e302ec",
  measurementId: "G-5XG7B7LYED",
};

const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        navigate("/-login-page");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  console.log(email, password);

  return (
    <main className="w-full relative [background:linear-gradient(-72.44deg,_rgba(111,_157,_172,_0.44)_2.62%,_#6f9dac_50%,_#6f9dac_50.03%,_#6f9dac)] h-[1024px] overflow-hidden text-left text-19xl text-white font-montserrat">
      <div className="absolute top-[calc(50%_-_369px)] left-[calc(50%_-_345px)] w-[690px] h-[598px]">
        <div className="absolute top-[calc(50%_-_299px)] left-[calc(50%_-_345px)] rounded-21xl bg-gray-300 [backdrop-filter:blur(25px)] box-border w-[690px] h-[598px] border-[3px] border-solid border-gray-200" />
        <h1 className="m-0 absolute top-[calc(50%_-_220px)] left-[calc(50%_-_255px)] text-inherit font-normal font-inherit">
          Sign up
        </h1>
        <button
          className="cursor-pointer [border:none] p-0 bg-palevioletred absolute top-[calc(50%_+_201px)] left-[calc(50%_-_255px)] rounded-3xs w-[500px] h-[50px]"
          autoFocus={true}
          onClick={handleSubmit}
        />
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[calc(50%_+_214px)] left-[calc(50%_-_87px)] text-xl text-[inherit]"
        >
          Create Account
        </Link>
        <div className="absolute top-[calc(50%_-_165px)] left-[calc(50%_-_255px)] w-[500px] h-[337px] text-lg">
          <div className="absolute top-[calc(50%_+_89.5px)] left-[calc(50%_-_250px)]">
            Verify Password
          </div>
          <TextField
            className="[border:none] bg-[transparent] absolute top-[calc(50%_+_118.5px)] left-[calc(50%_-_250px)]"
            color="primary"
            placeholder="password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleShowPasswordClick}
                    aria-label="toggle password visibility"
                  >
                    <Icon>
                      {showPassword ? "visibility_off" : "visibility"}
                    </Icon>
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ "& .MuiInputBase-root": { height: "50px" }, width: "500px" }}
          />
          <div className="absolute top-[calc(50%_-_82.5px)] left-[calc(50%_-_247px)]">
            Email
          </div>
          <div className="absolute top-[calc(50%_-_168.5px)] left-[calc(50%_-_250px)]">
            Username
          </div>
          <div className="absolute top-[calc(50%_+_3.5px)] left-[calc(50%_-_250px)]">
            Password
          </div>
          <TextField
            className="[border:none] bg-[transparent] absolute top-[calc(50%_-_53.5px)] left-[calc(50%_-_250px)]"
            color="primary"
            placeholder="username@gmail.com"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            sx={{ "& .MuiInputBase-root": { height: "50px" }, width: "500px" }}
          />
          <TextField
            className="[border:none] bg-[transparent] absolute top-[calc(50%_-_139.5px)] left-[calc(50%_-_250px)]"
            color="primary"
            size="medium"
            placeholder="username"
            variant="outlined"
            sx={{ "& .MuiInputBase-root": { height: "50px" }, width: "500px" }}
          />
          <TextField
            className="[border:none] bg-[transparent] absolute top-[calc(50%_+_32.5px)] left-[calc(50%_-_250px)]"
            color="primary"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleShowPasswordClick}
                    aria-label="toggle password visibility"
                  >
                    <Icon>
                      {showPassword ? "visibility_off" : "visibility"}
                    </Icon>
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ "& .MuiInputBase-root": { height: "50px" }, width: "500px" }}
          />
        </div>
        <h2 className="m-0 absolute top-[calc(50%_-_257px)] left-[calc(50%_-_255px)] text-5xl font-normal font-inherit">
          AutiEmbrace
        </h2>
      </div>
    </main>
  );
};

export default SignUp;
