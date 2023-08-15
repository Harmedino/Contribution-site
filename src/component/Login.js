import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import 'animate.css/animate.min.css';

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };


  return (
    <div className="min-h-screen bg-lime-500 flex items-center justify-center">
    <div className={`bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-sm fade-in`}>
      <h1 className="text-2xl font-bold mb-4 text-center text-lime-500">Login</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input type="email" id="email" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-lime-500" placeholder="example@gmail.com" />
        </div>
        <div className="mb-4 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input type={passwordVisible ? 'text' : 'password'} id="password" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-lime-500" placeholder="********" />
            <span onClick={togglePasswordVisibility} className="absolute right-3 top-12 transform -translate-y-1/2 cursor-pointer">
              <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} className="text-gray-600" />
            </span>
          </div>
        <button className="bg-lime-500 text-white py-2 px-4 rounded w-full focus:outline-none hover:bg-lime-600 transition duration-300">Login</button>
      </form>
    </div>
  </div>
  )
}

export default Login