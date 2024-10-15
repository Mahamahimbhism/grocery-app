import React, { useRef } from 'react';

const FormInput = ({ placeholder, handleSubmit }) => {
  const inputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    if (handleSubmit) {
      handleSubmit(inputRef.current.value); // Use current to access the value of the ref
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder} // Placeholder to show text inside the input
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </form>
  );
};

export default FormInput;
