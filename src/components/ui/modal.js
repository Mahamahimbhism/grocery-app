import React from 'react';

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    // Backdrop
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      {/* Modal Content */}
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          &#10005; {/* Close button (X) */}
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
