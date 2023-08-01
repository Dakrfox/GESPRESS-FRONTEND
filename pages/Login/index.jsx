import React from 'react';

export default function LoginPage() {
  return (
   

    <div className="bg-blue-300 h-screen flex items-center justify-center">
      
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-68 h-96">
        <div className="login-container">
          <h1 className="text-black flex items-center justify-center ">Login</h1>
          <br></br>
          <div>
            <label className="text-#939C9E" htmlFor="username">Email Address</label>
            <br></br>
            <input type="text" placeholder="example@example.com" className="input input-bordered w-full max-w-xs bg-white text-black focus:bg-white hover:border-blue-500" />

          </div>

          <div>
            <label className="text-#939C9E" htmlFor="password">Password</label>
       
            <input type="password" placeholder="***********" className="input input-bordered w-full max-w-xs bg-white text-black  focus:bg-white hover:border-blue-500 " />

          </div>
          <br></br>
          <a href='' className="text-blue-500 text-xs flex items-center justify-end ">Forgot your password?</a>
          <br></br>
          <button className="btn bg-blue-400 w-98 w-full ">Login</button>
       
         
        </div>
      </form>
    </div>
   



  );

}