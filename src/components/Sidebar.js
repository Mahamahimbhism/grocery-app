import React, { useContext } from 'react';
import AppContext from '../store/app-context';
import profileImage from '../assets/image.png';

const Sidebar = ({showSideBar, toggleSideBar}) => {
    const {setLogout} = useContext(AppContext);

  if (!showSideBar) return null;

  return (
    // Backdrop
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
      onClick={toggleSideBar}
    >
      {/* Sidebar Content */}
      <div
        className="w-64 h-full bg-white shadow-lg p-6 flex flex-col space-y-4 z-50"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Profile Section */}
        <div className="flex items-center space-x-4">
          <img
            src={profileImage}
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-lg font-semibold text-gray-800">Hello, User</h1>
        </div>

        {/* Navigation */}
        <h2 className="text-md font-semibold text-gray-600">Navigation</h2>
        <button className="text-left p-2 text-gray-700 hover:bg-gray-200 rounded-lg">
          Dashboard
        </button>
        <button className="text-left p-2 text-gray-700 hover:bg-gray-200 rounded-lg">
          Settings
        </button>
        <button className="text-left p-2 text-gray-700 hover:bg-gray-200 rounded-lg" onClick={setLogout}>
          Log Out
        </button>
        <button className="text-left p-2 text-gray-700 hover:bg-gray-200 rounded-lg">
          Documentation
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
