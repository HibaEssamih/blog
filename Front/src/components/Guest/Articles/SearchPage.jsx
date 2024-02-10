import React from 'react'
import { backSearch } from '../../../assets/index'


export const SearchPage = () => {

    return (
        <>
            <div class="mb-16">
                <div class="rounded-none md:rounded-3xl  aspect-w-16 aspect-h-9 lg:aspect-h-5 overflow-hidden h-[440px] z-0">
                    <div class="w-full h-full inset-0">
                        <img src="https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="search" sizes="(max-width: 1280px) 100vw, 1536px" class=" object-cover inset-0 w-full h-full" />
                    </div>
                </div>
                <div class="relative container w-screen px-2 xl:max-w-screen-2xl mx-auto -mt-20  lg:-mt-48">
                    <div class=" bg-white p-5 lg:p-16 rounded-[40px] shadow-2xl flex items-center">
                        <header class="w-full max-w-3xl mx-auto text-center flex flex-col items-center">
                            <h2 class="text-2xl sm:text-4xl font-semibold">Technology</h2>
                            <span class="block text-xs sm:text-sm mt-4 text-neutral-500">We found <strong class="font-medium text-neutral-800">1135</strong> results for <strong class="font-medium text-neutral-800">Technology</strong></span>
                            <form class="relative w-full mt-8 sm:mt-11 text-left" method="post">
                                <label for="search-input" class="text-neutral-500">
                                    <span class="sr-only">Search all icons</span>
                                    <input type="search" class="block w-full border-neutral-200 focus:border-blue-300 focus:ring focus:ring-blue-200/50 bg-white rounded-full text-sm font-normal pl-14 py-5 pr-5 md:pl-16 " id="search-input" placeholder="Type and press enter" value="Technology" />
                                    <button class="ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-70 bg-gray-900 hover:bg-gray-800 text-gray-50 absolute right-2.5 top-1/2 transform -translate-y-1/2  w-11 h-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800" type="submit">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0-6.75-6.75M19.5 12l-6.75 6.75"></path>
                                        </svg>
                                    </button>
                                    <span class="absolute left-5 top-1/2 transform -translate-y-1/2 text-2xl md:left-6">
                                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"></path>
                                        </svg>
                                    </span>
                                </label>
                            </form>
                            <div class="w-full text-sm text-left mt-4 text-neutral-500">
                                <div class="inline-block space-x-1.5 sm:space-x-2.5">
                                    <span class="">Related:</span>
                                    <a class="nc-NcLink text-orange-800 hover:text-burnt inline-block font-normal" href="/search">Design</a>
                                    <a class="nc-NcLink text-orange-800 hover:text-burnt inline-block font-normal" href="/search">Photo</a>
                                    <a class="nc-NcLink text-orange-800 hover:text-burnt inline-block font-normal" href="/search">Vector</a>
                                    <a class="nc-NcLink text-orange-800 hover:text-burnt inline-block font-normal" href="/search">Frontend</a>
                                </div>
                            </div>
                        </header>
                    </div>
                </div>
                <div class="py-16 lg:pb-28 lg:pt-20 mx-2 md:mx-16 sm:mx-6">
                    <div class="flex flex-col sm:justify-between sm:flex-row">
                        <div class="flex space-x-2.5">
                            <div class="nc-ModalCategories">
                                <div class="nc-NcModal">
                                    <button class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-white ring-1 ring-neutral-300 hover:ring-neutral-400 text-sm font-medium py-3 px-4 sm:py-3.5 sm:px-6">
                                        <div>
                                            <span class="hidden sm:inline">Other</span> Categories
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-4 h-4 ml-2 -mr-1">
                                            <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd"></path>
                                        </svg>
                                    </button>

                                </div>
                            </div>
                            <div class="nc-ModalTags">
                                <div class="nc-NcModal">
                                    <button class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-white ring-1 ring-neutral-300 hover:ring-neutral-400 text-sm font-medium py-3 px-4 sm:py-3.5 sm:px-6">
                                        <div>
                                            <span class="hidden sm:inline">Other</span> Tags
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-4 h-4 ml-2 -mr-1">
                                            <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="block my-4 border-b w-full border-neutral-300 sm:hidden"></div>
                        <div class="flex justify-end">
                            <div class="nc-ArchiveFilterListBox flex-shrink-0">
                                <div class="relative">
                                    <div id="headlessui-listbox-button-:r6f:" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="">
                                        <button class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-white ring-1 ring-neutral-300 hover:ring-neutral-400 text-sm font-medium py-3 px-4 sm:py-3.5 sm:px-6">
                                            Most Recent
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-4 h-4 ml-2 -mr-1">
                                                <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
