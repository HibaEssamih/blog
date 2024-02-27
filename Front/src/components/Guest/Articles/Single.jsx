import React, { Fragment, useEffect, useRef, useState } from 'react'
import { shopbann, getfree, banner1, Hero1, topic1, topic2, topic3, topic4, topic5, topic6, topic7, topic8, topic9, topic10, topic11 } from '../../../assets'
import Carousel from '../Carousel';
import { Menu, Transition } from '@headlessui/react'

export const Single = () => {
    return (
        <>
            <div class="pt-8 lg:pt-16 mx-3 sm:mx-auto">
                <header class="container rounded-xl">
                    <div class="max-w-screen-md mx-auto">
                        <div class="nc-SingleHeader md:px-1 sm:px-4 px-2">
                            <div class="space-y-5">
                                <div class="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                                    <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex py-1 rounded-full font-medium text-xs px-3 text-red-800 bg-red-100 hover:bg-red-800" href="/archive/the-demo-archive-slug">Jewelry</a>
                                </div>
                                <h1 class="text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-5xl max-w-4xl" title="Trending web & landing page designs in 2023">
                                    Trending web & landing page designs in 2023
                                </h1>
                                <div class="w-full border-b border-neutral-200"></div>
                                <div class="flex flex-col sm:flex-row justify-between sm:items-center space-y-5 sm:space-y-0 items-center sm:space-x-5">
                                    {/* <div class="nc-PostMeta2  text-neutral-700 text-left text-sm leading-none  items-center"> */}
                                    <div class="ml-3 flex items-center ">
                                        <div class="text-xs ">
                                            <span class="text-neutral-700">May 20, 2021</span>
                                            <span class="mx-2 font-semibold">·</span>
                                            <span class="text-neutral-700">2 min read</span>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                    <div class="nc-SingleMetaAction2">
                                        <div class="flex flex-row space-x-2.5 items-center">
                                            <div class="nc-PostCardLikeAndComment flex items-center space-x-2.5">
                                                <button class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-4 h-9 text-sm text-neutral-700 bg-neutral-50 hover:bg-rose-50" title="Liked">
                                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
                                                    </svg>
                                                    <span class="ml-1 text-neutral-900">34</span>
                                                </button>
                                                <a href="#comments" class="nc-PostCardCommentBtn relative flex items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 hover:bg-teal-50 px-4 h-9 text-sm" title="Comments">
                                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"></path>
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path>
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path>
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path>
                                                    </svg>
                                                    <span class="ml-1 text-neutral-900">110</span>
                                                </a>
                                            </div>
                                            <div class="px-1">
                                                <div class="border-l border-neutral-200 h-6"></div>
                                            </div>
                                            <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-9 w-9 bg-neutral-100 hover:bg-neutral-200" title="Save to reading list">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                                </svg>
                                            </button>

                                            <Menu as="div" className="relative inline-block text-left">
                                                <div>
                                                    <Menu.Button class="flex-shrink-0 flex items-center justify-center focus:outline-none h-9 w-9 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full" title="More" id="headlessui-menu-button-:rel:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                                                        </svg>
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >

                                                    <Menu.Items className="absolute right-0 mt-2 w-56  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                                        <div className="px-1 py-2 ">
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <button
                                                                        className={`${active ? 'bg-neutral-100 text-neutral-900' : 'text-gray-900'
                                                                            } flex items-center rounded-xl text-sm w-full px-3 py-2 truncate focus:outline-none`}
                                                                    >
                                                                        <div>
                                                                            <svg class="w-4 h-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <g clip-path="url(#clip0_17_61)">
                                                                                    <path d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 35.9789 8.77641 45.908 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3152 9.375C31.9402 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.68 15.75 27.75 17.6002 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2236 45.908 48 35.9789 48 24Z" fill="#3B3B3B"></path>
                                                                                </g>
                                                                            </svg>
                                                                        </div>
                                                                        <span class="ml-3">Facebook</span>
                                                                    </button>

                                                                )}
                                                            </Menu.Item>

                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <button
                                                                        className={`${active ? 'bg-neutral-100 text-neutral-900' : 'text-gray-900'
                                                                            } flex items-center rounded-xl text-sm w-full px-3 py-2 truncate focus:outline-none`}
                                                                    >
                                                                        <div>
                                                                            <svg class="w-4 h-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <g clip-path="url(#clip0_17_68)">
                                                                                    <path d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z" fill="#3B3B3B"></path>
                                                                                </g>
                                                                            </svg>
                                                                        </div>
                                                                        <span class="ml-3">Linkedin</span>
                                                                    </button>

                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <button
                                                                        className={`${active ? 'bg-neutral-100 text-neutral-900' : 'text-gray-900'
                                                                            } flex items-center rounded-xl w-full text-sm px-3 py-2 truncate focus:outline-none`}
                                                                    >
                                                                        <div>
                                                                            <svg class="w-4 h-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <g clip-path="url(#clip0_17_63)">
                                                                                    <path d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z" fill="currentColor"></path>
                                                                                    <path d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z" fill="#3B3B3B"></path>
                                                                                    <path d="M39.6937 11.1843C39.6937 12.778 38.4 14.0624 36.8156 14.0624C35.2219 14.0624 33.9375 12.7687 33.9375 11.1843C33.9375 9.59053 35.2313 8.30615 36.8156 8.30615C38.4 8.30615 39.6937 9.5999 39.6937 11.1843Z" fill="currentColor"></path>
                                                                                </g>
                                                                            </svg>
                                                                        </div>
                                                                        <span class="ml-3">Instagram</span>
                                                                    </button>

                                                                )}
                                                            </Menu.Item>
                                                        </div>

                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>


                                            <div>
                                                <Menu as="div" className="relative inline-block text-left">
                                                    <div>
                                                        <Menu.Button class="text-neutral-500 flex items-center justify-center rounded-full h-9 w-9 bg-neutral-100 hover:bg-neutral-200 focus:outline-none" title="More" id="headlessui-menu-button-:rem:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="h-5 w-5">
                                                                <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd"></path>
                                                            </svg>
                                                        </Menu.Button>
                                                    </div>
                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >

                                                        <Menu.Items className="absolute right-0 mt-2 w-56  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                                            <div className="px-1 py-2 ">
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <button
                                                                            className={`${active ? 'bg-neutral-100 text-neutral-900' : 'text-gray-900'
                                                                                } flex items-center rounded-xl text-sm w-full px-3 py-2 truncate focus:outline-none`}
                                                                        >
                                                                            <div>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"></path>
                                                                                </svg>
                                                                            </div>
                                                                            <span class="ml-3">Copy link</span>
                                                                        </button>

                                                                    )}
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <button
                                                                            className={`${active ? 'bg-neutral-100 text-neutral-900' : 'text-gray-900'
                                                                                } flex items-center rounded-xl text-sm w-full px-3 py-2 truncate focus:outline-none`}
                                                                        >
                                                                            <div>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"></path>
                                                                                </svg>
                                                                            </div>
                                                                            <span class="ml-3">Comment this article</span>
                                                                        </button>

                                                                    )}
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <button
                                                                            className={`${active ? 'bg-neutral-100 text-neutral-900' : 'text-gray-900'
                                                                                } flex items-center rounded-xl w-full text-sm px-3 py-2 truncate focus:outline-none`}
                                                                        >
                                                                            <div>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11-.732a9 9 0 01-6.085.711l-.108.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"></path>
                                                                                </svg>
                                                                            </div>
                                                                            <span class="ml-3">Report this article</span>
                                                                        </button>

                                                                    )}
                                                                </Menu.Item>
                                                            </div>

                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header >
                <div class="">
                    <div class="my-10 -z-10 sm:my-12 relative aspect-w-16 aspect-h-12 md:aspect-h-9 lg:aspect-h-6">
                        <img src={topic11} alt="" sizes="100vw" class=" object-cover  inset-0 w-full h-full" />
                    </div>
                </div>
            </div >


            <div class="container mt-10 ">
                <div class="relative ">
                    <div class="nc-SingleContent space-y-10 ">
                        <div id="single-entry-content" class="prose lg:prose-lg max-w-screen-md mx-auto">
                            <div class="mx-4 md:mx-0">
                                <p class="text-gray-600 mb-2 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vel officiis ipsum placeat itaque neque dolorem modi perspiciatis dolor distinctio veritatis sapiente, minima corrupti dolores necessitatibus suscipit accusantium dignissimos culpa cumque.</p>
                                <p class="text-gray-600 mb-2 ">It is a long established fact that a <strong>reader</strong> will be distracted by the readable content of a page when looking at its <strong>layout</strong>. The point of using Lorem Ipsum is that it has a more-or-less normal <a href="/#" target="_blank" rel="noopener noreferrer">distribution of letters.</a></p>
                                <ol class=" space-y-1 text-gray-600 list-decimal list-inside mb-2 max-w-screen-sm">
                                    <li>We want everything to look good out of the box.</li>
                                    <li>Really just the first reason, that's the whole point of the plugin.</li>
                                    <li>Here's a third pretend reason though a list with three items looks more realistic than a list with two items.</li>
                                </ol>
                                <h3 className='text-3xl'>Typography should be easy</h3>
                                <p>So that's a header for you — with any luck if we've done our job correctly that will look pretty reasonable.</p>
                                <p>Something a wise person once told me about typography is:</p>
                                <blockquote>
                                    <p>Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad.</p>
                                </blockquote>
                                <p>It's probably important that images look okay here by default as well:</p>
                                <figure>
                                    <img src="https://images.unsplash.com/photo-1501493870936-9c2e41625521?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1045&amp;q=80" sizes="(max-width: 1024px) 100vw, 1240px" width="1635" height="774" class="rounded-2xl" alt="nc blog" />
                                    <figcaption>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vel officiis ipsum placeat itaque neque dolorem modi perspiciatis dolor distinctio veritatis sapiente</figcaption>
                                </figure>
                                <p>Now I'm going to show you an example of an unordered list to make sure that looks good, too:</p>
                                <ul>
                                    <li>So here is the first item in this list.</li>
                                    <li>In this example, we're keeping the items short.</li>
                                    <li>Later, we'll use longer, more complex list items.</li>
                                </ul>
                                <p>And that's the end of this section.</p>
                                <h2>Code should look okay by default.</h2>
                                <p>I think most people are going to use <a href="https://highlightjs.org/">highlight.js</a> or <a href="https://prismjs.com/">Prism</a> or something if they want to style their code blocks, but it wouldn't hurt to make them look <em>okay</em> out of the box, even with no syntax highlighting.</p>
                                <p>What I've written here is probably long enough, but adding this final sentence can't hurt.</p>

                            </div>
                        </div>
                        <div class="max-w-screen-md mx-auto flex flex-wrap">
                            <div class="mx-2 md:mx-0">
                                <a class="nc-Tag inline-block bg-neutral-50 hover:bg-neutral-100 text-sm text-neutral-600 py-2 px-3 rounded-lg md:py-2.5 md:px-4 mr-2 mb-2" href="/archive/the-demo-archive-slug">Garden</a>
                                <a class="nc-Tag inline-block bg-neutral-50 hover:bg-neutral-100 text-sm text-neutral-600 py-2 px-3 rounded-lg md:py-2.5 md:px-4 mr-2 mb-2" href="/archive/the-demo-archive-slug">Jewelry</a>
                                <a class="nc-Tag inline-block bg-neutral-50 hover:bg-neutral-100 text-sm text-neutral-600 py-2 px-3 rounded-lg md:py-2.5 md:px-4 mr-2 mb-2" href="/archive/the-demo-archive-slug">Industrial</a>
                                <a class="nc-Tag inline-block bg-neutral-50 hover:bg-neutral-100 text-sm text-neutral-600 py-2 px-3 rounded-lg md:py-2.5 md:px-4 mr-2 mb-2" href="/archive/the-demo-archive-slug">Tools</a>
                                <a class="nc-Tag inline-block bg-neutral-50 hover:bg-neutral-100 text-sm text-neutral-600 py-2 px-3 rounded-lg md:py-2.5 md:px-4 mr-2 mb-2" href="/archive/the-demo-archive-slug">Automotive</a>
                                <a class="nc-Tag inline-block bg-neutral-50 hover:bg-neutral-100 text-sm text-neutral-600 py-2 px-3 rounded-lg md:py-2.5 md:px-4 mr-2 mb-2" href="/archive/the-demo-archive-slug">Toys</a>
                                <a class="nc-Tag inline-block bg-neutral-50 hover:bg-neutral-100 text-sm text-neutral-600 py-2 px-3 rounded-lg md:py-2.5 md:px-4 mr-2 mb-2" href="/archive/the-demo-archive-slug">Outdoors</a>
                                <a class="nc-Tag inline-block bg-neutral-50 hover:bg-neutral-100 text-sm text-neutral-600 py-2 px-3 rounded-lg md:py-2.5 md:px-4 mr-2 mb-2" href="/archive/the-demo-archive-slug">Health</a>
                                <a class="nc-Tag inline-block bg-neutral-50 hover:bg-neutral-100 text-sm text-neutral-600 py-2 px-3 rounded-lg md:py-2.5 md:px-4 mr-2 mb-2" href="/archive/the-demo-archive-slug">Electronics</a>

                            </div>
                        </div>
                        <div class="max-w-screen-md mx-auto border-b border-t border-neutral-100"></div>


                        <div id="comments" class="scroll-mt-20 max-w-screen-md mx-auto pt-5 mx:auto">
                            <div class="mx-2 md:mx-0">
                                <h3 class="text-xl font-semibold text-neutral-800">Responses (10)</h3>
                                <form action="#" class="nc-SingleCommentForm mt-5">
                                    <textarea class=" border p-3 block w-full text-sm rounded-xl border-neutral-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50   " rows="4" placeholder="Add to discussion" required=""></textarea>
                                    <div class="mt-4 space-x-3">
                                        <button class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-burnt hover:bg-burntmedium text-neutral-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6" type="submit">Submit</button>
                                        <button class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border border-burnt bg-white text-neutral-600  text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6" type="button">Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="max-w-screen-md mx-auto">
                            <ul className="nc-SingleCommentLists space-y-5 mx-2" >
                                <div className="nc-CommentCard flex">
                                    <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-6 w-6 text-base sm:text-lg sm:h-8 sm:w-8 mt-4" style={{}}>
                                        <img sizes="100px" src={topic5} className=" object-cover absolute inset-0 w-full h-full" alt="John Doe" />
                                        <span className="wil-avatar__name">J</span>
                                    </div>
                                    <div className="flex-grow flex flex-col p-4 ml-2 text-sm  border-neutral-200 rounded-xl sm:ml-3 sm:text-base border">
                                        <div className="relative flex items-center pr-6">
                                            <div className="absolute -right-3 -top-3">
                                            <div>
                                                    <Menu as="div" className="relative inline-block text-left">
                                                        <div>
                                                            <Menu.Button className="p-2 text-neutral-500 flex items-center justify-center rounded-lg hover:text-neutral-800 sm:hover:bg-neutral-100 focus:outline-none" title="More" id="headlessui-menu-button-:rc:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-6 w-6">
                                                                    <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd"></path>
                                                                </svg>
                                                            </Menu.Button>
                                                        </div>
                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-100"
                                                            enterFrom="transform opacity-0 scale-95"
                                                            enterTo="transform opacity-100 scale-100"
                                                            leave="transition ease-in duration-75"
                                                            leaveFrom="transform opacity-100 scale-100"
                                                            leaveTo="transform opacity-0 scale-95"
                                                        >

                                                            <Menu.Items className="absolute right-0 mt-2 w-56  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                                                <div className="px-1 py-2 ">
                                                                    <Menu.Item>
                                                                        {({ active }) => (
                                                                            <button
                                                                                className={`${active ? 'bg-neutral-100 text-neutral-900' : 'text-gray-900'
                                                                                    } flex items-center rounded-xl text-sm w-full px-3 py-2 truncate focus:outline-none`}
                                                                            >
                                                                                <div>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"></path>
                                                                                    </svg>
                                                                                </div>
                                                                                <span class="ml-3">Reply</span>
                                                                            </button>

                                                                        )}
                                                                    </Menu.Item>
                                                                    <Menu.Item>
                                                                        {({ active }) => (
                                                                            <button
                                                                                className={`${active ? 'bg-neutral-100 text-neutral-900' : 'text-gray-900'
                                                                                    } flex items-center rounded-xl text-sm w-full px-3 py-2 truncate focus:outline-none`}
                                                                            >
                                                                                <div>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"></path>
                                                                                    </svg>
                                                                                </div>
                                                                                <span class="ml-3">Report abuse</span>
                                                                            </button>

                                                                        )}
                                                                    </Menu.Item>

                                                                </div>

                                                            </Menu.Items>
                                                        </Transition>
                                                    </Menu>
                                                </div>
                                            </div>
                                            <a className="flex-shrink-0 font-semibold text-neutral-800" href="/author/the-demo-author-slug">Truelock Alric</a>
                                            <span className="mx-2">·</span>
                                            <span className="text-neutral-500  text-xs line-clamp-1 sm:text-sm">May 20, 2021</span>
                                        </div>
                                        <span className="block text-neutral-700 mt-2 mb-3 sm:mt-3 sm:mb-4 ">Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.</span>
                                        <div className="nc-CommentCardLikeReply flex items-center space-x-2 " data-nc-id="CommentCardLikeReply">
                                            <button className="min-w-[68px] flex items-center rounded-full leading-none px-3 h-8 text-xs focus:outline-none text-neutral-700 bg-neutral-100 hover:bg-rose-50 hover:text-rose-600">
                                                <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
                                                </svg>
                                                <span className="text-neutral-900">96</span>
                                            </button>
                                            <button className="flex items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-100 px-3 h-8 hover:bg-teal-50 hover:text-teal-600 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path>
                                                </svg>
                                                <span className="text-xs leading-none text-neutral-900">Reply</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="nc-CommentCard flex">
                                    <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-6 w-6 text-base sm:text-lg sm:h-8 sm:w-8 mt-4" style={{}}>
                                        <img sizes="100px" src={topic3} className=" object-cover absolute inset-0 w-full h-full" alt="John Doe" />
                                        <span className="wil-avatar__name">J</span>
                                    </div>
                                    <div className="flex-grow flex flex-col p-4 ml-2 text-sm  border-neutral-200 rounded-xl sm:ml-3 sm:text-base border">
                                        <div className="relative flex items-center pr-6">
                                            <div className="absolute -right-3 -top-3">
                                                <div>
                                                    <Menu as="div" className="relative inline-block text-left">
                                                        <div>
                                                            <Menu.Button className="p-2 text-neutral-500 flex items-center justify-center rounded-lg hover:text-neutral-800 sm:hover:bg-neutral-100 focus:outline-none" title="More" id="headlessui-menu-button-:rc:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-6 w-6">
                                                                    <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd"></path>
                                                                </svg>
                                                            </Menu.Button>
                                                        </div>
                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-100"
                                                            enterFrom="transform opacity-0 scale-95"
                                                            enterTo="transform opacity-100 scale-100"
                                                            leave="transition ease-in duration-75"
                                                            leaveFrom="transform opacity-100 scale-100"
                                                            leaveTo="transform opacity-0 scale-95"
                                                        >

                                                            <Menu.Items className="absolute right-0 mt-2 w-56  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                                                <div className="px-1 py-2 ">
                                                                    <Menu.Item>
                                                                        {({ active }) => (
                                                                            <button
                                                                                className={`${active ? 'bg-neutral-100 text-neutral-900' : 'text-gray-900'
                                                                                    } flex items-center rounded-xl text-sm w-full px-3 py-2 truncate focus:outline-none`}
                                                                            >
                                                                                <div>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"></path>
                                                                                    </svg>
                                                                                </div>
                                                                                <span class="ml-3">Reply</span>
                                                                            </button>

                                                                        )}
                                                                    </Menu.Item>
                                                                    <Menu.Item>
                                                                        {({ active }) => (
                                                                            <button
                                                                                className={`${active ? 'bg-neutral-100 text-neutral-900' : 'text-gray-900'
                                                                                    } flex items-center rounded-xl text-sm w-full px-3 py-2 truncate focus:outline-none`}
                                                                            >
                                                                                <div>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"></path>
                                                                                    </svg>
                                                                                </div>
                                                                                <span class="ml-3">Report abuse</span>
                                                                            </button>

                                                                        )}
                                                                    </Menu.Item>

                                                                </div>

                                                            </Menu.Items>
                                                        </Transition>
                                                    </Menu>
                                                </div>
                                            </div>
                                            <a className="flex-shrink-0 font-semibold text-neutral-800" href="/author/the-demo-author-slug">Truelock Alric</a>
                                            <span className="mx-2">·</span>
                                            <span className="text-neutral-500  text-xs line-clamp-1 sm:text-sm">May 20, 2021</span>
                                        </div>
                                        <span className="block text-neutral-700 mt-2 mb-3 sm:mt-3 sm:mb-4 ">Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.</span>
                                        <div className="nc-CommentCardLikeReply flex items-center space-x-2 " data-nc-id="CommentCardLikeReply">
                                            <button className="min-w-[68px] flex items-center rounded-full leading-none px-3 h-8 text-xs focus:outline-none text-neutral-700 bg-neutral-100 hover:bg-rose-50 hover:text-rose-600">
                                                <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
                                                </svg>
                                                <span className="text-neutral-900">96</span>
                                            </button>
                                            <button className="flex items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-100 px-3 h-8 hover:bg-teal-50 hover:text-teal-600 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path>
                                                </svg>
                                                <span className="text-xs leading-none text-neutral-900">Reply</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="nc-CommentCard flex">
                                    <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-6 w-6 text-base sm:text-lg sm:h-8 sm:w-8 mt-4" style={{}}>
                                        <img sizes="100px" src={topic9} className=" object-cover absolute inset-0 w-full h-full" alt="John Doe" />
                                        <span className="wil-avatar__name">J</span>
                                    </div>
                                    <div className="flex-grow flex flex-col p-4 ml-2 text-sm  border-neutral-200 rounded-xl sm:ml-3 sm:text-base border">
                                        <div className="relative flex items-center pr-6">
                                            <div className="absolute -right-3 -top-3">
                                            <div>
                                                    <Menu as="div" className="relative inline-block text-left">
                                                        <div>
                                                            <Menu.Button className="p-2 text-neutral-500 flex items-center justify-center rounded-lg hover:text-neutral-800 sm:hover:bg-neutral-100 focus:outline-none" title="More" id="headlessui-menu-button-:rc:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-6 w-6">
                                                                    <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd"></path>
                                                                </svg>
                                                            </Menu.Button>
                                                        </div>
                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-100"
                                                            enterFrom="transform opacity-0 scale-95"
                                                            enterTo="transform opacity-100 scale-100"
                                                            leave="transition ease-in duration-75"
                                                            leaveFrom="transform opacity-100 scale-100"
                                                            leaveTo="transform opacity-0 scale-95"
                                                        >

                                                            <Menu.Items className="absolute right-0 mt-2 w-56  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                                                <div className="px-1 py-2 ">
                                                                    <Menu.Item>
                                                                        {({ active }) => (
                                                                            <button
                                                                                className={`${active ? 'bg-neutral-100 text-neutral-900' : 'text-gray-900'
                                                                                    } flex items-center rounded-xl text-sm w-full px-3 py-2 truncate focus:outline-none`}
                                                                            >
                                                                                <div>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"></path>
                                                                                    </svg>
                                                                                </div>
                                                                                <span class="ml-3">Reply</span>
                                                                            </button>

                                                                        )}
                                                                    </Menu.Item>
                                                                    <Menu.Item>
                                                                        {({ active }) => (
                                                                            <button
                                                                                className={`${active ? 'bg-neutral-100 text-neutral-900' : 'text-gray-900'
                                                                                    } flex items-center rounded-xl text-sm w-full px-3 py-2 truncate focus:outline-none`}
                                                                            >
                                                                                <div>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"></path>
                                                                                    </svg>
                                                                                </div>
                                                                                <span class="ml-3">Report abuse</span>
                                                                            </button>

                                                                        )}
                                                                    </Menu.Item>

                                                                </div>

                                                            </Menu.Items>
                                                        </Transition>
                                                    </Menu>
                                                </div>
                                            </div>
                                            <a className="flex-shrink-0 font-semibold text-neutral-800" href="/author/the-demo-author-slug">Truelock Alric</a>
                                            <span className="mx-2">·</span>
                                            <span className="text-neutral-500  text-xs line-clamp-1 sm:text-sm">May 20, 2021</span>
                                        </div>
                                        <span className="block text-neutral-700 mt-2 mb-3 sm:mt-3 sm:mb-4 ">Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.</span>
                                        <div className="nc-CommentCardLikeReply flex items-center space-x-2 " data-nc-id="CommentCardLikeReply">
                                            <button className="min-w-[68px] flex items-center rounded-full leading-none px-3 h-8 text-xs focus:outline-none text-neutral-700 bg-neutral-100 hover:bg-rose-50 hover:text-rose-600">
                                                <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
                                                </svg>
                                                <span className="text-neutral-900">96</span>
                                            </button>
                                            <button className="flex items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-100 px-3 h-8 hover:bg-teal-50 hover:text-teal-600 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path>
                                                </svg>
                                                <span className="text-xs leading-none text-neutral-900">Reply</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="nc-CommentCard flex">
                                    <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-6 w-6 text-base sm:text-lg sm:h-8 sm:w-8 mt-4" style={{}}>
                                        <img sizes="100px" src={topic2} className=" object-cover absolute inset-0 w-full h-full" alt="John Doe" />
                                        <span className="wil-avatar__name">J</span>
                                    </div>
                                    <div className="flex-grow flex flex-col p-4 ml-2 text-sm  border-neutral-200 rounded-xl sm:ml-3 sm:text-base border">
                                        <div className="relative flex items-center pr-6">
                                            <div className="absolute -right-3 -top-3">
                                            <div>
                                                    <Menu as="div" className="relative inline-block text-left">
                                                        <div>
                                                            <Menu.Button className="p-2 text-neutral-500 flex items-center justify-center rounded-lg hover:text-neutral-800 sm:hover:bg-neutral-100 focus:outline-none" title="More" id="headlessui-menu-button-:rc:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-6 w-6">
                                                                    <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd"></path>
                                                                </svg>
                                                            </Menu.Button>
                                                        </div>
                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-100"
                                                            enterFrom="transform opacity-0 scale-95"
                                                            enterTo="transform opacity-100 scale-100"
                                                            leave="transition ease-in duration-75"
                                                            leaveFrom="transform opacity-100 scale-100"
                                                            leaveTo="transform opacity-0 scale-95"
                                                        >

                                                            <Menu.Items className="absolute right-0 mt-2 w-56  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                                                <div className="px-1 py-2 ">
                                                                    <Menu.Item>
                                                                        {({ active }) => (
                                                                            <button
                                                                                className={`${active ? 'bg-neutral-100 text-neutral-900' : 'text-gray-900'
                                                                                    } flex items-center rounded-xl text-sm w-full px-3 py-2 truncate focus:outline-none`}
                                                                            >
                                                                                <div>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"></path>
                                                                                    </svg>
                                                                                </div>
                                                                                <span class="ml-3">Reply</span>
                                                                            </button>

                                                                        )}
                                                                    </Menu.Item>
                                                                    <Menu.Item>
                                                                        {({ active }) => (
                                                                            <button
                                                                                className={`${active ? 'bg-neutral-100 text-neutral-900' : 'text-gray-900'
                                                                                    } flex items-center rounded-xl text-sm w-full px-3 py-2 truncate focus:outline-none`}
                                                                            >
                                                                                <div>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"></path>
                                                                                    </svg>
                                                                                </div>
                                                                                <span class="ml-3">Report abuse</span>
                                                                            </button>

                                                                        )}
                                                                    </Menu.Item>

                                                                </div>

                                                            </Menu.Items>
                                                        </Transition>
                                                    </Menu>
                                                </div>
                                            </div>
                                            <a className="flex-shrink-0 font-semibold text-neutral-800" href="/author/the-demo-author-slug">Truelock Alric</a>
                                            <span className="mx-2">·</span>
                                            <span className="text-neutral-500  text-xs line-clamp-1 sm:text-sm">May 20, 2021</span>
                                        </div>
                                        <span className="block text-neutral-700 mt-2 mb-3 sm:mt-3 sm:mb-4 ">Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.</span>
                                        <div className="nc-CommentCardLikeReply flex items-center space-x-2 " data-nc-id="CommentCardLikeReply">
                                            <button className="min-w-[68px] flex items-center rounded-full leading-none px-3 h-8 text-xs focus:outline-none text-neutral-700 bg-neutral-100 hover:bg-rose-50 hover:text-rose-600">
                                                <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
                                                </svg>
                                                <span className="text-neutral-900">96</span>
                                            </button>
                                            <button className="flex items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-100 px-3 h-8 hover:bg-teal-50 hover:text-teal-600 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path>
                                                </svg>
                                                <span className="text-xs leading-none text-neutral-900">Reply</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <button className="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-burnt hover:bg-burntmedium text-neutral-100 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 w-full">View full comments (+117 comments)</button>
                            </ul>
                            <div>
                            </div>
                        </div>

                    </div>

                    <div class="sticky mt-8 bottom-8 z-40 justify-center hidden">
                        <div class="bg-white  shadow-lg rounded-full ring-1 ring-offset-1 ring-neutral-900/5 p-1.5 flex items-center justify-center space-x-2 text-xs">
                            <button class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-9 text-xs text-neutral-700 bg-neutral-50 hover:bg-rose-50 hover:text-rose-600">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
                                </svg>
                                <span class="ml-1 text-neutral-900">34</span>
                            </button>
                            <div class="border-l h-4 border-neutral-200"></div>
                            <a href="#comments" class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors hover:bg-teal-50 hover:text-teal-600 flex px-3 h-9 text-xs" title="Comments">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"></path>
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path>
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path>
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path>
                                </svg>
                                <span class="ml-1 text-neutral-900">110</span>
                            </a>
                            <div class="border-l h-4 border-neutral-200"></div>
                            <button class="w-9 h-9 items-center justify-center bg-neutral-50 hover:bg-neutral-100 rounded-full flex">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-4 h-4">
                                    <path fill-rule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                            <button class="w-9 h-9 items-center justify-center hidden" title="Go to top">14%</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative bg-neutral-100 py-16 lg:py-28 mt-16 lg:mt-28 ">
                <div class="container mx-auto flex justify-center">
                    <div>
                        <div class="nc-Section-Heading relative flex flex-col mx-4 md:mx-2 lg:mx-0 sm:flex-row sm:items-end justify-between mb-10 text-neutral-900  ">
                            <div class="max-w-2xl">
                                <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold">Related posts</h2>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 gap-6 md:gap-8">
                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-3">
                                <div class="nc-Card10 relative flex flex-col h-full bg-white rounded-3xl mx-2">
                                    <a class="absolute inset-0" href="/single-gallery/this-is-single-slug"></a>
                                    <div class="block group  flex-shrink-0 relative rounded-t-3xl w-full aspect-w-9 aspect-h-7 sm:aspect-h-9 overflow-hidden z-0">
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
                                    <div class="absolute top-3 inset-x-3 flex justify-between items-start space-x-4 ">
                                        <div class="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                                            <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-pink-800 bg-pink-100 hover:bg-pink-800" href="/archive/the-demo-archive-slug">Planner</a>
                                        </div>

                                    </div>
                                    <div class="p-4 flex flex-col space-y-3">
                                        <div class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800  leading-none text-xs">
                                            <span class="text-neutral-500  font-normal">May 20, 2021</span>
                                        </div>
                                        <h3 class="nc-card-title block text-base font-semibold text-neutral-900 ">
                                            <span class="line-clamp-2" title="To cool datacenter servers, Microsoft turns to boiling liquid Donec quis">To cool datacenter servers, Microsoft turns to boiling liquid Donec quis</span>
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
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z">
                                                        </path>
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path>
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path>
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path>
                                                    </svg>
                                                    <span class="ml-1 text-neutral-900 ">110</span>
                                                </a>
                                            </div>
                                            <div class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700  relative">
                                                <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 " title="Save to reading list">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="nc-Card10 relative flex flex-col h-full bg-white rounded-3xl mx-2">
                                    <a class="absolute inset-0" href="/single-gallery/this-is-single-slug"></a>
                                    <div class="block group  flex-shrink-0 relative rounded-t-3xl w-full aspect-w-9 aspect-h-7 sm:aspect-h-9 overflow-hidden z-0">
                                        <div>
                                            <div class=" group group/cardGallerySlider nc-PostFeaturedMedia relative w-full h-full">
                                                <Carousel>
                                                    <img src={topic5} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />
                                                    <img src={topic7} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />
                                                    <img src={topic1} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />
                                                    <img src={topic9} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />

                                                </Carousel>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="absolute top-3 inset-x-3 flex justify-between items-start space-x-4 ">
                                        <div class="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                                            <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-pink-800 bg-pink-100 hover:bg-pink-800" href="/archive/the-demo-archive-slug">Planner</a>
                                        </div>

                                    </div>
                                    <div class="p-4 flex flex-col space-y-3">
                                        <div class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800  leading-none text-xs">
                                            <span class="text-neutral-500  font-normal">May 20, 2021</span>
                                        </div>
                                        <h3 class="nc-card-title block text-base font-semibold text-neutral-900 ">
                                            <span class="line-clamp-2" title="To cool datacenter servers, Microsoft turns to boiling liquid Donec quis">To cool datacenter servers, Microsoft turns to boiling liquid Donec quis</span>
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
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z">
                                                        </path>
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path>
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path>
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path>
                                                    </svg>
                                                    <span class="ml-1 text-neutral-900 ">110</span>
                                                </a>
                                            </div>
                                            <div class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700  relative">
                                                <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 " title="Save to reading list">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="nc-Card10 relative flex flex-col h-full bg-white rounded-3xl mx-2">
                                    <a class="absolute inset-0" href="/single-gallery/this-is-single-slug"></a>
                                    <div class="block group  flex-shrink-0 relative rounded-t-3xl w-full aspect-w-9 aspect-h-7 sm:aspect-h-9 overflow-hidden z-0">
                                        <div>
                                            <div class=" group group/cardGallerySlider nc-PostFeaturedMedia relative w-full h-full">
                                                <Carousel>
                                                    <img src={topic6} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />
                                                    <img src={topic7} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />
                                                    <img src={topic1} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />
                                                    <img src={topic9} sizes="(max-width: 1025px) 100vw, 300px" class=" w-full h-full" />

                                                </Carousel>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="absolute top-3 inset-x-3 flex justify-between items-start space-x-4 ">
                                        <div class="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                                            <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-pink-800 bg-pink-100 hover:bg-pink-800" href="/archive/the-demo-archive-slug">Planner</a>
                                        </div>

                                    </div>
                                    <div class="p-4 flex flex-col space-y-3">
                                        <div class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800  leading-none text-xs">
                                            <span class="text-neutral-500  font-normal">May 20, 2021</span>
                                        </div>
                                        <h3 class="nc-card-title block text-base font-semibold text-neutral-900 ">
                                            <span class="line-clamp-2" title="To cool datacenter servers, Microsoft turns to boiling liquid Donec quis">To cool datacenter servers, Microsoft turns to boiling liquid Donec quis</span>
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
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z">
                                                        </path>
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path>
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path>
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path>
                                                    </svg>
                                                    <span class="ml-1 text-neutral-900 ">110</span>
                                                </a>
                                            </div>
                                            <div class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700  relative">
                                                <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 " title="Save to reading list">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="nc-Card10 relative flex flex-col h-full bg-white rounded-3xl mx-2">
                                    <a class="absolute inset-0" href="/single-gallery/this-is-single-slug"></a>
                                    <div class="block group  flex-shrink-0 relative rounded-t-3xl w-full aspect-w-9 aspect-h-7 sm:aspect-h-9 overflow-hidden z-0">
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
                                    <div class="absolute top-3 inset-x-3 flex justify-between items-start space-x-4 ">
                                        <div class="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                                            <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-pink-800 bg-pink-100 hover:bg-pink-800" href="/archive/the-demo-archive-slug">Planner</a>
                                        </div>

                                    </div>
                                    <div class="p-4 flex flex-col space-y-3">
                                        <div class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800  leading-none text-xs">
                                            <span class="text-neutral-500  font-normal">May 20, 2021</span>
                                        </div>
                                        <h3 class="nc-card-title block text-base font-semibold text-neutral-900 ">
                                            <span class="line-clamp-2" title="To cool datacenter servers, Microsoft turns to boiling liquid Donec quis">To cool datacenter servers, Microsoft turns to boiling liquid Donec quis</span>
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
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z">
                                                        </path>
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path>
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path>
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path>
                                                    </svg>
                                                    <span class="ml-1 text-neutral-900 ">110</span>
                                                </a>
                                            </div>
                                            <div class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700  relative">
                                                <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 " title="Save to reading list">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>


                <div class="sm:px-14 px-4 mt-16 lg:mt-28 ">
                    <div class="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 text-neutral-900 ">
                        <div class="max-w-2xl">
                            <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold">More from author</h2>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 ">
                            <div class="nc-Card9 relative flex flex-col group rounded-3xl overflow-hidden z-0 ">
                                <div class="absolute inset-x-0 top-0 p-3 flex items-center justify-between transition-all  opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 duration-300">
                                    <div class="nc-PostCardLikeAndComment flex items-center space-x-2 relative">
                                        <button class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 hover:bg-rose-50 hover:text-rose-600" title="Liked">
                                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span class="ml-1 text-neutral-900">34</span>
                                        </button>
                                        <a class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors hover:bg-teal-50 hover:text-teal-600 hidden sm:flex px-3 h-8 text-xs " title="Comments" href="/single/demo-slug#comments">
                                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"></path>
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path>
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path>
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path>
                                            </svg>
                                            <span class="ml-1 text-neutral-900">110</span>
                                        </a>
                                    </div>
                                    <div class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 relative">
                                        <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100" title="Save to reading list">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="flex items-start relative w-full aspect-w-3 aspect-h-3 sm:aspect-h-4"></div>
                                <a href="/single/this-is-single-slug2/" className='h-[400px] '>
                                    <img src="https://images.unsplash.com/photo-1488036106564-87ecb155bb15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" sizes="(max-width: 600px) 480px, 500px" class=" rounded-3xl inset-0 object-cover w-full h-full" alt="" />
                                    <div class="nc-PostTypeFeaturedIcon absolute top-3 left-3 group-hover:hidden" data-nc-id="PostTypeFeaturedIcon"></div>
                                    <span class="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                </a>
                                <a class="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black  opacity-50" href="/single/this-is-single-slug2/"></a>
                                <div class="absolute bottom-0 inset-x-0 p-4 flex flex-col flex-grow ">
                                    <a class="absolute inset-0" href="/single/this-is-single-slug2/"></a>
                                    <div class="mb-3">
                                        <div class="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                                            <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 hover:bg-red-800" href="/archive/the-demo-archive-slug">Industrial</a>
                                        </div>
                                    </div>
                                    <div class="inline-flex items-center text-xs text-neutral-300">
                                        <div class="block ">
                                            <h2 class="block text-base sm:text-lg font-semibold text-white ">
                                                <span class="line-clamp-2" title="Unusual ‘machine in the woods’ taps clean energy deep underground for new Microsoft campus ">Unusual ‘machine in the woods’ taps clean energy deep underground for new Microsoft campus </span>
                                            </h2>
                                            <a class="flex mt-2.5 relative" href="/author/the-demo-author-slug">
                                                <span class="block text-neutral-200 hover:text-white font-medium truncate">Fones Mimi</span>
                                                <span class="mx-[6px] font-medium">·</span>
                                                <span class="font-normal truncate">May 20, 2021</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="nc-Card9 relative flex flex-col group rounded-3xl overflow-hidden z-0 ">
                                <div class="absolute inset-x-0 top-0 p-3 flex items-center justify-between transition-all  opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 duration-300">
                                    <div class="nc-PostCardLikeAndComment flex items-center space-x-2 relative">
                                        <button class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 hover:bg-rose-50 hover:text-rose-600" title="Liked">
                                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span class="ml-1 text-neutral-900">34</span>
                                        </button>
                                        <a class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors hover:bg-teal-50 hover:text-teal-600 hidden sm:flex px-3 h-8 text-xs " title="Comments" href="/single/demo-slug#comments">
                                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"></path>
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path>
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path>
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path>
                                            </svg>
                                            <span class="ml-1 text-neutral-900">110</span>
                                        </a>
                                    </div>
                                    <div class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 relative">
                                        <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100" title="Save to reading list">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="flex items-start relative w-full aspect-w-3 aspect-h-3 sm:aspect-h-4"></div>
                                <a href="/single/this-is-single-slug2/" className='h-[400px] '>
                                    <img src="https://images.unsplash.com/photo-1589010588553-46e8e7c21788?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGZvb2R8ZW58MHx8MHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" sizes="(max-width: 600px) 480px, 500px" class=" rounded-3xl inset-0 object-cover h-full" alt="" />
                                    <div class="nc-PostTypeFeaturedIcon absolute top-3 left-3 group-hover:hidden" data-nc-id="PostTypeFeaturedIcon"></div>
                                    <span class="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                </a>
                                <a class="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black  opacity-50" href="/single/this-is-single-slug2/"></a>
                                <div class="absolute bottom-0 inset-x-0 p-4 flex flex-col flex-grow ">
                                    <a class="absolute inset-0" href="/single/this-is-single-slug2/"></a>
                                    <div class="mb-3">
                                        <div class="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                                            <a class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100 hover:bg-blue-800" href="/archive/the-demo-archive-slug">Industrial</a>
                                        </div>
                                    </div>
                                    <div class="inline-flex items-center text-xs text-neutral-300">
                                        <div class="block ">
                                            <h2 class="block text-base sm:text-lg font-semibold text-white ">
                                                <span class="line-clamp-2" title="Unusual ‘machine in the woods’ taps clean energy deep underground for new Microsoft campus ">Unusual ‘machine in the woods’ taps clean energy deep underground for new Microsoft campus </span>
                                            </h2>
                                            <a class="flex mt-2.5 relative" href="/author/the-demo-author-slug">
                                                <span class="block text-neutral-200 hover:text-white font-medium truncate">Fones Mimi</span>
                                                <span class="mx-[6px] font-medium">·</span>
                                                <span class="font-normal truncate">May 20, 2021</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="nc-Card9 relative flex flex-col group rounded-3xl overflow-hidden z-0 ">
                                <div class="absolute inset-x-0 top-0 p-3 flex items-center justify-between transition-all  opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 duration-300">
                                    <div class="nc-PostCardLikeAndComment flex items-center space-x-2 relative">
                                        <button class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 hover:bg-rose-50 hover:text-rose-600" title="Liked">
                                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span class="ml-1 text-neutral-900">34</span>
                                        </button>
                                        <a class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors hover:bg-teal-50 hover:text-teal-600 hidden sm:flex px-3 h-8 text-xs " title="Comments" href="/single/demo-slug#comments">
                                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"></path>
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path>
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path>
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path>
                                            </svg>
                                            <span class="ml-1 text-neutral-900">110</span>
                                        </a>
                                    </div>
                                    <div class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 relative">
                                        <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100" title="Save to reading list">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="flex items-start relative w-full aspect-w-3 aspect-h-3 sm:aspect-h-4"></div>
                                <a href="/single/this-is-single-slug2/" className='h-[400px] '>
                                    <img src="https://images.unsplash.com/photo-1596017443581-4c823c7ae6d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" sizes="(max-width: 600px) 480px, 500px" class=" rounded-3xl inset-0 object-cover w-full h-full" alt="" />
                                    <div class="nc-PostTypeFeaturedIcon absolute top-3 left-3 group-hover:hidden" data-nc-id="PostTypeFeaturedIcon"></div>
                                    <span class="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                </a>
                                <a class="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black  opacity-50" href="/single/this-is-single-slug2/"></a>
                                <div class="absolute bottom-0 inset-x-0 p-4 flex flex-col flex-grow ">
                                    <a class="absolute inset-0" href="/single/this-is-single-slug2/"></a>
                                    <div class="mb-3">
                                        <div class="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                                            <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-yellow-800 bg-yellow-100 hover:bg-yellow-800" href="/archive/the-demo-archive-slug">Industrial</a>
                                        </div>
                                    </div>
                                    <div class="inline-flex items-center text-xs text-neutral-300">
                                        <div class="block ">
                                            <h2 class="block text-base sm:text-lg font-semibold text-white ">
                                                <span class="line-clamp-2" title="Unusual ‘machine in the woods’ taps clean energy deep underground for new Microsoft campus ">Unusual ‘machine in the woods’ taps clean energy deep underground for new Microsoft campus </span>
                                            </h2>
                                            <a class="flex mt-2.5 relative" href="/author/the-demo-author-slug">
                                                <span class="block text-neutral-200 hover:text-white font-medium truncate">Fones Mimi</span>
                                                <span class="mx-[6px] font-medium">·</span>
                                                <span class="font-normal truncate">May 20, 2021</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="nc-Card9 relative flex flex-col group rounded-3xl overflow-hidden z-0 ">
                                <div class="absolute inset-x-0 top-0 p-3 flex items-center justify-between transition-all  opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 duration-300">
                                    <div class="nc-PostCardLikeAndComment flex items-center space-x-2 relative">
                                        <button class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 hover:bg-rose-50 hover:text-rose-600" title="Liked">
                                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span class="ml-1 text-neutral-900">34</span>
                                        </button>
                                        <a class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors hover:bg-teal-50 hover:text-teal-600 hidden sm:flex px-3 h-8 text-xs " title="Comments" href="/single/demo-slug#comments">
                                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"></path>
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path>
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path>
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path>
                                            </svg>
                                            <span class="ml-1 text-neutral-900">110</span>
                                        </a>
                                    </div>
                                    <div class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 relative">
                                        <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100" title="Save to reading list">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="flex items-start relative w-full aspect-w-3 aspect-h-3 sm:aspect-h-4"></div>
                                <a href="/single/this-is-single-slug2/" className='h-[400px] '>
                                    <img src="https://images.unsplash.com/photo-1571435763834-4d6fbb550bb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" sizes="(max-width: 600px) 480px, 500px" class=" rounded-3xl inset-0 object-cover w-full h-full" alt="" />
                                    <div class="nc-PostTypeFeaturedIcon absolute top-3 left-3 group-hover:hidden" data-nc-id="PostTypeFeaturedIcon"></div>
                                    <span class="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                </a>
                                <a class="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black  opacity-50" href="/single/this-is-single-slug2/"></a>
                                <div class="absolute bottom-0 inset-x-0 p-4 flex flex-col flex-grow ">
                                    <a class="absolute inset-0" href="/single/this-is-single-slug2/"></a>
                                    <div class="mb-3">
                                        <div class="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                                            <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-pink-800 bg-pink-100 hover:bg-pink-800" href="/archive/the-demo-archive-slug">Industrial</a>
                                        </div>
                                    </div>
                                    <div class="inline-flex items-center text-xs text-neutral-300">
                                        <div class="block ">
                                            <h2 class="block text-base sm:text-lg font-semibold text-white ">
                                                <span class="line-clamp-2" title="Unusual ‘machine in the woods’ taps clean energy deep underground for new Microsoft campus ">Unusual ‘machine in the woods’ taps clean energy deep underground for new Microsoft campus </span>
                                            </h2>
                                            <a class="flex mt-2.5 relative" href="/author/the-demo-author-slug">
                                                <span class="block text-neutral-200 hover:text-white font-medium truncate">Fones Mimi</span>
                                                <span class="mx-[6px] font-medium">·</span>
                                                <span class="font-normal truncate">May 20, 2021</span>
                                            </a>
                                        </div>
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

