import React from 'react'
import { banner1 } from '../../assets'

const Banner = () => {
    return (
        <>
            <div class="flex items-center lg:flex-row flex-col m-8 px-6">

                <div className='flex-1 w-[50%] p-4 max-w-[50%] '>
                    <div className="flex flex-row justify-between items-center w-full">
                        <h1 className="flex-1 font-poppins font-semibold ss:text-[65px] text-gray-800 text-[52px] ss:leading-[70px] leading-[45px] max-w-[500px]">
                            Welcome to <span className='text-burnt'>Motivog </span>
                        </h1>

                    </div>

                    <h1 className="font-medium ss:text-[25px] text-[19px] text-gris ss:leading-[30px] leading-[36px] w-full max-w-[500px] mt-6">
                        Your Daily Dose of Inspiration and Motivation!
                    </h1>
                    <p className="text-[15px] font-normal text-black leading-[30.8px] max-w-[510px] mt-2">
                        Are you ready to embark on a transformative journey of self-discovery, empowerment, and motivation? Motivog is not just a blog; it's a comprehensive hub for those seeking daily inspiration and effective planning to live their best lives.
                    </p>
                </div>

                <div className='flex-1 relative items-center pl-9 '>
                    <img src={banner1} className=' rounded-3xl xl:w-[100%] xl:h-[100%] max-w-[100%] relative items-center ' />

                    <div className=' w-auto px-4 py-2 backdrop-filter backdrop-blur-lg  shadow-lg rounded-2xl space-y-1 sm:space-y-2 absolute top-[40%] -left-16'>
                        <a class="transition-colors text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative hover:text-pink-800 hover:bg-pink-100 bg-pink-800" href="/archive/the-demo-archive-slug">Beauty</a>
                        <h2 class="nc-card-title text-sm leading-6  ">
                            <a class="line-clamp-2" >The Red-Nail Theory Didn’t Work the Way I Thought It Would!</a>
                        </h2>
                        <div class="flex items-center justify-between mt-0">
                            <div class="nc-PostCardLikeAndComment flex items-center space-x-2 ">
                                <button class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500" title="Liked">
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd">
                                        </path>
                                    </svg>
                                    <span class="ml-1 text-neutral-900 dark:text-neutral-200">34</span>
                                </button>
                                <a class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-green-100 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex  px-3 h-8 text-xs " title="Comments" href="/single/demo-slug#comments">
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"></path>
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path>
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path>
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path>
                                    </svg>
                                    <span class="ml-1 text-neutral-900 dark:text-neutral-200">110</span>
                                </a>
                            </div>
                            <div class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 ">
                                <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50/30 hover:bg-neutral-50/50 dark:bg-neutral-800/30 dark:hover:bg-neutral-800/50" title="Save to reading list">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>                </div>

                    <div className=' w-auto px-4 py-2 backdrop-filter backdrop-blur-lg  shadow-lg rounded-2xl space-y-1 sm:space-y-2 absolute top-[70%] -left-16'>
                        <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100 hover:bg-blue-800" href="/archive/the-demo-archive-slug">Fitness</a>
                        <h2 class="nc-card-title text-sm leading-6 ">
                            <a class="line-clamp-2" >5 Potential Health Benefits of Resistance Band Training.</a>
                        </h2>
                        <div class="flex items-center justify-between mt-0">
                            <div class="nc-PostCardLikeAndComment flex items-center space-x-2 ">
                                <button class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500" title="Liked">
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd">
                                        </path>
                                    </svg>
                                    <span class="ml-1 text-neutral-900 dark:text-neutral-200">23</span>
                                </button>
                                <a class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-green-100 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex  px-3 h-8 text-xs " title="Comments" href="/single/demo-slug#comments">
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"></path>
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path>
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path>
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path>
                                    </svg>
                                    <span class="ml-1 text-neutral-900 dark:text-neutral-200">87</span>
                                </a>
                            </div>
                            <div class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 ">
                                <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50/30 hover:bg-neutral-50/50 dark:bg-neutral-800/30 dark:hover:bg-neutral-800/50" title="Save to reading list">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


            <div className='relative py-8'>
                <div class="absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 bg-neutral-100 dark:bg-black dark:bg-opacity-20"><span class="sr-only hidden">bg</span></div>
                <div>
                    <div class="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50"><div class="text-center w-full max-w-2xl mx-auto "><h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold">Newest authors</h2><span class="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">Say hello to future creator potentials</span></div></div>
                </div>
            </div>

        </>

    )
}

export default Banner