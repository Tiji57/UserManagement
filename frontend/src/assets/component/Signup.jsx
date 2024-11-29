import React from 'react';
import './Signup.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
    // Make sure to send data to the signup endpoint
    axios.post('http://localhost:3000/users/signup', data)
      .then((response) => {
        console.log(response.data);
        alert("Signup Successful");
      })
      .catch((error) => {
        console.error("There was an error signing up:", error);
        alert("Signup Failed");
      });
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign Up</h2>

        {/* Name field */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="error-message">{errors.name.message}</p>}
        </div>

        {/* Username field */}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && <p className="error-message">{errors.username.message}</p>}
        </div>

        {/* Email field */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Please enter a valid email address"
              }
            })}
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        {/* Password field */}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "Password must be at least 8 characters" }
            })}
          />
          {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>

        {/* Submit and cancel buttons */}
        <div className="button-group">
          <button type="submit" className="register-button">Register</button>
          <button type="button" className="cancel-button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
