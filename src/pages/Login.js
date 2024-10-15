import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppIcon from '../assets/app-icon.jpg';
import { FcGoogle } from 'react-icons/fc'; // Google Icon
import AppContext from '../store/app-context';

const Login = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate
  const { setLogin } = useContext(AppContext);

  // State to store form input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleSignIn = (event) => {
    event.preventDefault();
    setLogin();
    // Add form validation or API login call here

    // After successful login, navigate to the dashboard
    navigate('/');
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      {/* Container */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md h-auto aspect-[9/16]">
        {/* App Icon */}
        <div className="flex justify-center mb-6">
          <img
            src={AppIcon}
            alt="App Icon"
            className="w-16 h-16 object-cover rounded-full"
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign In</h1>

        {/* Form Inputs */}
        <div className="space-y-4"> {/* This adds spacing between inputs */}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
            placeholder="Email Address or Username"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'} // Toggle between text and password type
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end mt-2">
          <Link
            to="/forgot-password/"
            className="text-sm text-blue-500 hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        {/* Sign In Button */}
        <button
          onClick={handleSignIn}
          className={`mt-6 w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 ${
            !email || !password ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={!email || !password} // Disable button if email or password is empty
        >
          Sign In
        </button>

        {/* Or Sign In With */}
        <div className="my-4 flex items-center justify-center">
          <hr className="w-full border-gray-300" />
          <span className="mx-3 text-gray-500">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        {/* Sign In with Google */}
        <button className="flex items-center justify-center w-full bg-gray-100 border border-gray-300 text-gray-700 rounded-lg p-2 hover:bg-gray-200">
          <FcGoogle className="w-6 h-6 mr-2" /> Sign in with Google
        </button>

        {/* Don't Have an Account */}
        <div className="flex justify-center mt-6">
          <p className="text-sm text-gray-500">
            Don't have an account?{' '}
            <Link
              to="/sign-up/"
              className="text-blue-500 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
