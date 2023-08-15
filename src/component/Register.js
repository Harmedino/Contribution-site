import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import 'animate.css/animate.min.css';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="min-h-screen bg-lime-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-md  fade-in
">
        <h1 className="text-2xl font-bold mb-4 text-center text-lime-500">Register</h1>
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-lime-500" placeholder="John" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-lime-500" placeholder="Doe" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-lime-500" placeholder="example@gmail.com" />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input type={showPassword ? 'text' : 'password'} id="password" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-lime-500" placeholder="********" />
            <span onClick={togglePasswordVisibility} className="absolute right-3 top-12 transform -translate-y-1/2 cursor-pointer">
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-gray-600" />
            </span>
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm Password</label>
            <input type={showConfirmPassword ? 'text' : 'password'} id="confirmPassword" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-lime-500" placeholder="********" />
            <span onClick={toggleConfirmPasswordVisibility} className="absolute right-3 top-12 transform -translate-y-1/2 cursor-pointer">
              <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} className="text-gray-600" />
            </span>
          </div>
          <button className="bg-lime-500 text-white py-2 px-4 rounded w-full focus:outline-none hover:bg-lime-600 transition duration-300">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
