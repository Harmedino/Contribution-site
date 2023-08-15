import React from "react";
import classes from "./Home.module.css"

const Home = () => {
  return (
    <div className="bg-lime-600 w-full h-screen text-white">
      <header className="w-11/12 m-auto h-20 flex justify-between items-center">
        <h1 className="md:text-3xl text-uppercase"> Cont</h1>
        <div className="w-40 flex justify-between items-center">
          <p>Login</p>
          <p>Get Started</p>
        </div>
      </header>

      <main className="w-full h-[80vh]  flex justify-between items-center">
        <div className="md:w-1/2 w-full h-full  p-12">
          
          <h1 className="text-white text-5xl font-semibold">The most Transparent Bank Ever</h1>
          <p className="text-white">Built for small business owners, entrepreneurs, and freelancers. No hidden fees, no hassle</p>
          <div class="bg-white p-1 md:w-4/5 w-full flex items-center mt-4">
        <input type="email" placeholder="example@gmail.com" class="rounded-l px-4 py-2 w-3/5 outline-none"/>
        <button class="bg-lime-500 text-white px-4 py-2 rounded ml-auto">Get Started</button>
    </div>
      </div>
       
      </main>
    </div>
  );
};

export default Home;
