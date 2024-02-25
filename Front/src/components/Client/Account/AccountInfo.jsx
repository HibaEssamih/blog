import React from 'react'
import { shopbann, getfree, banner1, Hero1, topic1, topic2, topic3, topic4, topic5, topic6, topic7, topic8, topic9, topic10 } from '../../../assets'


export const AccountInfo = () => {
    return (
        <>
            <div class="max-w-4xl mx-auto pt-2 sm:pt-10 pb-14 lg:pb-22">
                <div class="space-y-10 sm:space-y-12">
                    <h2 class="text-2xl sm:text-3xl font-semibold">Account infomation</h2>
                    <div class="flex flex-col md:flex-row">
                        <div class="flex-shrink-0 flex items-start">
                            <div class="relative rounded-full overflow-hidden flex">
                                <img src={topic3} alt="" class="w-32 h-32 rounded-full object-cover z-0" />
                                <div class="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-neutral-50 cursor-pointer">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <path d="M17.5 5H7.5C6.83696 5 6.20107 5.26339 5.73223 5.73223C5.26339 6.20107 5 6.83696 5 7.5V20M5 20V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H22.5C23.163 25 23.7989 24.7366 24.2678 24.2678C24.7366 23.7989 25 23.163 25 22.5V17.5M5 20L10.7325 14.2675C11.2013 13.7988 11.8371 13.5355 12.5 13.5355C13.1629 13.5355 13.7987 13.7988 14.2675 14.2675L17.5 17.5M25 12.5V17.5M25 17.5L23.0175 15.5175C22.5487 15.0488 21.9129 14.7855 21.25 14.7855C20.5871 14.7855 19.9513 15.0488 19.4825 15.5175L17.5 17.5M17.5 17.5L20 20M22.5 5H27.5M25 2.5V7.5M17.5 10H17.5125" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                    <span class="mt-1 text-xs">Change Image</span>
                                </div>
                                <input type="file" class="absolute inset-0 opacity-0 cursor-pointer" />
                            </div>
                        </div>
                        <div class="flex-grow mt-10 md:mt-0 md:pl-16 max-w-3xl space-y-6">
                            <div>
                                <label class="nc-Label text-base font-medium text-neutral-900  " data-nc-id="Label">Full name</label>
                                <input type="text" class="block w-full border-neutral-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white  disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5" value="Enrico Cole" />
                            </div>
                            <div>
                                <label class="nc-Label text-base font-medium text-neutral-900 " data-nc-id="Label">Email</label>
                                <div class="mt-1.5 flex">
                                    <span class="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200  bg-neutral-50  text-neutral-500 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </span>
                                    <input type="text" class="block w-full border-neutral-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white  disabled:bg-neutral-200  rounded-2xl text-sm font-normal h-11 px-4 py-3 !rounded-l-none" placeholder="example@email.com" />
                                </div>
                            </div>
                            <div class="max-w-lg">
                                <label class="nc-Label text-base font-medium text-neutral-900  " data-nc-id="Label">Date of birth</label>
                                <div class="mt-1.5 flex">
                                    <span class="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200  bg-neutral-50  text-neutral-500  text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                        </svg>
                                    </span>
                                    <input type="date" class="block w-full border-neutral-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white  disabled:bg-neutral-200  rounded-2xl text-sm font-normal h-11 px-4 py-3 !rounded-l-none" value="1990-07-22" />
                                </div>
                            </div>
                            <div>
                                <label class="nc-Label text-base font-medium text-neutral-900  " data-nc-id="Label">Addess</label>
                                <div class="mt-1.5 flex">
                                    <span class="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200  bg-neutral-50  text-neutral-500  text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                    </span>
                                    <input type="text" class="block w-full border-neutral-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white  disabled:bg-neutral-200  rounded-2xl text-sm font-normal h-11 px-4 py-3 !rounded-l-none" value="New york, USA" />
                                </div>
                            </div>
                            <div>
                                <label class="nc-Label text-base font-medium text-neutral-900  " data-nc-id="Label">Gender</label>
                                <select class="nc-Select h-11 mt-1.5 block w-full text-sm rounded-2xl border-neutral-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white ">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label class="nc-Label text-base font-medium text-neutral-900 " data-nc-id="Label">Phone number</label>
                                <div class="mt-1.5 flex">
                                    <span class="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200  bg-neutral-50  text-neutral-500  text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                        </svg>
                                    </span>
                                    <input type="text" class="block w-full border-neutral-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white  disabled:bg-neutral-200  rounded-2xl text-sm font-normal h-11 px-4 py-3 !rounded-l-none" value="003 888 232" />
                                </div>
                            </div>
                            <div>
                                <label class="nc-Label text-base font-medium text-neutral-900  " data-nc-id="Label">About you</label>
                                <textarea class="block w-full text-sm rounded-2xl border-neutral-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white  mt-1.5" rows="4">...</textarea>
                            </div>
                            <div class="pt-2">
                                <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 disabled:bg-opacity-90 bg-burnt  hover:bg-burntmedium text-neutral-50 shadow-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100 ">Update account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
