import React from 'react';
import './Login.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
    axios.post('http://localhost:3000/users/login', data)
      .then((response) => {
        console.log(response.data);
        alert("Login Successful");
      })
      .catch((error) => {
        console.error("There was an error logging in:", error);
        alert("Login Failed");
      });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              id="email"
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters"
                }
              })}
              type="password"
              id="password"
            />
            {errors.password && <p className="error-message">{errors.password.message}</p>}
          </div>

          <button type="submit">Login</button>
         
        </form>
      </div>
    </div>
  );
};

export default Login;
