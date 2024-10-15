import React from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../components/FormInput';

const Signup = () => {

  const handleSignUp = (event) => {
    event.preventDefault();
    // Add form validation or API signup logic here
    alert('Account created successfully!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      {/* Container */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md h-auto aspect-[9/16]">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create an Account</h1>

        {/* Form Inputs */}
        <div className="space-y-4"> {/* Spacing between form inputs */}
          <FormInput placeholder="Email Address" />
          <FormInput placeholder="User Name" />
          <FormInput placeholder="Password" />
          <FormInput placeholder="Confirm Password" />
        </div>

        {/* Continue Button */}
        <button
          onClick={handleSignUp}
          className="mt-6 w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600"
        >
          Continue
        </button>

        {/* Already Have an Account? */}
        <div className="flex justify-center mt-6">
          <p className="text-sm text-gray-500">
            Already have an account?{' '}
            <Link
              to="/login/"
              className="text-blue-500 hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
