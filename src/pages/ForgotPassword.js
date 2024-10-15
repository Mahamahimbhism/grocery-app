import React from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../components/FormInput';

const ForgotPassword = () => {

  const handleContinue = (event) => {
    event.preventDefault();
    // Add form validation or API call to handle password reset here
    alert('A reset link has been sent to your email.');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      {/* Container */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md h-auto aspect-[9/16]">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Reset Your Password</h1>

        {/* Instructions */}
        <p className="text-sm text-gray-500 mb-6 text-center">
          Enter your registered email address to receive a security code.
        </p>

        {/* Form Input for Email Address */}
        <div className="space-y-4"> {/* This adds spacing between inputs */}
          <FormInput placeholder="Email Address" />
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="mt-6 w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600"
        >
          Continue
        </button>

        {/* Or Divider */}
        <div className="my-4 flex items-center justify-center">
          <hr className="w-full border-gray-300" />
          <span className="mx-3 text-gray-500">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        {/* Back to Sign In */}
        <div className="flex justify-center">
          <Link
            to="/login"
            className="w-full text-center bg-gray-100 text-gray-700 border border-gray-300 py-2 rounded-lg hover:bg-gray-200"
          >
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
