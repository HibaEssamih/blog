import React from 'react'
import { shopbann, getfree, banner1, Hero1, topic1, topic2, topic3, topic4, topic5, topic6, topic7, topic8, topic9, topic10 } from '../../../assets'
import { Dialog, Transition, Listbox } from '@headlessui/react'
import { Fragment, useState, useRef, useEffect } from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon, CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import Carousel from '../Carousel';

export const ProductDetail = () => {
    let [isOpenAddToBag, setIsOpenAddToBag] = useState(false)
    let [isOpenQuickShow, setIsOpenQuickShow] = useState(false)

    function closeModalAddToBag() {
        setIsOpenAddToBag(false)
    }

    function openModalAddToBag() {
        setIsOpenAddToBag(true)
    }

    function closeModalQuickShow() {
        setIsOpenQuickShow(false)
    }

    function openModalQuickShow() {
        setIsOpenQuickShow(true)
    }

    useEffect(() => {
        // Check if the dialog is open before setting the timeout
        if (isOpenAddToBag) {
            const timeoutId = setTimeout(() => {
                closeModalAddToBag();
            }, 2000);

            // Clear the timeout if the component unmounts or if the dialog is closed before the timeout
            return () => clearTimeout(timeoutId);
        }
    }, [isOpenAddToBag, closeModalAddToBag]);


    return (
        <>
            <div className='mx-4 md:mx-20 sm:mx-9 pb-16 lg:pb-24'>
                <main class="container mt-5 lg:mt-11">
                    <div class="lg:flex">
                        <div class="w-full lg:w-[55%] ">
                            <div class="relative">
                                <div class="block group rounded-3xl flex-shrink-0 relative w-full aspect-w-9 aspect-h-7 sm:aspect-h-9 overflow-hidden z-0">
                                    <div>
                                        <div class=" group group/cardGallerySlider nc-PostFeaturedMedia relative w-full h-full">
                                            <Carousel>
                                                <img src={topic1} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />
                                                <img src={topic7} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />
                                                <img src={topic1} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />
                                                <img src={topic9} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />
                                                <img src={topic8} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />

                                            </Carousel>
                                        </div>
                                    </div>
                                </div>
                                <div class="absolute top-3 left-3 px-2.5 py-1.5 text-xs bg-white nc-shadow-lg rounded-full flex items-center justify-center text-gray-700 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-3.5 h-3.5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
                                    </svg>
                                    <span class="ml-1 leading-none">New in</span>
                                </div>
                                <button class="w-9 h-9 flex items-center justify-center rounded-full bg-white text-neutral-700 nc-shadow-lg absolute right-3 top-3 ">
                                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                        <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="w-full lg:w-[45%] pt-10 lg:pt-0 lg:pl-7 xl:pl-9 2xl:pl-10">
                            <div class="space-y-7 2xl:space-y-8">
                                <div>
                                    <h2 class="text-2xl font-semibold hover:text-blue-600 transition-colors">
                                        <a href="/product-detail">Heavy Weight Shoes</a>
                                    </h2>
                                    <div class="flex items-center mt-5 space-x-4 sm:space-x-5">
                                        <div class="">
                                            <div class="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-3 text-lg font-semibold">
                                                <span class="text-green-500 !leading-none">$112.00</span>
                                            </div>
                                        </div>
                                        <div class="h-6 border-l border-gray-300"></div>
                                        <div class="flex items-center">
                                            <a class="flex items-center text-sm font-medium" href="/product-detail">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5 pb-[1px] text-yellow-400">
                                                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                                </svg>
                                                <div class="ml-1.5 flex">
                                                    <span>4.9</span>
                                                    <span class="block mx-2">·</span>
                                                    <span class="text-gray-600 underline">142 reviews</span>
                                                </div>
                                            </a>
                                            <span class="hidden sm:block mx-2.5">·</span>
                                            <div class="hidden sm:flex items-center text-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-3.5 h-3.5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
                                                </svg>
                                                <span class="ml-1 leading-none">New in</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex space-x-3.5">
                                    <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 ttnc-ButtonBlue disabled:bg-opacity-90 bg-gray-900 hover:bg-gray-800 text-gray-50 shadow-xl flex-1 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                                        <svg class="hidden sm:inline-block w-5 h-5 mb-0.5" viewBox="0 0 9 9" fill="none">
                                            <path d="M2.99997 4.125C3.20708 4.125 3.37497 4.29289 3.37497 4.5C3.37497 5.12132 3.87865 5.625 4.49997 5.625C5.12129 5.625 5.62497 5.12132 5.62497 4.5C5.62497 4.29289 5.79286 4.125 5.99997 4.125C6.20708 4.125 6.37497 4.29289 6.37497 4.5C6.37497 5.53553 5.5355 6.375 4.49997 6.375C3.46444 6.375 2.62497 5.53553 2.62497 4.5C2.62497 4.29289 2.79286 4.125 2.99997 4.125Z" fill="currentColor"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.37497 2.625H7.17663C7.76685 2.625 8.25672 3.08113 8.29877 3.66985L8.50924 6.61641C8.58677 7.70179 7.72715 8.625 6.63901 8.625H2.36094C1.2728 8.625 0.413174 7.70179 0.490701 6.61641L0.70117 3.66985C0.743222 3.08113 1.23309 2.625 1.82331 2.625H2.62497L2.62497 2.25C2.62497 1.21447 3.46444 0.375 4.49997 0.375C5.5355 0.375 6.37497 1.21447 6.37497 2.25V2.625ZM3.37497 2.625H5.62497V2.25C5.62497 1.62868 5.12129 1.125 4.49997 1.125C3.87865 1.125 3.37497 1.62868 3.37497 2.25L3.37497 2.625ZM1.82331 3.375C1.62657 3.375 1.46328 3.52704 1.44926 3.72328L1.2388 6.66985C1.19228 7.32107 1.70805 7.875 2.36094 7.875H6.63901C7.29189 7.875 7.80766 7.32107 7.76115 6.66985L7.55068 3.72328C7.53666 3.52704 7.37337 3.375 7.17663 3.375H1.82331Z" fill="currentColor"></path>
                                        </svg>
                                        <span class="ml-3">Add to cart</span>
                                    </button>
                                </div>

                                <hr class=" border-gray-200 " />

                                <div class="w-full rounded-2xl space-y-2.5">


                                    <Disclosure defaultOpen>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                    <span>Description</span>
                                                    <ChevronUpIcon
                                                        className={`${open ? 'rotate-180 transform' : ''
                                                            } h-5 w-5 text-gray-500`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                                    Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.

                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>

                                    <Disclosure defaultOpen>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                    <span>Features</span>
                                                    <ChevronUpIcon
                                                        className={`${open ? 'rotate-180 transform' : ''
                                                            } h-5 w-5 text-gray-500`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                                    <ul class="list-disc list-inside leading-7">
                                                        <li>Material: 43% Sorona Yarn + 57% Stretch Polyester</li>
                                                        <li>Casual pants waist with elastic elastic inside</li>
                                                        <li>The pants are a bit tight so you always feel comfortable</li>
                                                        <li>Excool technology application 4-way stretch</li>
                                                    </ul>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>

                                    <Disclosure >
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                    <span>How it Fits</span>
                                                    <ChevronUpIcon
                                                        className={`${open ? 'rotate-180 transform' : ''
                                                            } h-5 w-5 text-gray-500`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                                    Use this as a guide. Preference is a huge factor — if you're near the top of a size range and/or prefer more coverage, you may want to size up.
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>

                                    <Disclosure >
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                    <span>FAQ</span>
                                                    <ChevronUpIcon
                                                        className={`${open ? 'rotate-180 transform' : ''
                                                            } h-5 w-5 text-gray-500`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                                    <ul class="list-disc list-inside leading-7">
                                                        <li>All full-priced, unworn items, with tags attached and in their original packaging are eligible for return or exchange within 30 days of placing your order.</li>
                                                        <li>Please note, packs must be returned in full. We do not accept partial returns of packs.</li>
                                                        <li>Want to know our full returns policies? Here you go.</li>
                                                        <li>Want more info about shipping, materials or care instructions? Here!</li>
                                                    </ul>

                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>

                                </div>

                                <div class="hidden xl:block">
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 relative">
                                        <div class="flex flex-col p-5 rounded-2xl bg-red-50">
                                            <div>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 14H13C14.1 14 15 13.1 15 12V2H6C4.5 2 3.19001 2.82999 2.51001 4.04999" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M2 17C2 18.66 3.34 20 5 20H6C6 18.9 6.9 18 8 18C9.1 18 10 18.9 10 20H14C14 18.9 14.9 18 16 18C17.1 18 18 18.9 18 20H19C20.66 20 22 18.66 22 17V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L18.58 6.01001C18.22 5.39001 17.56 5 16.84 5H15V12C15 13.1 14.1 14 13 14H12" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M2 8H8" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M2 11H6" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M2 14H4" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </div>
                                            <div class="mt-2.5">
                                                <p class="font-semibold text-gray-900">Free shipping</p>
                                                <p class="text-gray-500 mt-0.5 text-sm">On orders over $50.00</p>
                                            </div>
                                        </div>
                                        <div class="flex flex-col p-5 rounded-2xl bg-blue-50 ">
                                            <div>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M13.7 4.44995L17.6799 6.74994L21.6199 4.45996" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M17.6799 10.82V6.73999" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M16.74 2.21L14.34 3.53996C13.8 3.83996 13.35 4.59995 13.35 5.21995V7.75999C13.35 8.37999 13.79 9.13998 14.34 9.43998L16.74 10.77C17.25 11.06 18.09 11.06 18.61 10.77L21.01 9.43998C21.55 9.13998 22 8.37999 22 7.75999V5.21995C22 4.59995 21.56 3.83996 21.01 3.53996L18.61 2.21C18.1 1.93 17.26 1.93 16.74 2.21Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M2.34998 15.45L6.31998 17.7499L10.27 15.46" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M6.31995 21.82V17.74" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M5.39 13.21L2.99001 14.54C2.45001 14.84 2 15.5999 2 16.2199V18.76C2 19.38 2.44001 20.14 2.99001 20.44L5.39 21.77C5.9 22.06 6.73999 22.06 7.25999 21.77L9.66 20.44C10.2 20.14 10.65 19.38 10.65 18.76V16.2199C10.65 15.5999 10.21 14.84 9.66 14.54L7.25999 13.21C6.73999 12.93 5.9 12.93 5.39 13.21Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </div>
                                            <div class="mt-2.5">
                                                <p class="font-semibold text-gray-900">Very easy to return</p>
                                                <p class="text-gray-500 mt-0.5 text-sm">Just phone number.</p>
                                            </div>
                                        </div>
                                        <div class="flex flex-col p-5 rounded-2xl bg-green-50 ">
                                            <div>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M15 3C16.95 8.84 16.95 15.16 15 21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </div>
                                            <div class="mt-2.5">
                                                <p class="font-semibold text-gray-900">Nationwide Delivery</p>
                                                <p class="text-gray-500 mt-0.5 text-sm">Fast delivery nationwide.</p>
                                            </div>
                                        </div>
                                        <div class="flex flex-col p-5 rounded-2xl bg-amber-50 ">
                                            <div>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M12 7.5V16.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M17 3V7H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M22 2L17 7" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </div>
                                            <div class="mt-2.5">
                                                <p class="font-semibold text-gray-900">Refunds policy</p>
                                                <p class="text-gray-500 mt-0.5 text-sm">60 days return for any reason</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="mt-12 sm:mt-16 space-y-10 sm:space-y-16">
                        <div class="block xl:hidden">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 relative">
                                <div class="flex flex-col p-5 rounded-2xl bg-red-50">
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 14H13C14.1 14 15 13.1 15 12V2H6C4.5 2 3.19001 2.82999 2.51001 4.04999" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M2 17C2 18.66 3.34 20 5 20H6C6 18.9 6.9 18 8 18C9.1 18 10 18.9 10 20H14C14 18.9 14.9 18 16 18C17.1 18 18 18.9 18 20H19C20.66 20 22 18.66 22 17V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L18.58 6.01001C18.22 5.39001 17.56 5 16.84 5H15V12C15 13.1 14.1 14 13 14H12" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M2 8H8" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M2 11H6" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M2 14H4" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                    <div class="mt-2.5">
                                        <p class="font-semibold text-gray-900">Free shipping</p>
                                        <p class="text-gray-500 mt-0.5 text-sm">On orders over $50.00</p>
                                    </div>
                                </div>
                                <div class="flex flex-col p-5 rounded-2xl bg-blue-50 ">
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M13.7 4.44995L17.6799 6.74994L21.6199 4.45996" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M17.6799 10.82V6.73999" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M16.74 2.21L14.34 3.53996C13.8 3.83996 13.35 4.59995 13.35 5.21995V7.75999C13.35 8.37999 13.79 9.13998 14.34 9.43998L16.74 10.77C17.25 11.06 18.09 11.06 18.61 10.77L21.01 9.43998C21.55 9.13998 22 8.37999 22 7.75999V5.21995C22 4.59995 21.56 3.83996 21.01 3.53996L18.61 2.21C18.1 1.93 17.26 1.93 16.74 2.21Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M2.34998 15.45L6.31998 17.7499L10.27 15.46" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M6.31995 21.82V17.74" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M5.39 13.21L2.99001 14.54C2.45001 14.84 2 15.5999 2 16.2199V18.76C2 19.38 2.44001 20.14 2.99001 20.44L5.39 21.77C5.9 22.06 6.73999 22.06 7.25999 21.77L9.66 20.44C10.2 20.14 10.65 19.38 10.65 18.76V16.2199C10.65 15.5999 10.21 14.84 9.66 14.54L7.25999 13.21C6.73999 12.93 5.9 12.93 5.39 13.21Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                    <div class="mt-2.5">
                                        <p class="font-semibold text-gray-900">Very easy to return</p>
                                        <p class="text-gray-500 mt-0.5 text-sm">Just phone number.</p>
                                    </div>
                                </div>
                                <div class="flex flex-col p-5 rounded-2xl bg-green-50 ">
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M15 3C16.95 8.84 16.95 15.16 15 21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                    <div class="mt-2.5">
                                        <p class="font-semibold text-gray-900">Nationwide Delivery</p>
                                        <p class="text-gray-500 mt-0.5 text-sm">Fast delivery nationwide.</p>
                                    </div>
                                </div>
                                <div class="flex flex-col p-5 rounded-2xl bg-amber-50 ">
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M12 7.5V16.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M17 3V7H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M22 2L17 7" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                    <div class="mt-2.5">
                                        <p class="font-semibold text-gray-900">Refunds policy</p>
                                        <p class="text-gray-500 mt-0.5 text-sm">60 days return for any reason</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="">
                            <h2 class="text-2xl font-semibold">Product Details</h2>
                            <div class="prose prose-sm sm:prose sm:max-w-4xl mt-7">
                                <p>The patented eighteen-inch hardwood Arrowhead deck --- finely mortised in, makes this the strongest and most rigid canoe ever built. You cannot buy a canoe that will afford greater satisfaction.</p>
                                <p>The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased in 1978.</p>
                                <ul>
                                    <li>Regular fit, mid-weight t-shirt</li>
                                    <li>Natural color, 100% premium combed organic cotton</li>
                                    <li>Quality cotton grown without the use of herbicides or pesticides - GOTS certified</li>
                                    <li>Soft touch water based printed in the USA</li>
                                </ul>
                            </div>
                        </div>
                        <hr class="border-gray-200 "></hr>
                        <div>
                            <h2 class="text-2xl font-semibold flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-7 h-7 mb-0.5">
                                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                </svg>
                                <span class="ml-1.5"> 4,87 · 142 Reviews</span>
                            </h2>
                            <div class="mt-10">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-y-11 gap-x-28">
                                    <div class="nc-ReviewItem flex flex-col" data-nc-id="ReviewItem">
                                        <div class="flex space-x-4">
                                            <div class="flex-shrink-0 pt-0.5">
                                                <div class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-10 w-10 text-lg ring-1 ring-white">
                                                    <img class="absolute inset-0 w-full h-full object-cover rounded-full" src={topic7} alt="Cody Fisher" />
                                                    <span class="wil-avatar__name">C</span>
                                                </div>
                                            </div>
                                            <div class="flex-1 flex justify-between">
                                                <div class="text-sm sm:text-base">
                                                    <span class="block font-semibold">Cody Fisher</span>
                                                    <span class="block mt-0.5 text-gray-500 text-sm">May 20, 2021</span>
                                                </div>
                                                <div class="mt-0.5 flex text-yellow-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5">
                                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5">
                                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5">
                                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5">
                                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5">
                                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-4 prose prose-sm sm:prose sm:max-w-2xl">
                                            <p class="text-gray-600">Very nice feeling sweater. I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.</p>
                                        </div>
                                    </div>
                                    <div class="nc-ReviewItem flex flex-col" data-nc-id="ReviewItem">
                                        <div class="flex space-x-4">
                                            <div class="flex-shrink-0 pt-0.5">
                                                <div class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-10 w-10 text-lg ring-1 ring-white">
                                                    <img class="absolute inset-0 w-full h-full object-cover rounded-full" src={topic9} alt="Cody Fisher" />
                                                    <span class="wil-avatar__name">C</span>
                                                </div>
                                            </div>
                                            <div class="flex-1 flex justify-between">
                                                <div class="text-sm sm:text-base">
                                                    <span class="block font-semibold">Cody Fisher</span>
                                                    <span class="block mt-0.5 text-gray-500 text-sm">May 20, 2021</span>
                                                </div>
                                                <div class="mt-0.5 flex text-yellow-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5">
                                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5">
                                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5">
                                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5">
                                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5">
                                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-4 prose prose-sm sm:prose sm:max-w-2xl">
                                            <p class="text-gray-600">The quality and sizing mentioned were accurate and really happy with the purchase. Such a cozy and comfortable hoodie. Now that it’s colder, my husband wears his all the time. I wear hoodies all the time.</p>
                                        </div>
                                    </div>
                                    <div class="nc-ReviewItem flex flex-col" data-nc-id="ReviewItem">
                                        <div class="flex space-x-4">
                                            <div class="flex-shrink-0 pt-0.5">
                                                <div class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-10 w-10 text-lg ring-1 ring-white">
                                                    <img class="absolute inset-0 w-full h-full object-cover rounded-full" src={topic2} alt="Cody Fisher" />
                                                    <span class="wil-avatar__name">C</span>
                                                </div>
                                            </div>
                                            <div class="flex-1 flex justify-between">
                                                <div class="text-sm sm:text-base">
                                                    <span class="block font-semibold">Cody Fisher</span>
                                                    <span class="block mt-0.5 text-gray-500 text-sm">May 20, 2021</span>
                                                </div>
                                                <div class="mt-0.5 flex text-yellow-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5">
                                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5">
                                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5">
                                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5">
                                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5">
                                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                                    </svg>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-4 prose prose-sm sm:prose sm:max-w-2xl">
                                            <p class="text-gray-600">I love the charcoal heavyweight hoodie. Still looks new after plenty of washes. If you’re unsure which hoodie to pick.</p>
                                        </div>
                                    </div>

                                </div>
                                <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 ttnc-ButtonSecondary bg-white text-gray-700 hover:bg-gray-100 mt-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                                    Show me all 142 reviews
                                </button>

                            </div>
                        </div>
                        <hr class="border-gray-200 "></hr>
                        <div class="nc-SectionSliderProductCard ">
                            <div class="glidejs_r3d_ flow-root glide--ltr glide--slider glide--swipeable">
                                <div class="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 text-neutral-900">
                                    <div class="">
                                        <h2 class="text-2xl font-semibold">Customers also purchased</h2>
                                    </div>
                                    <div class="mt-4 flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0">
                                        <div class="nc-NextPrev relative flex items-center text-gray-500">
                                            <button class="nc-Button flex-shrink-0 relative h-auto  items-center justify-center rounded-full transition-colors border-transparent bg-white text-neutral-800 text-sm sm:text-base font-medium px-6 !hidden md:!flex ">
                                                <span>View all</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-6 h-6 ml-3">
                                                    <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="glide__track">
                                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8 lg:mt-10">
                                        <div class="nc-ProductCard relative flex flex-col bg-transparent" data-nc-id="ProductCard">
                                            <a class="absolute inset-0" href="/product-detail"></a>
                                            <div class="relative flex-shrink-0 bg-slate-50 rounded-3xl overflow-hidden z-1 group">
                                                <a class="block" href="/product-detail">
                                                    <div class="nc-NcImage flex aspect-w-11 aspect-h-12 w-full " data-nc-id="NcImage">
                                                        <img src={topic8} class="object-cover w-full h-full drop-shadow-xl" alt="nc-imgs" />
                                                    </div>
                                                </a>
                                                <div class="nc-shadow-lg rounded-full flex items-center justify-center absolute top-3 left-3 px-2.5 py-1.5 text-xs bg-white text-slate-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-3.5 h-3.5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
                                                    </svg>
                                                    <span class="ml-1 leading-none">New in</span>
                                                </div>

                                                <button class="w-9 h-9 flex items-center justify-center rounded-full bg-white  text-neutral-700 nc-shadow-lg absolute top-3 right-3 ">
                                                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </button>
                                                <div class="absolute bottom-0 group-hover:bottom-4 inset-x-1 flex justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                                    <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-xs py-2 px-4  disabled:bg-opacity-90 bg-gray-900 hover:bg-gray-800 text-neutral-50  shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900" onClick={openModalAddToBag}>
                                                        <svg class="w-3.5 h-3.5 mb-0.5" viewBox="0 0 9 9" fill="none">
                                                            <path d="M2.99997 4.125C3.20708 4.125 3.37497 4.29289 3.37497 4.5C3.37497 5.12132 3.87865 5.625 4.49997 5.625C5.12129 5.625 5.62497 5.12132 5.62497 4.5C5.62497 4.29289 5.79286 4.125 5.99997 4.125C6.20708 4.125 6.37497 4.29289 6.37497 4.5C6.37497 5.53553 5.5355 6.375 4.49997 6.375C3.46444 6.375 2.62497 5.53553 2.62497 4.5C2.62497 4.29289 2.79286 4.125 2.99997 4.125Z" fill="currentColor"></path>
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.37497 2.625H7.17663C7.76685 2.625 8.25672 3.08113 8.29877 3.66985L8.50924 6.61641C8.58677 7.70179 7.72715 8.625 6.63901 8.625H2.36094C1.2728 8.625 0.413174 7.70179 0.490701 6.61641L0.70117 3.66985C0.743222 3.08113 1.23309 2.625 1.82331 2.625H2.62497L2.62497 2.25C2.62497 1.21447 3.46444 0.375 4.49997 0.375C5.5355 0.375 6.37497 1.21447 6.37497 2.25V2.625ZM3.37497 2.625H5.62497V2.25C5.62497 1.62868 5.12129 1.125 4.49997 1.125C3.87865 1.125 3.37497 1.62868 3.37497 2.25L3.37497 2.625ZM1.82331 3.375C1.62657 3.375 1.46328 3.52704 1.44926 3.72328L1.2388 6.66985C1.19228 7.32107 1.70805 7.875 2.36094 7.875H6.63901C7.29189 7.875 7.80766 7.32107 7.76115 6.66985L7.55068 3.72328C7.53666 3.52704 7.37337 3.375 7.17663 3.375H1.82331Z" fill="currentColor"></path>
                                                        </svg>
                                                        <span class="ml-1">Add to bag</span>
                                                    </button>
                                                    <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full text-xs py-2 px-4 ttnc-ButtonSecondary bg-white text-slate-700  dark:bg-slate-900 dark:text-slate-300 hover:!bg-gray-100 hover:text-slate-900 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 dark:focus:ring-offset-0" onClick={openModalQuickShow} >
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-3.5 h-3.5">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"></path>
                                                        </svg>
                                                        <span class="ml-1">Quick view</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="space-y-4 px-2.5 pt-5 pb-2.5">
                                                <div>
                                                    <h2 class="nc-ProductCard__title text-base font-semibold transition-colors">Round Buckle 1" Belt</h2>
                                                    <p class="text-sm text-slate-500 mt-1">Classic green</p>
                                                </div>
                                                <div class="flex justify-between items-end">
                                                    <div>
                                                        <div class="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                                                            <span class="text-green-500"> $68.00</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex items-center mb-0.5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5 pb-[1px] text-amber-400">
                                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                                        </svg>
                                                        <span class="text-sm ml-1 text-slate-500">4.9 (85 reviews)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="nc-ProductCard relative flex flex-col bg-transparent" data-nc-id="ProductCard">
                                            <a class="absolute inset-0" href="/product-detail"></a>
                                            <div class="relative flex-shrink-0 bg-slate-50 rounded-3xl overflow-hidden z-1 group">
                                                <a class="block" href="/product-detail">
                                                    <div class="nc-NcImage flex aspect-w-11 aspect-h-12 w-full " data-nc-id="NcImage">
                                                        <img src={topic5} class="object-cover w-full h-full drop-shadow-xl" alt="nc-imgs" />
                                                    </div>
                                                </a>
                                                <div class="nc-shadow-lg rounded-full flex items-center justify-center absolute top-3 left-3 px-2.5 py-1.5 text-xs bg-white text-slate-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-3.5 h-3.5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
                                                    </svg>
                                                    <span class="ml-1 leading-none">New in</span>
                                                </div>

                                                <button class="w-9 h-9 flex items-center justify-center rounded-full bg-white  text-neutral-700 nc-shadow-lg absolute top-3 right-3 ">
                                                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </button>
                                                <div class="absolute bottom-0 group-hover:bottom-4 inset-x-1 flex justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                                    <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-xs py-2 px-4  disabled:bg-opacity-90 bg-gray-900 hover:bg-gray-800 text-neutral-50  shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900" onClick={openModalAddToBag} >
                                                        <svg class="w-3.5 h-3.5 mb-0.5" viewBox="0 0 9 9" fill="none">
                                                            <path d="M2.99997 4.125C3.20708 4.125 3.37497 4.29289 3.37497 4.5C3.37497 5.12132 3.87865 5.625 4.49997 5.625C5.12129 5.625 5.62497 5.12132 5.62497 4.5C5.62497 4.29289 5.79286 4.125 5.99997 4.125C6.20708 4.125 6.37497 4.29289 6.37497 4.5C6.37497 5.53553 5.5355 6.375 4.49997 6.375C3.46444 6.375 2.62497 5.53553 2.62497 4.5C2.62497 4.29289 2.79286 4.125 2.99997 4.125Z" fill="currentColor"></path>
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.37497 2.625H7.17663C7.76685 2.625 8.25672 3.08113 8.29877 3.66985L8.50924 6.61641C8.58677 7.70179 7.72715 8.625 6.63901 8.625H2.36094C1.2728 8.625 0.413174 7.70179 0.490701 6.61641L0.70117 3.66985C0.743222 3.08113 1.23309 2.625 1.82331 2.625H2.62497L2.62497 2.25C2.62497 1.21447 3.46444 0.375 4.49997 0.375C5.5355 0.375 6.37497 1.21447 6.37497 2.25V2.625ZM3.37497 2.625H5.62497V2.25C5.62497 1.62868 5.12129 1.125 4.49997 1.125C3.87865 1.125 3.37497 1.62868 3.37497 2.25L3.37497 2.625ZM1.82331 3.375C1.62657 3.375 1.46328 3.52704 1.44926 3.72328L1.2388 6.66985C1.19228 7.32107 1.70805 7.875 2.36094 7.875H6.63901C7.29189 7.875 7.80766 7.32107 7.76115 6.66985L7.55068 3.72328C7.53666 3.52704 7.37337 3.375 7.17663 3.375H1.82331Z" fill="currentColor"></path>
                                                        </svg>
                                                        <span class="ml-1">Add to bag</span>
                                                    </button>
                                                    <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full text-xs py-2 px-4 ttnc-ButtonSecondary bg-white text-slate-700  dark:bg-slate-900 dark:text-slate-300 hover:!bg-gray-100 hover:text-slate-900 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 dark:focus:ring-offset-0" onClick={openModalQuickShow}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-3.5 h-3.5">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"></path>
                                                        </svg>
                                                        <span class="ml-1">Quick view</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="space-y-4 px-2.5 pt-5 pb-2.5">
                                                <div>
                                                    <h2 class="nc-ProductCard__title text-base font-semibold transition-colors">Round Buckle 1" Belt</h2>
                                                    <p class="text-sm text-slate-500 mt-1">Classic green</p>
                                                </div>
                                                <div class="flex justify-between items-end">
                                                    <div>
                                                        <div class="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                                                            <span class="text-green-500"> $68.00</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex items-center mb-0.5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5 pb-[1px] text-amber-400">
                                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                                        </svg>
                                                        <span class="text-sm ml-1 text-slate-500">4.9 (85 reviews)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="nc-ProductCard relative flex flex-col bg-transparent" data-nc-id="ProductCard">
                                            <a class="absolute inset-0" href="/product-detail"></a>
                                            <div class="relative flex-shrink-0 bg-slate-50 rounded-3xl overflow-hidden z-1 group">
                                                <a class="block" href="/product-detail">
                                                    <div class="nc-NcImage flex aspect-w-11 aspect-h-12 w-full " data-nc-id="NcImage">
                                                        <img src={topic9} class="object-cover w-full h-full drop-shadow-xl" alt="nc-imgs" />
                                                    </div>
                                                </a>
                                                <div class="nc-shadow-lg rounded-full flex items-center justify-center absolute top-3 left-3 px-2.5 py-1.5 text-xs bg-white text-slate-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-3.5 h-3.5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
                                                    </svg>
                                                    <span class="ml-1 leading-none">New in</span>
                                                </div>

                                                <button class="w-9 h-9 flex items-center justify-center rounded-full bg-white  text-neutral-700 nc-shadow-lg absolute top-3 right-3 ">
                                                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </button>
                                                <div class="absolute bottom-0 group-hover:bottom-4 inset-x-1 flex justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                                    <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-xs py-2 px-4  disabled:bg-opacity-90 bg-gray-900 hover:bg-gray-800 text-neutral-50  shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900" onClick={openModalAddToBag}>
                                                        <svg class="w-3.5 h-3.5 mb-0.5" viewBox="0 0 9 9" fill="none">
                                                            <path d="M2.99997 4.125C3.20708 4.125 3.37497 4.29289 3.37497 4.5C3.37497 5.12132 3.87865 5.625 4.49997 5.625C5.12129 5.625 5.62497 5.12132 5.62497 4.5C5.62497 4.29289 5.79286 4.125 5.99997 4.125C6.20708 4.125 6.37497 4.29289 6.37497 4.5C6.37497 5.53553 5.5355 6.375 4.49997 6.375C3.46444 6.375 2.62497 5.53553 2.62497 4.5C2.62497 4.29289 2.79286 4.125 2.99997 4.125Z" fill="currentColor"></path>
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.37497 2.625H7.17663C7.76685 2.625 8.25672 3.08113 8.29877 3.66985L8.50924 6.61641C8.58677 7.70179 7.72715 8.625 6.63901 8.625H2.36094C1.2728 8.625 0.413174 7.70179 0.490701 6.61641L0.70117 3.66985C0.743222 3.08113 1.23309 2.625 1.82331 2.625H2.62497L2.62497 2.25C2.62497 1.21447 3.46444 0.375 4.49997 0.375C5.5355 0.375 6.37497 1.21447 6.37497 2.25V2.625ZM3.37497 2.625H5.62497V2.25C5.62497 1.62868 5.12129 1.125 4.49997 1.125C3.87865 1.125 3.37497 1.62868 3.37497 2.25L3.37497 2.625ZM1.82331 3.375C1.62657 3.375 1.46328 3.52704 1.44926 3.72328L1.2388 6.66985C1.19228 7.32107 1.70805 7.875 2.36094 7.875H6.63901C7.29189 7.875 7.80766 7.32107 7.76115 6.66985L7.55068 3.72328C7.53666 3.52704 7.37337 3.375 7.17663 3.375H1.82331Z" fill="currentColor"></path>
                                                        </svg>
                                                        <span class="ml-1">Add to bag</span>
                                                    </button>
                                                    <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full text-xs py-2 px-4 ttnc-ButtonSecondary bg-white text-slate-700  dark:bg-slate-900 dark:text-slate-300 hover:!bg-gray-100 hover:text-slate-900 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 dark:focus:ring-offset-0" onClick={openModalQuickShow}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-3.5 h-3.5">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"></path>
                                                        </svg>
                                                        <span class="ml-1">Quick view</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="space-y-4 px-2.5 pt-5 pb-2.5">
                                                <div>
                                                    <h2 class="nc-ProductCard__title text-base font-semibold transition-colors">Round Buckle 1" Belt</h2>
                                                    <p class="text-sm text-slate-500 mt-1">Classic green</p>
                                                </div>
                                                <div class="flex justify-between items-end">
                                                    <div>
                                                        <div class="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                                                            <span class="text-green-500"> $68.00</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex items-center mb-0.5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5 pb-[1px] text-amber-400">
                                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                                        </svg>
                                                        <span class="text-sm ml-1 text-slate-500">4.9 (85 reviews)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="nc-ProductCard relative flex flex-col bg-transparent" data-nc-id="ProductCard">
                                            <a class="absolute inset-0" href="/product-detail"></a>
                                            <div class="relative flex-shrink-0 bg-slate-50 rounded-3xl overflow-hidden z-1 group">
                                                <a class="block" href="/product-detail">
                                                    <div class="nc-NcImage flex aspect-w-11 aspect-h-12 w-full " data-nc-id="NcImage">
                                                        <img src={topic2} class="object-cover w-full h-full drop-shadow-xl" alt="nc-imgs" />
                                                    </div>
                                                </a>
                                                <div class="nc-shadow-lg rounded-full flex items-center justify-center absolute top-3 left-3 px-2.5 py-1.5 text-xs bg-white text-slate-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-3.5 h-3.5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
                                                    </svg>
                                                    <span class="ml-1 leading-none">New in</span>
                                                </div>

                                                <button class="w-9 h-9 flex items-center justify-center rounded-full bg-white  text-neutral-700 nc-shadow-lg absolute top-3 right-3 ">
                                                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </button>
                                                <div class="absolute bottom-0 group-hover:bottom-4 inset-x-1 flex justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                                    <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-xs py-2 px-4  disabled:bg-opacity-90 bg-gray-900 hover:bg-gray-800 text-neutral-50  shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900" onClick={openModalAddToBag}>
                                                        <svg class="w-3.5 h-3.5 mb-0.5" viewBox="0 0 9 9" fill="none">
                                                            <path d="M2.99997 4.125C3.20708 4.125 3.37497 4.29289 3.37497 4.5C3.37497 5.12132 3.87865 5.625 4.49997 5.625C5.12129 5.625 5.62497 5.12132 5.62497 4.5C5.62497 4.29289 5.79286 4.125 5.99997 4.125C6.20708 4.125 6.37497 4.29289 6.37497 4.5C6.37497 5.53553 5.5355 6.375 4.49997 6.375C3.46444 6.375 2.62497 5.53553 2.62497 4.5C2.62497 4.29289 2.79286 4.125 2.99997 4.125Z" fill="currentColor"></path>
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.37497 2.625H7.17663C7.76685 2.625 8.25672 3.08113 8.29877 3.66985L8.50924 6.61641C8.58677 7.70179 7.72715 8.625 6.63901 8.625H2.36094C1.2728 8.625 0.413174 7.70179 0.490701 6.61641L0.70117 3.66985C0.743222 3.08113 1.23309 2.625 1.82331 2.625H2.62497L2.62497 2.25C2.62497 1.21447 3.46444 0.375 4.49997 0.375C5.5355 0.375 6.37497 1.21447 6.37497 2.25V2.625ZM3.37497 2.625H5.62497V2.25C5.62497 1.62868 5.12129 1.125 4.49997 1.125C3.87865 1.125 3.37497 1.62868 3.37497 2.25L3.37497 2.625ZM1.82331 3.375C1.62657 3.375 1.46328 3.52704 1.44926 3.72328L1.2388 6.66985C1.19228 7.32107 1.70805 7.875 2.36094 7.875H6.63901C7.29189 7.875 7.80766 7.32107 7.76115 6.66985L7.55068 3.72328C7.53666 3.52704 7.37337 3.375 7.17663 3.375H1.82331Z" fill="currentColor"></path>
                                                        </svg>
                                                        <span class="ml-1">Add to bag</span>
                                                    </button>
                                                    <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full text-xs py-2 px-4 ttnc-ButtonSecondary bg-white text-slate-700  dark:bg-slate-900 dark:text-slate-300 hover:!bg-gray-100 hover:text-slate-900 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 dark:focus:ring-offset-0" onClick={openModalQuickShow}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-3.5 h-3.5">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"></path>
                                                        </svg>
                                                        <span class="ml-1">Quick view</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="space-y-4 px-2.5 pt-5 pb-2.5">
                                                <div>
                                                    <h2 class="nc-ProductCard__title text-base font-semibold transition-colors">Round Buckle 1" Belt</h2>
                                                    <p class="text-sm text-slate-500 mt-1">Classic green</p>
                                                </div>
                                                <div class="flex justify-between items-end">
                                                    <div>
                                                        <div class="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                                                            <span class="text-green-500"> $68.00</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex items-center mb-0.5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5 pb-[1px] text-amber-400">
                                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                                        </svg>
                                                        <span class="text-sm ml-1 text-slate-500">4.9 (85 reviews)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                    <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 ttnc-ButtonSecondary bg-white text-gray-700 hover:bg-gray-100 mt-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 md:hidden">
                                        View All
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-6 h-4 ml-3">
                                            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
                                        </svg>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </main>
            </div>

            <Transition appear show={isOpenAddToBag} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 overflow-y-auto z-50" onClose={closeModalAddToBag}>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-5"
                                enterTo="opacity-100 scale-10"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-10"
                                leaveTo="opacity-0 scale-5"
                            >
                                <Dialog.Panel className="">
                                    <div class=""
                                        style={{
                                            left: '0px',
                                            right: '0px',
                                            display: 'flex',
                                            position: 'absolute',
                                            transition: 'all 230ms cubic-bezier(0.21, 1.02, 0.73, 1) 0s',
                                            transform: 'translateY(0px)',
                                            top: '0px',
                                            justifyContent: 'flex-end',
                                            margin: '20px',
                                        }}>
                                        <div class=" p-4 max-w-md w-full border bg-white bg-slate-800 shadow-lg rounded-2xl pointer-events-auto ring-1  ring-white/10 text-slate-900 text-slate-200 transition-all duration-150 ">
                                            <p class="block text-base font-semibold leading-none">Added to cart!</p>
                                            <div class="border-t border-slate-200 border-slate-700 dark:border-slate-700 my-4"></div>
                                            <div class="flex ">
                                                <div class="h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
                                                    <img src={topic2} alt="Round Buckle 1&quot; Belt" class="h-full w-full object-cover object-center" />
                                                </div>
                                                <div class="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                        <div class="flex justify-between ">
                                                            <div>
                                                                <h3 class="text-base font-medium ">Round Buckle 1" Belt</h3>
                                                                <p class="mt-1 text-sm text-slate-500 text-slate-400"><span>Violet</span><span class="mx-2 border-l border-slate-200 border-slate-700 h-4"></span><span>XL</span></p>
                                                            </div>
                                                            <div class="mt-0.5">
                                                                <div class="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                                                                    <span class="text-green-500 !leading-none">$68.00</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-1 items-end justify-between text-sm">
                                                        <p class="text-gray-500 text-slate-400">Qty 1</p>
                                                        <div class="flex">
                                                            <a class="font-medium text-blue-500 " href="/cart">View cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition >

            <Transition appear show={isOpenQuickShow} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModalQuickShow}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-[950px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                    >
                                        <div class=" text-center relative">

                                            <button class="w-8 h-8  flex items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 absolute right-2 top-0 transform -translate-y-1/4 sm:right-3 focus:outline-none" onClick={closeModalQuickShow}>
                                                <span class="sr-only">Close</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-5 h-5">
                                                    <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </div>

                                    </Dialog.Title>
                                    <div class="flex-1 overflow-y-auto rounded-xl hiddenScrollbar md:mt-8 mt-10">
                                        <div class="nc-ProductQuickView ">
                                            <div class="lg:flex items-cente">
                                                <div class="w-full items-center lg:w-[50%] ">
                                                    <div class="relative">
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
                                                        <div class="absolute top-3 left-3 px-2.5 py-1.5 text-xs bg-white nc-shadow-lg rounded-full flex items-center justify-center text-slate-700 text-slate-900">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-3.5 h-3.5">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
                                                            </svg>
                                                            <span class="ml-1 leading-none">New in</span>
                                                        </div>
                                                        <button class="w-9 h-9 flex items-center justify-center rounded-full bg-white text-neutral-700 nc-shadow-lg absolute right-3 top-3 ">
                                                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                                                <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            </svg>
                                                        </button>
                                                    </div>


                                                </div>
                                                <div class="w-full lg:w-[50%] pt-6 lg:pt-0 lg:pl-7 xl:pl-8">
                                                    <div class="space-y-8">
                                                        <div>
                                                            <h2 class="text-2xl font-semibold hover:text-blue-600 transition-colors">
                                                                <a href="/product-detail">Heavy Weight Shoes</a>
                                                            </h2>
                                                            <div class="flex items-center mt-5 space-x-4 sm:space-x-5">
                                                                <div class="">
                                                                    <div class="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-3 text-lg font-semibold">
                                                                        <span class="text-green-500 !leading-none">$112.00</span>
                                                                    </div>
                                                                </div>
                                                                <div class="h-6 border-l border-slate-300"></div>
                                                                <div class="flex items-center">
                                                                    <a class="flex items-center text-sm font-medium" href="/product-detail">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5 pb-[1px] text-yellow-400">
                                                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                                                        </svg>
                                                                        <div class="ml-1.5 flex">
                                                                            <span>4.9</span>
                                                                            <span class="block mx-2">·</span>
                                                                            <span class="text-slate-600 underline">142 reviews</span>
                                                                        </div>
                                                                    </a>
                                                                    <span class="hidden sm:block mx-2.5">·</span>
                                                                    <div class="hidden sm:flex items-center text-sm">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-3.5 h-3.5">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
                                                                        </svg>
                                                                        <span class="ml-1 leading-none">New in</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="flex space-x-3.5">

                                                            <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 disabled:bg-opacity-90 bg-gray-900 hover:bg-gray-800 text-gray-50 shadow-xl flex-1 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                                                                <svg class="hidden sm:inline-block w-5 h-5 mb-0.5" viewBox="0 0 9 9" fill="none">
                                                                    <path d="M2.99997 4.125C3.20708 4.125 3.37497 4.29289 3.37497 4.5C3.37497 5.12132 3.87865 5.625 4.49997 5.625C5.12129 5.625 5.62497 5.12132 5.62497 4.5C5.62497 4.29289 5.79286 4.125 5.99997 4.125C6.20708 4.125 6.37497 4.29289 6.37497 4.5C6.37497 5.53553 5.5355 6.375 4.49997 6.375C3.46444 6.375 2.62497 5.53553 2.62497 4.5C2.62497 4.29289 2.79286 4.125 2.99997 4.125Z" fill="currentColor"></path>
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.37497 2.625H7.17663C7.76685 2.625 8.25672 3.08113 8.29877 3.66985L8.50924 6.61641C8.58677 7.70179 7.72715 8.625 6.63901 8.625H2.36094C1.2728 8.625 0.413174 7.70179 0.490701 6.61641L0.70117 3.66985C0.743222 3.08113 1.23309 2.625 1.82331 2.625H2.62497L2.62497 2.25C2.62497 1.21447 3.46444 0.375 4.49997 0.375C5.5355 0.375 6.37497 1.21447 6.37497 2.25V2.625ZM3.37497 2.625H5.62497V2.25C5.62497 1.62868 5.12129 1.125 4.49997 1.125C3.87865 1.125 3.37497 1.62868 3.37497 2.25L3.37497 2.625ZM1.82331 3.375C1.62657 3.375 1.46328 3.52704 1.44926 3.72328L1.2388 6.66985C1.19228 7.32107 1.70805 7.875 2.36094 7.875H6.63901C7.29189 7.875 7.80766 7.32107 7.76115 6.66985L7.55068 3.72328C7.53666 3.52704 7.37337 3.375 7.17663 3.375H1.82331Z" fill="currentColor"></path>
                                                                </svg>
                                                                <span class="ml-3">Add to cart</span>
                                                            </button>
                                                        </div>

                                                        <hr class=" border-slate-200 dark:border-slate-700" />

                                                        <div class="w-full rounded-2xl space-y-2.5">


                                                            <Disclosure defaultOpen>
                                                                {({ open }) => (
                                                                    <>
                                                                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                                            <span>Description</span>
                                                                            <ChevronUpIcon
                                                                                className={`${open ? 'rotate-180 transform' : ''
                                                                                    } h-5 w-5 text-gray-500`}
                                                                            />
                                                                        </Disclosure.Button>
                                                                        <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                                                            Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.

                                                                        </Disclosure.Panel>
                                                                    </>
                                                                )}
                                                            </Disclosure>

                                                            <Disclosure >
                                                                {({ open }) => (
                                                                    <>
                                                                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                                            <span>Features</span>
                                                                            <ChevronUpIcon
                                                                                className={`${open ? 'rotate-180 transform' : ''
                                                                                    } h-5 w-5 text-gray-500`}
                                                                            />
                                                                        </Disclosure.Button>
                                                                        <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                                                            <ul class="list-disc list-inside leading-7">
                                                                                <li>Material: 43% Sorona Yarn + 57% Stretch Polyester</li>
                                                                                <li>Casual pants waist with elastic elastic inside</li>
                                                                                <li>The pants are a bit tight so you always feel comfortable</li>
                                                                                <li>Excool technology application 4-way stretch</li>
                                                                            </ul>
                                                                        </Disclosure.Panel>
                                                                    </>
                                                                )}
                                                            </Disclosure>


                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition >



        </>
    )
}
