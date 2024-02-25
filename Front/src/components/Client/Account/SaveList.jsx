import React from 'react'
import { shopbann, getfree, banner1, Hero1, topic1, topic2, topic3, topic4, topic5, topic6, topic7, topic8, topic9, topic10 } from '../../../assets'
import { Dialog, Transition, Listbox } from '@headlessui/react'
import { Fragment, useState, useRef, useEffect } from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon, CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import Carousel from '../../Guest/Carousel';


export const SaveList = () => {
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
            <div class="max-w-4xl mx-auto pt-2 sm:pt-10 pb-14 lg:pb-22 ">
                <div class="space-y-10 sm:space-y-12">
                    <div>
                        <h2 class="text-2xl sm:text-3xl font-semibold">List of saved products</h2>
                    </div>
                    <div class="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
                        <div class="nc-ProductCard relative flex flex-col bg-transparent" data-nc-id="ProductCard">
                            <a class="absolute inset-0" href="/product-detail"></a>
                            <div class="relative flex-shrink-0 bg-slate-50 rounded-3xl overflow-hidden z-1 group">
                                <a class="block" href="/product-detail">
                                    <div class="nc-NcImage flex aspect-w-11 aspect-h-12 w-full " data-nc-id="NcImage">
                                        <img src={topic6} class="object-cover w-full h-full drop-shadow-xl" alt="nc-imgs" />
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
                                    <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full text-xs py-2 px-4 ttnc-ButtonSecondary bg-white text-slate-700  dark:bg-slate-900 dark:text-slate-300 hover:!bg-gray-100 hover:text-slate-900 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0" onClick={openModalQuickShow}>
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
                                        <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z" stroke="#ef4444" fill="#ef4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                        </path>
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
                                    <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full text-xs py-2 px-4 ttnc-ButtonSecondary bg-white text-slate-700  dark:bg-slate-900 dark:text-slate-300 hover:!bg-gray-100 hover:text-slate-900 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0" onClick={openModalQuickShow}>
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
                                        <img src={topic4} class="object-cover w-full h-full drop-shadow-xl" alt="nc-imgs" />
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
                                        <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z" stroke="#ef4444" fill="#ef4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                        </path>
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
                                    <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full text-xs py-2 px-4 ttnc-ButtonSecondary bg-white text-slate-700  dark:bg-slate-900 dark:text-slate-300 hover:!bg-gray-100 hover:text-slate-900 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0" onClick={openModalQuickShow}>
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
                                    <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full text-xs py-2 px-4 ttnc-ButtonSecondary bg-white text-slate-700  dark:bg-slate-900 dark:text-slate-300 hover:!bg-gray-100 hover:text-slate-900 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0" onClick={openModalQuickShow}>
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
                    <div class="flex !mt-20 justify-center items-center">
                        <button disabled="" class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonSecondary bg-white text-gray-700  hover:bg-gray-100   border border-slate-300  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 ">
                            <svg class="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>Show me more
                        </button>
                    </div>
                </div>
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
                                                            <a class="font-medium text-primary-6000 text-primary-500 " href="/cart">View cart</a>
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
                                                            <h2 class="text-2xl font-semibold hover:text-primary-6000 transition-colors">
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

                                                            <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 ttnc-ButtonPrimary disabled:bg-opacity-90 bg-gray-900 hover:bg-gray-800 text-gray-50 shadow-xl flex-1 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000">
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
