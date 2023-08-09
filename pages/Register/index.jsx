import React from 'react';

export default function RegisterPage() {
    return (


        <div className="bg-blue-300 h-screen flex items-center justify-center font-mono ">

            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-100 h-130">
                <div className="login-container">
                    <h1 className="text-black flex items-center justify-center">

                        Register
                        <img src="/images/editar.png" alt="Editar" className="h-6 w-6 mr-2 ml-2" />
                    </h1>

                    <br></br>
                    <div>
                        <label className="text-#939C9E" htmlFor="username">Full name </label>
                        <br></br>
                        <input type="text" placeholder="" className="input input-bordered w-full max-w-xs bg-white text-black focus:bg-white hover:border-blue-500" />

                    </div>
                    <div>
                        <label className="text-#939C9E" htmlFor="username">Email </label>
                        <br></br>
                        <input type="text" placeholder="example@example.com" className="input input-bordered w-full max-w-xs bg-white text-black focus:bg-white hover:border-blue-500" />
                    </div>

                    <div>
                        <label className="text-#939C9E" htmlFor="password">Password</label>

                        <input type="password" placeholder="" className="input input-bordered w-full max-w-xs bg-white text-black  focus:bg-white hover:border-blue-500 " />
                    </div>
                    <div>
                        <label className="text-#939C9E" htmlFor="password">Confirm Password</label>

                        <input type="password" placeholder="" className="input input-bordered w-full max-w-xs bg-white text-black  focus:bg-white hover:border-blue-500 " />
                    </div>
                    <div>
                        <label className="text-#939C9E" htmlFor="password">Phone number </label>

                        <input type="text" placeholder="" className="input input-bordered w-full max-w-xs bg-white text-black  focus:bg-white hover:border-blue-500 " />
                    </div>
                    <br></br>
                    <div className="flex justify-end">
                        <a href='' className="text-blue-500 text-xs">Already have an account? Sign in</a>
                    </div>                    <br></br>
                    <button className="btn bg-blue-400 w-98 w-full ">Register</button>


                </div>
            </form>


        </div>


    );

}