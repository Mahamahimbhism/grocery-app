import React, { useContext, useState } from 'react';
import Modal from './ui/modal';
import profileImage from "../assets/image.png";
import appIcon from "../assets/app-icon.jpg"; // Import the app icon
import Sidebar from './Sidebar';
import AppContext from '../store/app-context';

const Header = () => {
  const { setLogout } = useContext(AppContext);
  const [showOptions, setShowOptions] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false); // For sidebar toggle

  // Toggles for modal and sidebar
  const toggleOptions = () => setShowOptions(!showOptions);
  const toggleSettings = () => {};
  const toggleSideBar = () => setShowSideBar(!showSideBar);

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 shadow-lg">
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSideBar}
        className="text-xl text-gray-700 hover:text-gray-900"
      >
        &#9776; {/* Menu icon */}
      </button>

      {showSideBar && (<Sidebar showSideBar={showSideBar} toggleSideBar={toggleSideBar} />)}

      {/* Main Title with App Icon */}
      <div className="flex items-center">
        <img
          src={appIcon}
          alt="App Icon"
          className="w-8 h-8 mr-2 object-cover rounded-full" // Icon size and margin
        />
        <h1 className="text-2xl font-bold text-gray-800">GROCO</h1>
      </div>

      {/* Profile Options */}
      <div className="relative">
        <img
          src={profileImage}
          alt="profile"
          className="w-10 h-10 rounded-full cursor-pointer"
          onClick={toggleOptions}
        />
        {showOptions && (
          <Modal show={showOptions} onClose={toggleOptions}>
            <div className="flex flex-col space-y-2">
              <button onClick={toggleSettings} className="text-gray-700 hover:text-gray-900">
                Settings
              </button>
              <button onClick={setLogout} className="text-gray-700 hover:text-gray-900">
                Log Out
              </button>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Header;
