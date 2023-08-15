import React from 'react'

const Register = () => {
  return (
    <div className="min-h-screen bg-lime-500 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-center text-lime-500">Register</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input type="text" id="name" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-lime-500" placeholder="John Doe" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input type="email" id="email" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-lime-500" placeholder="example@gmail.com" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
          <input type="password" id="password" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-lime-500" placeholder="********" />
        </div>
        <button className="bg-lime-500 text-white py-2 px-4 rounded w-full focus:outline-none hover:bg-lime-600 transition duration-300">Register</button>
      </form>
    </div>
  </div>
  )
}

export default Register