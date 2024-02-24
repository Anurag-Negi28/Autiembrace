import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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

async function getUserById(id) {
  try {
    const response = await fetch(`https://dummy-firebase-6ul2fojl6q-el.a.run.app/read/${id}`);
    const responseData = await response.text();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
  }
}

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Signed up
      const user = userCredential.user;
  
      // Fetch username
      const userId = email;
  
      // Assuming getUserById is an asynchronous function that returns a promise
      let userData = await getUserById(userId);
      userData = {userData};
      console.log(userData);
  
      navigate("/autiembrace", { state: { userData } });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    }
  };  

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onCreateAccountClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  return (
    <div className="w-full relative [background:linear-gradient(-72.44deg,_rgba(111,_157,_172,_0.44)_2.62%,_#6f9dac_50%,_#6f9dac_50.03%,_#6f9dac)] h-[1024px] overflow-hidden text-left text-5xl text-white font-montserrat">
      <div className="absolute top-[calc(50%_-_370px)] left-[calc(50%_-_345px)] w-[690px] h-[598px]">
        <main className="absolute top-[calc(50%_-_299px)] left-[calc(50%_-_345px)] rounded-21xl bg-gray-300 [backdrop-filter:blur(25px)] box-border w-[690px] h-[598px] border-[3px] border-solid border-gray-200" />
        <div className="absolute top-[calc(50%_-_251px)] left-[calc(50%_-_249px)]">
          AutiEmbrace
        </div>
        <div className="absolute top-[calc(50%_-_209px)] left-[calc(50%_-_249px)] text-19xl">
          Login
        </div>
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[calc(50%_+_222px)] left-[calc(50%_-_45px)] text-[14px] text-[inherit]"
          to="/sign-up"
          onClick={onCreateAccountClick}
        >
          Create Account
        </Link>
        <button
          className="cursor-pointer [border:none] p-0 bg-palevioletred absolute top-[calc(50%_+_118px)] left-[calc(50%_-_246px)] rounded-3xs w-[500px] h-[50px]"
          autoFocus={true}
          onClick={handleLogin}
        />
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[calc(50%_+_131px)] left-[calc(50%_-_28px)] text-xl text-[inherit]"
          to="/autiembrace"
        >
          Sign in
        </Link>
        <div className="absolute top-[calc(50%_-_138px)] left-[calc(50%_-_249px)] w-[500px] h-[215px] text-lg">
          <TextField
            className="[border:none] bg-[transparent] absolute top-[calc(50%_-_80.5px)] left-[calc(50%_-_250px)]"
            color="primary"
            placeholder="username@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            type="email"
            sx={{ "& .MuiInputBase-root": { height: "50px" }, width: "500px" }}
          />
          <div className="absolute top-[calc(50%_-_107.5px)] left-[calc(50%_-_250px)]">
            Email
          </div>
          <TextField
            className="[border:none] bg-[transparent] absolute top-[calc(50%_+_25.5px)] left-[calc(50%_-_250px)]"
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
          <div className="absolute top-[calc(50%_-_1.5px)] left-[calc(50%_-_250px)]">
            Password
          </div>
          <div className="absolute top-[calc(50%_+_92.5px)] left-[calc(50%_-_250px)] text-[12px]">
            Forgot Password?
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;