import React from 'react'
import { facebook, google } from '../../assets'
import { Link } from "react-router-dom";


const Signup = () => {
    return (
        <div className='bg-neutral-50 flex justify-center'>
            <div class="container relative pt-6 sm:pt-10 pb-16 lg:pt-20 lg:pb-28">
                <div class="p-5  bg-white rounded-xl sm:rounded-3xl lg:rounded-[40px] shadow-lg sm:p-10 lg:p-16 mx-4 md:mx-16 sm:mx-8 ">
                    <header class="text-center max-w-2xl mx-auto mb-14 sm:mb-16 lg:mb-20 ">
                        <h2 class="flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900  justify-center">Sign up</h2>
                        <span class="block text-sm mt-2 text-neutral-700 sm:text-base ">Welcome to our blog magazine Community</span>
                    </header>
                    <div class="max-w-md mx-auto space-y-6">
                        <div class="grid gap-2">
                            <a href="#" class="flex w-full rounded-lg bg-neutral-100  px-4 py-3 transform transition-transform sm:px-6  hover:translate-y-[-2px]">
                                <img src={facebook} class="flex-shrink-0 w-5 " alt="Continue with Facebook" />
                                <h3 class="flex-grow text-center text-sm font-medium text-neutral-700  sm:text-sm">Continue with Facebook</h3>
                            </a>
                            <a href="#" class="flex w-full rounded-lg bg-neutral-100  px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]">
                                <img src={google} class="flex-shrink-0 w-5" alt="Continue with Google" />
                                <h3 class="flex-grow text-center text-sm font-medium text-neutral-700  sm:text-sm">Continue with Google</h3>
                            </a>
                        </div>
                        <div class="relative text-center">
                            <span class="relative z-10 inline-block px-4 font-medium text-sm bg-white ">OR</span>
                            <div class="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 "></div>
                        </div>
                        <form class="grid grid-cols-1 gap-6" action="#" method="post">
                            <label class="block">
                                <span class="text-neutral-800 ">Email address</span>
                                <input type="email" class="block w-full border border-neutral-200 focus:border-blue-300 focus:ring focus:ring-blue-200/50 bg-white  rounded-full text-sm font-normal h-11 px-4 py-3 mt-1" placeholder="example@example.com" />
                            </label>
                            <label class="block">
                                <span class="flex justify-between items-center text-neutral-800 ">Password
                                </span>
                                <input type="Password" class="block w-full border border-neutral-200 focus:border-blue-300 focus:ring focus:ring-blue-200/50 bg-white  rounded-full text-sm font-normal h-11 px-4 py-3 mt-1" />
                            </label>
                            <button class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-burnt hover:bg-burntmedium text-neutral-100 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  " type="submit">Continue</button>
                        </form>
                        <span class="block text-center text-neutral-700 ">Already have an account?
                            <Link to="/login">
                                <a class="nc-NcLink text-burnt hover:text-amber-900 font-medium" href="/signup"> Sign in</a>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup