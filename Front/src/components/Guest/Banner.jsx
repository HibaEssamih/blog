import React from 'react'

import { shopbann, getfree , banner1, Hero1, topic1, topic2, topic3, topic4, topic5, topic6, topic7, topic8, topic9, topic10 } from '../../assets'
import Slider from "react-slick";
import Carousel from './Carousel';
import { useMediaQuery } from 'react-responsive';


const Banner = () => {

    const isLargeScreen = useMediaQuery({ minWidth: 1025 });
    const isMediumScreen = useMediaQuery({ minWidth: 801, maxWidth: 1024 });
    const isMiMediumScreen = useMediaQuery({ minWidth: 601, maxWidth: 800 });
    const isSmallScreen = useMediaQuery({ maxWidth: 600 });

    const getSlidesToShow = () => {
        if (isLargeScreen) return 4;
        if (isMediumScreen) return 2;
        if (isMiMediumScreen) return 2;
        if (isSmallScreen) return 1;
        return 4; // default
    };
    const getSlidesToShow2 = () => {
        if (isLargeScreen) return 5;
        if (isMediumScreen) return 4;
        if (isMiMediumScreen) return 3;
        if (isSmallScreen) return 2;
        return 4; // default
    };



    const settings = {
        className: 'center',
        infinite: true,
        centerPadding: '60px',
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
        },
        slidesToShow: getSlidesToShow(),

    };
    const settings2 = {
        className: 'center',
        infinite: true,
        centerPadding: '60px',
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
        },
        slidesToShow: getSlidesToShow2(),

    };

    return (
        <>

            <div class="flex items-center lg:flex-row flex-col mx-0 lg:m-8 px-6">

                <div className='flex-1 lg:w-[50%] w-full max-w-full p-4 lg:max-w-[50%] '>
                    <div className="flex flex-row justify-between items-center w-full">
                        <h1 className="flex-1 font-poppins font-semibold ss:text-[65px] text-gray-800 text-[52px] ss:leading-[70px] leading-10 max-w-[500px]">
                            Welcome to <span className='text-burnt'>Motivog </span>
                        </h1>

                    </div>

                    <h1 className="font-medium ss:text-[25px] text-[19px] text-gris ss:leading-[36px] leading-[26px] w-full max-w-[500px] mt-6">
                        Your Daily Dose of Inspiration and Motivation!
                    </h1>
                    <p className="text-[15px] font-normal text-black leading-[30.8px] max-w-[510px] mt-2">
                        Are you ready to embark on a transformative journey of self-discovery, empowerment, and motivation? Motivog is not just a blog; it's a comprehensive hub for those seeking daily inspiration and effective planning to live their best lives.
                    </p>
                </div>

                <div className='flex-1 relative items-center lg:pl-9 pl-0 '>
                    <img src={banner1} className=' rounded-3xl xl:w-[100%] xl:h-[100%] max-w-[100%] relative items-center ' />

                    <div className=' w-auto px-4 py-2 backdrop-filter backdrop-blur-lg  shadow-lg rounded-2xl space-y-1 sm:space-y-2 absolute top-[40%] ss:-left-16 left-[60px] cursor-pointer'>
                        <a class="transition-colors text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative hover:text-pink-800 hover:bg-pink-100 bg-pink-800" >Beauty</a>
                        <h2 class="nc-card-title ss:text-sm text-[13px] leading-6  ">
                            <a class="line-clamp-2" >The Red-Nail Theory Didn’t Work the Way I Thought It Would!</a>
                        </h2>
                        <div class="flex items-center justify-between mt-0">
                            <div class="nc-PostCardLikeAndComment flex items-center space-x-2 ">
                                <button class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700   hover:bg-rose-50  hover:text-rose-600 " title="Liked">
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd">
                                        </path>
                                    </svg>
                                    <span class="ml-1 text-neutral-900 ">34</span>
                                </button>
                                <a class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000  transition-colors hover:bg-teal-50  hover:text-teal-600  flex  px-3 h-8 text-xs " title="Comments" href="/single/demo-slug#comments">
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"></path>
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path>
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path>
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path>
                                    </svg>
                                    <span class="ml-1 text-neutral-900 ">110</span>
                                </a>
                            </div>
                            <div class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 ">
                                <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50/30 hover:bg-neutral-50/50 " title="Save to reading list">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className=' w-auto px-4 py-2 backdrop-filter backdrop-blur-lg  shadow-lg rounded-2xl space-y-1 sm:space-y-2 absolute top-[70%] -left-16 cursor-pointer'>
                        <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100 hover:bg-blue-800" >Fitness</a>
                        <h2 class="nc-card-title text-sm leading-6 ">
                            <a class="line-clamp-2" >5 Potential Health Benefits of Resistance Band Training.</a>
                        </h2>
                        <div class="flex items-center justify-between mt-0">
                            <div class="nc-PostCardLikeAndComment flex items-center space-x-2 ">
                                <button class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700  hover:bg-rose-50  hover:text-rose-600 " title="Liked">
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd">
                                        </path>
                                    </svg>
                                    <span class="ml-1 text-neutral-900 ">23</span>
                                </button>
                                <a class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000  transition-colors  hover:bg-teal-50  hover:text-teal-600  hidden sm:flex  px-3 h-8 text-xs " title="Comments" href="/single/demo-slug#comments">
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"></path>
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path>
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path>
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path>
                                    </svg>
                                    <span class="ml-1 text-neutral-900 ">87</span>
                                </a>
                            </div>
                            <div class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700  ">
                                <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50/30 hover:bg-neutral-50/50 " title="Save to reading list">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


            <div className='relative mx-4 md:mx-12 lg:mx-20 sm:mx-9 py-16 lg:py-24'>
                <div class=" absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 bg-neutral-50">
                    <span class="sr-only hidden">bg</span>
                </div>
                <div>
                    <div class=" relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 ">
                        <div class="text-center w-full max-w-2xl mx-auto ">
                            <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold">Top trending topics</h2>
                            <span class="mt-2 md:mt-3 font-normal block text-base sm:text-lg text-[#6b7280]">Discover 143 topics</span>
                        </div>
                    </div>
                </div>
                <div class="relative ">
                    <div class="flow-root rounded-xl">
                        <Slider {...settings2}>
                            <div class="relative px-2 xl:px-4 whitespace-normal flex flex-col" >
                                <a class=" flex flex-col cursor-pointer">
                                    <div class="relative w-full h-[160px] rounded-3xl  group">
                                        <img src={topic1} className="rounded-2xl object-cover w-full h-full" alt="taxonomies" />
                                        <div>
                                            <span class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute top-3 left-3 text-pink-800 bg-pink-100">#1</span>
                                        </div>
                                        <span class="opacity-0 group-hover:opacity-100 rounded-2xl absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
                                    </div>
                                    <div class="flex items-center mt-5">
                                        <div class="w-9 h-9 bg-pink-800 rounded-full">
                                        </div>
                                        <div class="ml-4">
                                            <h2 class="text-base text-neutral-900  font-medium">Beauty</h2>
                                            <span class="block text-sm text-neutral-500 ">13 Articles</span>
                                        </div>
                                    </div>
                                </a>
                            </div>


                            <div class="relative  px-2 xl:px-4 whitespace-normal flex flex-col" >
                                <a class=" flex flex-col cursor-pointer">
                                    <div class="relative w-full h-[160px] rounded-3xl  group">
                                        <img src={topic5} className="rounded-2xl object-cover w-full h-full" alt="taxonomies" />
                                        <div>
                                            <span class="nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute top-3 left-3 text-red-800 bg-red-100  ">#2</span>
                                        </div>
                                        <span class="opacity-0 group-hover:opacity-100 absolute inset-0 rounded-2xl bg-black bg-opacity-10 transition-opacity"></span>
                                    </div>
                                    <div class="flex items-center mt-5">
                                        <div class="w-9 h-9 bg-red-500 rounded-full"></div>
                                        <div class="ml-4">
                                            <h2 class="text-base text-neutral-900  font-medium">Health</h2>
                                            <span class="block text-sm text-neutral-500 ">16 Articles</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="relative  px-2 xl:px-4 whitespace-normal flex flex-col" >
                                <a class=" flex flex-col cursor-pointer">
                                    <div class="relative w-full h-[160px] rounded-3xl  group">
                                        <img src={topic6} className="rounded-2xl object-cover w-full h-full" alt="taxonomies" />
                                        <div>
                                            <span class="nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute top-3 left-3 text-blue-800 bg-blue-100  ">#3</span>
                                        </div>
                                        <span class="opacity-0 group-hover:opacity-100 absolute inset-0 rounded-2xl bg-black bg-opacity-10 transition-opacity"></span>
                                    </div>
                                    <div class="flex items-center mt-5">
                                        <div class="w-9 h-9 bg-blue-800 rounded-full">
                                        </div>
                                        <div class="ml-4">
                                            <h2 class="text-base text-neutral-900  font-medium">Fitness</h2>
                                            <span class="block text-sm text-neutral-500 ">15 Articles</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="relative  px-2 xl:px-4 whitespace-normal flex flex-col" >
                                <a class=" flex flex-col cursor-pointer">
                                    <div class="relative w-full h-[160px] rounded-3xl  group">
                                        <img src={topic4} className="rounded-2xl object-cover w-full h-full" alt="taxonomies" />
                                        <div>
                                        </div>
                                        <span class="opacity-0 group-hover:opacity-100 absolute inset-0 rounded-2xl bg-black bg-opacity-10 transition-opacity"></span>
                                    </div>
                                    <div class="flex items-center mt-5">
                                        <div class="w-9 h-9 bg-green-800 rounded-full">
                                        </div>
                                        <div class="ml-4">
                                            <h2 class="text-base text-neutral-900  font-medium">Nutrition</h2>
                                            <span class="block text-sm text-neutral-500 ">21 Articles</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="relative px-2 xl:px-4 whitespace-normal flex flex-col " >
                                <a class=" flex flex-col cursor-pointer">
                                    <div class="relative w-full h-[160px] rounded-3xl  group">
                                        <img src={topic10} className="rounded-2xl object-cover w-full h-full" alt="taxonomies" />
                                        <div>
                                        </div>
                                        <span class="opacity-0 group-hover:opacity-100 absolute inset-0 rounded-2xl bg-black bg-opacity-10 transition-opacity"></span>
                                    </div>
                                    <div class="flex items-center mt-5">
                                        <div class="w-9 h-9 bg-gray-400 rounded-full">
                                        </div>
                                        <div class="ml-4">
                                            <h2 class="text-base text-neutral-900  font-medium">Luxury</h2>
                                            <span class="block text-sm text-neutral-500 ">16 Articles</span>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="relative px-2 xl:px-4 whitespace-normal flex flex-col " >
                                <a class=" flex flex-col cursor-pointer">
                                    <div class="relative w-full h-[160px] rounded-3xl  group">
                                        <img src={topic9} className="rounded-2xl object-cover w-full h-full" alt="taxonomies" />
                                        <div>
                                        </div>
                                        <span class="opacity-0 group-hover:opacity-100 absolute inset-0 rounded-2xl bg-black bg-opacity-10 transition-opacity"></span>
                                    </div>
                                    <div class="flex items-center mt-5">
                                        <div class="w-9 h-9 bg-rose-400 rounded-full">
                                        </div>
                                        <div class="ml-4">
                                            <h2 class="text-base text-neutral-900  font-medium">Meditation</h2>
                                            <span class="block text-sm text-neutral-500 ">13 Articles</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

            <div className='nc-SectionMagazine1 mx-4 md:mx-20 sm:mx-9 py-16 lg:py-24'>


                <div class="flex flex-col mb-8 relative">
                    <div class="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900">
                        <div class="max-w-2xl">
                            <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold">Latest Articles 🔮 </h2>
                            <span class="mt-2 md:mt-3 font-normal block text-base sm:text-lg text-neutral-500 ">Discover the most outstanding articles in all topics of life. </span>
                        </div>
                    </div>
                    <div class="flex justify-between">
                        <nav class="nc-Nav relative flex w-full overflow-x-auto text-sm md:text-base" data-nc-id="Nav">
                            <ul class="flex  sm:space-x-2">
                                <li class="nc-NavItem relative flex-shrink-0">
                                    <button class="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full bg-neutral-900 text-neutral-50  ">All items</button>
                                </li>
                                <li class="nc-NavItem relative flex-shrink-0">
                                    <button class="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50">Beauty</button>
                                </li>
                                <li class="nc-NavItem relative flex-shrink-0">
                                    <button class="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500  hover:text-neutral-900 hover:bg-neutral-50">Fitness</button>
                                </li>
                                <li class="nc-NavItem relative flex-shrink-0">
                                    <button class="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500  hover:text-neutral-900 hover:bg-neutral-50 ">Money</button>
                                </li>
                            </ul>
                        </nav>
                        <button class="nc-Button flex-shrink-0 relative h-auto  items-center justify-center rounded-full transition-colors border-transparent bg-white text-neutral-900 text-sm sm:text-base font-medium px-6 !hidden md:!flex ">
                            <span>View all</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-6 h-6 ml-3">
                                <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>

                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    <div class="nc-Card2 group relative flex flex-col h-full">
                        <div class="block flex-shrink-0 flex-grow relative w-full h-0 pt-[75%] sm:pt-[55%] z-0">
                            <img sizes="(max-width: 600px) 480px, 800px" src={topic1} class="rounded-3xl object-cover absolute inset-0 w-full h-full" alt="Microsoft announces a five-year commitment to create bigger opportunities for people with disabilities" />
                            <div class="nc-PostTypeFeaturedIcon absolute bottom-2 left-2" data-nc-id="PostTypeFeaturedIcon">
                            </div>
                            <div class="nc-CategoryBadgeList flex flex-wrap space-x-2 absolute top-3 left-3" data-nc-id="CategoryBadgeList">
                                <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 hover:bg-red-800" href="/archive/the-demo-archive-slug">Electronics</a>
                            </div>
                        </div>
                        <a class="absolute inset-0" href="/single/this-is-single-slug"></a>
                        <div class="mt-5 px-4 flex flex-col">
                            <div class="space-y-3">
                                <div class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 relative text-sm">

                                    <span class="text-neutral-500  font-normal">May 20, 2021</span>
                                </div>
                                <h2 class="nc-card-title block font-semibold text-neutral-900 0 text-base sm:text-lg md:text-xl">
                                    <a class="line-clamp-2" title="Microsoft announces a five-year commitment to create bigger opportunities for people with disabilities" href="/single/this-is-single-slug">Microsoft announces a five-year commitment to create bigger opportunities for people with disabilities</a>
                                </h2>
                                <span class="block text-neutral-500  text-[15px] leading-6 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione beatae quasi et, reprehenderit alias veritatis nostrum iste sed laboriosam eveniet possimus.</span>
                            </div>
                            <div class="my-5 border-t border-neutral-200 ">
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="nc-PostCardLikeAndComment flex items-center space-x-2 relative">
                                    <button class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50  hover:bg-rose-50  hover:text-rose-600 " title="Liked">
                                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span class="ml-1 text-neutral-900 ">34</span>
                                    </button>
                                    <a class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors  hover:bg-teal-50  hover:text-teal-600  hidden sm:flex  px-3 h-8 text-xs " title="Comments" href="/single/demo-slug#comments">
                                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"></path>
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path>
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path>
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path>
                                        </svg>
                                        <span class="ml-1 text-neutral-900 ">110</span>
                                    </a>
                                </div>
                                <div class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700  relative">
                                    <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 " title="Save to reading list">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="grid gap-6 md:gap-8">
                        <div class="nc-Card6 sm:shadow-md relative flex group flex-row items-center sm:p-4 sm:rounded-3xl sm:bg-white  sm:border border-neutral-200 h-full">
                            <a class="absolute inset-0 z-0" href="/single/this-is-single-slug"></a>
                            <div class="flex flex-col flex-grow">
                                <div class="space-y-3 mb-4">
                                    <div class="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                                        <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 hover:bg-red-800" href="/archive/the-demo-archive-slug">Electronics</a>
                                    </div>
                                    <h2 class="block font-semibold text-sm sm:text-base">
                                        <a class="line-clamp-2" title="360-degree video: How Microsoft deployed a datacenter to the bottom of the ocean" href="/single/this-is-single-slug">360-degree video: How Microsoft deployed a datacenter to the bottom of the ocean</a>
                                    </h2>
                                    <div class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800  leading-none text-xs">
                                        <span class="text-neutral-500  font-normal">May 20, 2021</span>
                                    </div>
                                </div>
                                <div class="flex items-center flex-wrap justify-between mt-auto">
                                    <div class="nc-PostCardLikeAndComment flex items-center space-x-2 relative">
                                        <button class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50  hover:bg-rose-50  hover:text-rose-600 " title="Liked">
                                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span class="ml-1 text-neutral-900 ">34</span>
                                        </button>
                                        <a class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors hover:bg-teal-50  hover:text-teal-600  hidden sm:flex  px-3 h-8 text-xs " title="Comments" href="/single/demo-slug#comments">
                                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"></path>
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path>
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path>
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path>
                                            </svg>
                                            <span class="ml-1 text-neutral-900 ">110</span>
                                        </a>
                                    </div>
                                    <div class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700  relative">
                                        <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 " title="Save to reading list">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <a class="block relative flex-shrink-0 w-24 h-24 sm:w-40 sm:h-full ml-3 sm:ml-5 rounded-2xl overflow-hidden z-0" href="/single/this-is-single-slug">
                                <img sizes="(max-width: 600px) 180px, 400px" src={topic10} class="object-cover absolute inset-0 w-full h-full" alt="360-degree video: How Microsoft deployed a datacenter to the bottom of the ocean" />
                                <span class="absolute bottom-1 left-1">
                                    <div class="nc-PostTypeFeaturedIcon " data-nc-id="PostTypeFeaturedIcon">
                                    </div>
                                </span>
                            </a>
                        </div>
                        <div class="nc-Card6 sm:shadow-md relative flex group flex-row items-center sm:p-4 sm:rounded-3xl sm:bg-white  sm:border border-neutral-200  h-full">
                            <a class="absolute inset-0 z-0" href="/single-video/this-is-single-slug"></a>
                            <div class="flex flex-col flex-grow">
                                <div class="space-y-3 mb-4">
                                    <div class="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                                        <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-yellow-800 bg-yellow-100 hover:bg-yellow-800" href="/archive/the-demo-archive-slug">Industrial</a>
                                    </div>
                                    <h2 class="block font-semibold text-sm sm:text-base">
                                        <a class="line-clamp-2" title="To cool datacenter servers, Microsoft turns to boiling liquid Donec quis" href="/single-video/this-is-single-slug">To cool datacenter servers, Microsoft turns to boiling liquid Donec quis</a>
                                    </h2>
                                    <div class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800  leading-none text-xs">
                                        <span class="text-neutral-500  font-normal">May 20, 2021</span>
                                    </div>
                                </div>
                                <div class="flex items-center flex-wrap justify-between mt-auto">
                                    <div class="nc-PostCardLikeAndComment flex items-center space-x-2 relative">
                                        <button class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50  hover:bg-rose-50  hover:text-rose-600 " title="Liked">
                                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span class="ml-1 text-neutral-900 ">34</span>
                                        </button>
                                        <a class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors  hover:bg-teal-50  hover:text-teal-600  hidden sm:flex  px-3 h-8 text-xs " title="Comments" href="/single/demo-slug#comments">
                                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"></path>
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path>
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path>
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path>
                                            </svg>
                                            <span class="ml-1 text-neutral-900 ">110</span>
                                        </a>
                                    </div>
                                    <div class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700  relative">
                                        <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 " title="Save to reading list"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                        </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <a class="block relative flex-shrink-0 w-24 h-24 sm:w-40 sm:h-full ml-3 sm:ml-5 rounded-2xl overflow-hidden z-0" href="/single-video/this-is-single-slug">
                                <img sizes="(max-width: 600px) 180px, 400px" src={topic5} class=" object-cover absolute inset-0 w-full h-full" alt="To cool datacenter servers, Microsoft turns to boiling liquid Donec quis" />
                            </a>
                        </div>
                        <div class="nc-Card6 sm:shadow-md relative flex group flex-row items-center  sm:p-4 sm:rounded-3xl sm:bg-white  sm:border border-neutral-200  h-full">
                            <a class="absolute inset-0 z-0" href="/single-video/this-is-single-slug"></a>
                            <div class="flex flex-col flex-grow">
                                <div class="space-y-3 mb-4">
                                    <div class="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                                        <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 hover:bg-red-800" href="/archive/the-demo-archive-slug">Electronics</a>
                                    </div>
                                    <h2 class="block font-semibold text-sm sm:text-base">
                                        <a class="line-clamp-2" title="Xbox connects people to help through Crisis Text Line and Aenean lectus" href="/single-video/this-is-single-slug">Xbox connects people to help through Crisis Text Line and Aenean lectus</a>
                                    </h2>
                                    <div class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800  leading-none text-xs">
                                        <span class="text-neutral-500  font-normal">May 20, 2021</span>
                                    </div>
                                </div>
                                <div class="flex items-center flex-wrap justify-between mt-auto">
                                    <div class="nc-PostCardLikeAndComment flex items-center space-x-2 relative">
                                        <button class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50  hover:bg-rose-50  hover:text-rose-600 " title="Liked">
                                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd">
                                            </path>
                                            </svg>
                                            <span class="ml-1 text-neutral-900 ">34</span>
                                        </button>
                                        <a class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors  hover:bg-teal-50  hover:text-teal-600  hidden sm:flex  px-3 h-8 text-xs " title="Comments" href="/single/demo-slug#comments">
                                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"></path>
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path>
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path>
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path>
                                            </svg>
                                            <span class="ml-1 text-neutral-900 ">110</span>
                                        </a>
                                    </div>
                                    <div class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700  relative"><button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 " title="Save to reading list">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                        </svg>
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <a class="block relative flex-shrink-0 w-24 h-24 sm:w-40 sm:h-full ml-3 sm:ml-5 rounded-2xl overflow-hidden z-0" href="/single-video/this-is-single-slug">
                                <img sizes="(max-width: 600px) 180px, 400px" src={topic3} class="object-cover absolute inset-0 w-full h-full" alt="Xbox connects people to help through Crisis Text Line and Aenean lectus" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <a href="/#" class="nc-SectionAds mx-4 md:mx-20 sm:mx-9 mb-6 block text-center">
                <span class="text-xs text-neutral-500">- Go Shopping -</span>
                <img src={shopbann} class="mx-auto" alt="shop" />
            </a>

            <div className="nc-SectionMagazine7 relative py-12 lg:py-28 mx-4 md:mx-20 sm:mx-9">
                <div class="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 ">
                    <div class="max-w-2xl">
                        <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold">View more gallery articles</h2>
                        <span class="mt-2 md:mt-3 font-normal block text-base sm:text-lg text-neutral-500 ">Over 218 articles has gallery type</span>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-6 md:gap-8">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-3">
                        <div class="nc-Card10 relative flex flex-col h-full">
                            <a class="absolute inset-0" href="/single-gallery/this-is-single-slug"></a>
                            <div class="block group rounded-3xl flex-shrink-0 relative w-full aspect-w-9 aspect-h-7 sm:aspect-h-9 overflow-hidden z-0">
                                <div>
                                    <div class=" group group/cardGallerySlider nc-PostFeaturedMedia relative w-full h-full">
                                        <Carousel>
                                            <img src={topic1} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />
                                            <img src={topic7} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />
                                            <img src={topic1} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />
                                            <img src={topic9} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />

                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                            <div class="absolute top-3 inset-x-3 flex justify-between items-start space-x-4 z-10">
                                <div class="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                                    <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-pink-800 bg-pink-100 hover:bg-pink-800" href="/archive/the-demo-archive-slug">Planner</a>
                                </div>
                                <div class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700  ">
                                    <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 " title="Save to reading list">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="space-y-2.5 mt-4">
                                <div class="nc-PostCardMetaV2 inline-flex items-center flex-wrap text-neutral-800  leading-none text-xs">
                                    <div class="relative flex items-center space-x-2">
                                        <div>
                                            <h2 class="block font-medium text-base">
                                                <a class="line-clamp-1" href="/single-gallery/this-is-single-slug">People who inspired us in 2019 </a>
                                            </h2>
                                            <a class="flex mt-1.5 center" href="/author/the-demo-author-slug">
                                                <span class="block text-burnt hover:text-neutral-500 font-semibold text-[20px]">1.2</span>
                                                <span class="text-neutral-500  mx-[6px] font-medium">$</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="nc-Card10 relative flex flex-col h-full">
                            <a class="absolute inset-0" href="/single-gallery/this-is-single-slug"></a>
                            <div class="block group rounded-3xl flex-shrink-0 relative w-full aspect-w-9 aspect-h-7 sm:aspect-h-9 overflow-hidden z-0">
                                <div>
                                    <div class=" group group/cardGallerySlider nc-PostFeaturedMedia relative w-full h-full">
                                        <Carousel>
                                            <img src={topic2} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />
                                            <img src={topic7} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />
                                            <img src={topic1} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />
                                            <img src={topic9} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />

                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                            <div class="absolute top-3 inset-x-3 flex justify-between items-start space-x-4 z-10">
                                <div class="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                                    <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-pink-800 bg-pink-100 hover:bg-pink-800" href="/archive/the-demo-archive-slug">Planner</a>
                                </div>
                                <div class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 ">
                                    <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 " title="Save to reading list">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="space-y-2.5 mt-4">
                                <div class="nc-PostCardMetaV2 inline-flex items-center flex-wrap text-neutral-800  leading-none text-xs">
                                    <div class="relative flex items-center space-x-2">
                                        <div>
                                            <h2 class="block font-medium text-base">
                                                <a class="line-clamp-1" href="/single-gallery/this-is-single-slug">People who inspired us in 2019 </a>
                                            </h2>
                                            <a class="flex mt-1.5 center" href="/author/the-demo-author-slug">
                                                <span class="block text-burnt hover:text-neutral-500 font-semibold text-[20px]">1.2</span>
                                                <span class="text-neutral-500  mx-[6px] font-medium">$</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="nc-Card10 relative flex flex-col h-full">
                            <a class="absolute inset-0" href="/single-gallery/this-is-single-slug"></a>
                            <div class="block group rounded-3xl flex-shrink-0 relative w-full aspect-w-9 aspect-h-7 sm:aspect-h-9 overflow-hidden z-0">
                                <div>
                                    <div class=" group group/cardGallerySlider nc-PostFeaturedMedia relative w-full h-full">
                                        <Carousel>
                                            <img src={topic3} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />
                                            <img src={topic7} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />
                                            <img src={topic1} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />
                                            <img src={topic9} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />

                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                            <div class="absolute top-3 inset-x-3 flex justify-between items-start space-x-4 z-10">
                                <div class="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                                    <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100 hover:bg-blue-800" href="/archive/the-demo-archive-slug">Cards</a>
                                </div>
                                <div class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700  ">
                                    <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 " title="Save to reading list">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="space-y-2.5 mt-4">
                                <div class="nc-PostCardMetaV2 inline-flex items-center flex-wrap text-neutral-800  leading-none text-xs">
                                    <div class="relative flex items-center space-x-2">
                                        <div>
                                            <h2 class="block font-medium text-base">
                                                <a class="line-clamp-1" href="/single-gallery/this-is-single-slug">People who inspired us in 2019 </a>
                                            </h2>
                                            <a class="flex mt-1.5 center" href="/author/the-demo-author-slug">
                                                <span class="block text-burnt hover:text-neutral-500 font-semibold text-[20px]">1.2</span>
                                                <span class="text-neutral-500  mx-[6px] font-medium">$</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="nc-Card10 relative flex flex-col h-full">
                            <a class="absolute inset-0" href="/single-gallery/this-is-single-slug"></a>
                            <div class="block group rounded-3xl flex-shrink-0 relative w-full aspect-w-9 aspect-h-7 sm:aspect-h-9 overflow-hidden z-0">
                                <div>
                                    <div class=" group group/cardGallerySlider nc-PostFeaturedMedia relative w-full h-full">
                                        <Carousel>
                                            <img src={topic9} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />
                                            <img src={topic7} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />
                                            <img src={topic1} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />
                                            <img src={topic9} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />

                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                            <div class="absolute top-3 inset-x-3 flex justify-between items-start space-x-4 z-10">
                                <div class="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                                    <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 hover:bg-red-800" href="/archive/the-demo-archive-slug">sheet</a>
                                </div>
                                <div class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700  ">
                                    <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 " title="Save to reading list">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="space-y-2.5 mt-4">
                                <div class="nc-PostCardMetaV2 inline-flex items-center flex-wrap text-neutral-800  leading-none text-xs">
                                    <div class="relative flex items-center space-x-2">
                                        <div>
                                            <h2 class="block font-medium text-base">
                                                <a class="line-clamp-1" href="">How architects visualize design for world’s biggest airport</a>
                                            </h2>
                                            <a class="flex mt-1.5 center" href="/author/the-demo-author-slug">
                                                <span class="block text-burnt hover:text-neutral-500 font-semibold text-[20px]">1.2</span>
                                                <span class="text-neutral-500  mx-[6px] font-medium">$</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="relative py-2 mx-4 md:mx-20 sm:mx-9 mb-4">
                <div class="absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 bg-neutral-50 ">
                    <span class="sr-only hidden">bg</span>
                </div>
                <div class="nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-center  ">
                    <div class="flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5">
                        <span class="text-xs uppercase tracking-wider font-medium text-neutral-400">supper change your planning powers</span>
                        <h2 class="font-semibold text-3xl sm:text-4xl mt-3">Become an author and share your great stories</h2>
                        <span class="block mt-8 text-neutral-500 ">Become an author you can earn extra income by writing articles. Read and share new perspectives on just about any topic. Everyone’s welcome.</span>
                        <button class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-burnt hover:bg-primary-6000 text-neutral-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 mt-8 ">Become an author</button>
                    </div>
                    <div class="flex-grow">
                        <img sizes="(max-width: 568px) 100vw, 50vw" src={Hero1} class="undefined" alt="hero" />
                    </div>
                </div>
            </div>


            <div class="relative py-16 mx-4 md:mx-20 sm:mx-9">

                <div class="nc-SectionSliderPosts ">
                    <div class="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 ">
                        <div class="text-center w-full max-w-2xl mx-auto ">
                            <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold">More design articles</h2>
                            <span class="mt-2 md:mt-3 font-normal block text-base sm:text-lg text-neutral-500">Over 1118 articles </span>
                        </div>
                    </div>
                    <Slider {...settings}>
                        <div class="relative inline-block px-2 xl:px-4 whitespace-normal w-1/4 ">
                            <div class="nc-Card11 relative flex flex-col group rounded-3xl overflow-hidden bg-white ">
                                <div class="block flex-shrink-0 relative w-full h-full rounded-3xl overflow-hidden z-10 aspect-w-4 aspect-h-3">
                                    <div>
                                        <div class="nc-PostFeaturedMedia relative w-full ">
                                            <img src={topic2} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />
                                            <a class="block absolute inset-0 bg-black/20 transition-opacity opacity-0 group-hover:opacity-100" href="/single/this-is-single-slug"></a>
                                        </div>
                                    </div>
                                </div>
                                <a class="absolute inset-0" href="/single/this-is-single-slug"></a>
                                <span class="absolute top-3 inset-x-3 z-10">
                                    <div class="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                                        <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-yellow-800 bg-yellow-100 hover:bg-yellow-800" href="/archive/the-demo-archive-slug">Industrial</a>

                                    </div>
                                </span>
                                <div class="p-4 flex flex-col space-y-3">
                                    <div class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800  leading-none text-xs">
                                        <span class="text-neutral-500  font-normal">May 20, 2021</span>
                                    </div>
                                    <h3 class="nc-card-title block text-base font-semibold text-neutral-900 ">
                                        <span class="line-clamp-2" title="How architects visualize design for world’s biggest airport">How architects visualize design for world’s biggest airport</span>
                                    </h3>
                                    <div class="flex items-end justify-between mt-auto">
                                        <div class="nc-PostCardLikeAndComment flex items-center space-x-2 relative">
                                            <button class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50  hover:bg-rose-50  hover:text-rose-600 " title="Liked">
                                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
                                                </svg>
                                                <span class="ml-1 text-neutral-900 ">34</span>
                                            </button>
                                            <a class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors  hover:bg-teal-50  hover:text-teal-600  hidden sm:flex  px-3 h-8 text-xs " title="Comments" href="/single/demo-slug#comments">
                                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"></path>
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path>
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path>
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path>
                                                </svg>
                                                <span class="ml-1 text-neutral-900 ">110</span>
                                            </a>
                                        </div>
                                        <div class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700  relative">
                                            <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 " title="Save to reading list">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="relative inline-block px-2 xl:px-4 whitespace-normal w-1/4 ">
                            <div class="nc-Card11 relative flex flex-col group rounded-3xl overflow-hidden bg-white ">
                                <div class="block flex-shrink-0 relative w-full h-full rounded-3xl overflow-hidden z-10 aspect-w-4 aspect-h-3">
                                    <div>
                                        <div class="nc-PostFeaturedMedia relative w-full ">
                                            <img src={topic7} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />
                                            <a class="block absolute inset-0 bg-black/20 transition-opacity opacity-0 group-hover:opacity-100" href="/single/this-is-single-slug"></a>
                                        </div>
                                    </div>
                                </div>
                                <a class="absolute inset-0" href="/single/this-is-single-slug"></a>
                                <span class="absolute top-3 inset-x-3 z-10">
                                    <div class="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                                        <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 hover:bg-red-800" href="/archive/the-demo-archive-slug">Electronics</a>

                                    </div>
                                </span>
                                <div class="p-4 flex flex-col space-y-3">
                                    <div class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800  leading-none text-xs">
                                        <span class="text-neutral-500  font-normal">May 20, 2021</span>
                                    </div>
                                    <h3 class="nc-card-title block text-base font-semibold text-neutral-900 ">
                                        <span class="line-clamp-2" title="How architects visualize design for world’s biggest airport">How architects visualize design for world’s biggest airport</span>
                                    </h3>
                                    <div class="flex items-end justify-between mt-auto">
                                        <div class="nc-PostCardLikeAndComment flex items-center space-x-2 relative">
                                            <button class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50  hover:bg-rose-50  hover:text-rose-600 " title="Liked">
                                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
                                                </svg>
                                                <span class="ml-1 text-neutral-900 ">34</span>
                                            </button>
                                            <a class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors  hover:bg-teal-50  hover:text-teal-600  hidden sm:flex  px-3 h-8 text-xs " title="Comments" href="/single/demo-slug#comments">
                                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"></path>
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path>
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path>
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path>
                                                </svg>
                                                <span class="ml-1 text-neutral-900 ">110</span>
                                            </a>
                                        </div>
                                        <div class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700  relative">
                                            <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 " title="Save to reading list">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="relative inline-block px-2 xl:px-4 whitespace-normal w-1/4 ">
                            <div class="nc-Card11 relative flex flex-col group rounded-3xl overflow-hidden bg-white ">
                                <div class="block flex-shrink-0 relative w-full h-full rounded-3xl overflow-hidden z-10 aspect-w-4 aspect-h-3">
                                    <div>
                                        <div class="nc-PostFeaturedMedia relative w-full ">
                                            <img src={topic1} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />
                                            <a class="block absolute inset-0 bg-black/20 transition-opacity opacity-0 group-hover:opacity-100" href="/single/this-is-single-slug"></a>
                                        </div>
                                    </div>
                                </div>
                                <a class="absolute inset-0" href="/single/this-is-single-slug"></a>
                                <span class="absolute top-3 inset-x-3 z-10">
                                    <div class="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                                        <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100 hover:bg-blue-800" href="/archive/the-demo-archive-slug">Cards</a>
                                    </div>
                                </span>
                                <div class="p-4 flex flex-col space-y-3">
                                    <div class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800  leading-none text-xs">
                                        <span class="text-neutral-500  font-normal">May 20, 2021</span>
                                    </div>
                                    <h3 class="nc-card-title block text-base font-semibold text-neutral-900 ">
                                        <span class="line-clamp-2" title="How architects visualize design for world’s biggest airport">How architects visualize design for world’s biggest airport</span>
                                    </h3>
                                    <div class="flex items-end justify-between mt-auto">
                                        <div class="nc-PostCardLikeAndComment flex items-center space-x-2 relative">
                                            <button class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50  hover:bg-rose-50  hover:text-rose-600 " title="Liked">
                                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
                                                </svg>
                                                <span class="ml-1 text-neutral-900 ">34</span>
                                            </button>
                                            <a class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors  hover:bg-teal-50  hover:text-teal-600  hidden sm:flex  px-3 h-8 text-xs " title="Comments" href="/single/demo-slug#comments">
                                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"></path>
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path>
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path>
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path>
                                                </svg>
                                                <span class="ml-1 text-neutral-900 ">110</span>
                                            </a>
                                        </div>
                                        <div class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700  relative">
                                            <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 " title="Save to reading list">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="relative inline-block px-2 xl:px-4 whitespace-normal w-1/4 ">
                            <div class="nc-Card11 relative flex flex-col group rounded-3xl overflow-hidden bg-white ">
                                <div class="block flex-shrink-0 relative w-full h-full rounded-3xl overflow-hidden z-10 aspect-w-4 aspect-h-3">
                                    <div>
                                        <div class="nc-PostFeaturedMedia relative w-full ">
                                            <img src={topic6} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />
                                            <a class="block absolute inset-0 bg-black/20 transition-opacity opacity-0 group-hover:opacity-100" href="/single/this-is-single-slug"></a>
                                        </div>
                                    </div>
                                </div>
                                <a class="absolute inset-0" href="/single/this-is-single-slug"></a>
                                <span class="absolute top-3 inset-x-3 z-10">
                                    <div class="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                                        <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-pink-800 bg-pink-100 hover:bg-pink-800" href="/archive/the-demo-archive-slug">Planner</a>
                                    </div>
                                </span>
                                <div class="p-4 flex flex-col space-y-3">
                                    <div class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800  leading-none text-xs">
                                        <span class="text-neutral-500  font-normal">May 20, 2021</span>
                                    </div>
                                    <h3 class="nc-card-title block text-base font-semibold text-neutral-900 ">
                                        <span class="line-clamp-2" title="How architects visualize design for world’s biggest airport">How architects visualize design for world’s biggest airport</span>
                                    </h3>
                                    <div class="flex items-end justify-between mt-auto">
                                        <div class="nc-PostCardLikeAndComment flex items-center space-x-2 relative">
                                            <button class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50  hover:bg-rose-50  hover:text-rose-600 " title="Liked">
                                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
                                                </svg>
                                                <span class="ml-1 text-neutral-900 ">34</span>
                                            </button>
                                            <a class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors  hover:bg-teal-50  hover:text-teal-600  hidden sm:flex  px-3 h-8 text-xs " title="Comments" href="/single/demo-slug#comments">
                                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"></path>
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path>
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path>
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path>
                                                </svg>
                                                <span class="ml-1 text-neutral-900 ">110</span>
                                            </a>
                                        </div>
                                        <div class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700  relative">
                                            <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 " title="Save to reading list">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="relative inline-block px-2 xl:px-4 whitespace-normal w-1/4 ">
                            <div class="nc-Card11 relative flex flex-col group rounded-3xl overflow-hidden bg-white ">
                                <div class="block flex-shrink-0 relative w-full h-full rounded-3xl overflow-hidden z-10 aspect-w-4 aspect-h-3">
                                    <div>
                                        <div class="nc-PostFeaturedMedia relative w-full ">
                                            <img src={topic5} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />
                                            <a class="block absolute inset-0 bg-black/20 transition-opacity opacity-0 group-hover:opacity-100" href="/single/this-is-single-slug"></a>
                                        </div>
                                    </div>
                                </div>
                                <a class="absolute inset-0" href="/single/this-is-single-slug"></a>
                                <span class="absolute top-3 inset-x-3 z-10">
                                    <div class="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                                        <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 hover:bg-red-800" href="/archive/the-demo-archive-slug">Electronics</a>
                                    </div>
                                </span>
                                <div class="p-4 flex flex-col space-y-3">
                                    <div class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800  leading-none text-xs">
                                        <span class="text-neutral-500  font-normal">May 20, 2021</span>
                                    </div>
                                    <h3 class="nc-card-title block text-base font-semibold text-neutral-900 ">
                                        <span class="line-clamp-2" title="How architects visualize design for world’s biggest airport">How architects visualize design for world’s biggest airport</span>
                                    </h3>
                                    <div class="flex items-end justify-between mt-auto">
                                        <div class="nc-PostCardLikeAndComment flex items-center space-x-2 relative">
                                            <button class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50  hover:bg-rose-50  hover:text-rose-600 " title="Liked">
                                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
                                                </svg>
                                                <span class="ml-1 text-neutral-900 ">34</span>
                                            </button>
                                            <a class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors  hover:bg-teal-50  hover:text-teal-600  hidden sm:flex  px-3 h-8 text-xs " title="Comments" href="/single/demo-slug#comments">
                                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"></path>
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path>
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path>
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path>
                                                </svg>
                                                <span class="ml-1 text-neutral-900 ">110</span>
                                            </a>
                                        </div>
                                        <div class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700  relative">
                                            <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 " title="Save to reading list">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Slider>


                </div>
            </div>


            <div class="nc-SectionSubscribe2 relative flex flex-col lg:flex-row items-center py-16 lg:pt-28 mx-4 md:mx-20 sm:mx-9">
                <div class="flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5">
                    <h2 class="font-semibold text-4xl">Join our newsletter 🎉</h2>
                    <span class="block mt-6 text-neutral-500 ">Read and share new perspectives on just about any topic. Everyone’s welcome.</span>
                    <ul class="space-y-5 mt-10">
                        <li class="flex items-center space-x-4">
                            <span class="nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100  ">01</span>
                            <span class="font-medium text-neutral-700 ">Get more discount</span>
                        </li>
                        <li class="flex items-center space-x-4">
                            <span class="nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100  ">02</span>
                            <span class="font-medium text-neutral-700 ">Get premium magazines</span>
                        </li>
                    </ul>
                    <form class="mt-10 relative max-w-sm ">
                        <input type="email" class="block w-full border border-neutral-500 focus:border-blue-300 focus:ring focus:ring-blue-200 bg-white rounded-full text-sm font-normal h-11 px-4 py-3  " required="" aria-required="true" placeholder="Enter your email" />
                        <button class="ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-70 bg-slate-900 hover:bg-slate-800 text-slate-50 absolute transform top-1/2 -translate-y-1/2 right-1   w-9 h-9  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 " type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-5 h-5 ">
                                <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </form>
                </div>
                <div class="flex-grow">
                    <img sizes="(max-width: 768px) 100vw, 50vw" src={getfree}  alt="subsc" />
                </div>
            </div>


        </>

    )


}

export default Banner