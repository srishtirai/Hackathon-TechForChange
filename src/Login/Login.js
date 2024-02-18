import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, signUpUser } from "../api";
import {toast} from 'react-toastify';
import "./Login.css";

const LoginSignupScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      loginUser({email, password}).then(({data}) => {
        navigate('/dashboard');
      }).catch(error => {
        console.log(error.message);
        toast("Could not login !")
      });
      console.log("Logging in with:", email, password);
    } else {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", btoa(password));
      formData.append("re_password", btoa(confirmPassword));
      // Add image
      signUpUser(formData).then(request => {
        toast("User created ! Please Sign In..", "error")
        setIsLogin(!isLogin);
      }).catch(error => {
        console.log(error);
        toast("Failed to create profile. Please try again !", "error");
      })
      console.log("Signing up with:", name, email, password);
    }
    
  };

  return (
    <div className="login-signup-screen">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        )}
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Create an account" : "Already have an account? Login"}
      </p>
    </div>
  );
};

export default LoginSignupScreen;
