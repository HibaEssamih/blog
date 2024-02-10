import React from 'react'

const ForgetPassword = () => {
  return (
    <div className='bg-neutral-50 flex justify-center'>
    <div class="container relative pt-6 sm:pt-10 pb-16 lg:pt-20 lg:pb-28">
        <div class="p-5 bg-white rounded-xl sm:rounded-3xl lg:rounded-[40px] shadow-lg sm:p-10 lg:p-16 mx-4 md:mx-16 sm:mx-8 ">
            <header class="text-center max-w-2xl mx-auto mb-14 sm:mb-16 lg:mb-20 ">
                <h2 class="flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900  justify-center">Forgot password</h2>
                <span class="block text-sm mt-2 text-neutral-700 sm:text-base ">Welcome to our blog magazine Community</span>
            </header>
            <div class="max-w-md mx-auto space-y-6">
               
                
                <form class="grid grid-cols-1 gap-6" action="#" method="post">
                    <label class="block">
                        <span class="text-neutral-800 ">Email address</span>
                        <input type="email" class="block w-full border border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200/50 bg-white  rounded-full text-sm font-normal h-11 px-4 py-3 mt-1" placeholder="example@example.com" />
                    </label>                    
                    <button class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-burnt hover:bg-burntmedium text-neutral-100 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  " type="submit">Continue</button>
                </form>
                <span class="block text-center text-neutral-700 ">Go back for
                    <a class="nc-NcLink text-burnt hover:text-amber-900 font-medium" href="/signup"> Sign in</a> / 
                    <a class="nc-NcLink text-burnt hover:text-amber-900 font-medium" href="/signup"> Sign Up</a> 
                </span>
            </div>
        </div>
    </div>
    </div>  )
}

export default ForgetPassword