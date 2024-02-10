import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Listbox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { shopbann, getfree, banner1, Hero1, topic1, topic2, topic3, topic4, topic5, topic6, topic7, topic8, topic9, topic10, topic11 } from '../../../assets'


const people = [
    { name: 'Most Appreciated' },
    { name: 'Most Recent' },
    { name: 'Most Viewed' },
    { name: 'Most Discussed' },
]

export const CategoryPage = () => {

    let [isOpenCategory, setIsOpenCategory] = useState(false)
    let [isOpenTag, setIsOpenTag] = useState(false)

    const [selected, setSelected] = useState(people[0])


    function closeModalCategory() {
        setIsOpenCategory(false)
    }

    function openModalCategory() {
        setIsOpenCategory(true)
    }
    function closeModalTag() {
        setIsOpenTag(false)
    }

    function openModalTag() {
        setIsOpenTag(true)
    }

    return (
        <>
            <div class="w-full px-2 xl:max-w-screen-2xl mx-auto ">
                <div class="relative md:h-[400px] sm:h-[300px] h-[250px] aspect-w-16 aspect-h-13 sm:aspect-h-9 lg:aspect-h-8 xl:aspect-h-5 rounded-3xl md:rounded-[40px] overflow-hidden z-0">
                    <img src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" sizes="(max-width: 1280px) 100vw, 1536px" class="rounded-3xl md:rounded-[40px] object-cover  inset-0 w-full h-full" alt="archive" />
                    <div class="absolute inset-0 bg-black text-white bg-opacity-30 flex flex-col items-center justify-center">
                        <h2 class="inline-block align-middle text-5xl font-semibold md:text-7xl">Garden</h2>
                        <span class="block mt-4 text-neutral-300">115 Articles</span>
                    </div>
                </div>
            </div>

            <div class="py-16 lg:pb-28 lg:pt-20 mx-2 md:mx-16 sm:mx-6">
                <div>
                    <div class="flex flex-col sm:justify-between sm:flex-row">
                        <div class="flex space-x-2.5">
                            <div class="nc-ModalCategories">
                                <div class="nc-NcModal">
                                    <button class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-white ring-1 ring-neutral-300 hover:ring-neutral-400 text-sm font-medium py-3 px-4 sm:py-3.5 sm:px-6" onClick={openModalCategory}>
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
                                    <button class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-white ring-1 ring-neutral-300 hover:ring-neutral-400 text-sm font-medium py-3 px-4 sm:py-3.5 sm:px-6" onClick={openModalTag}>
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
                                        <Listbox value={selected} onChange={setSelected}>
                                            <div className="relative mt-1 ">
                                                <Listbox.Button className="relative flex-shrink-0  h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-white ring-1 ring-neutral-300 hover:ring-neutral-400 text-sm font-medium py-3 px-4 sm:py-3.5 sm:px-6">
                                                    <span className="block truncate">{selected.name}</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-4 h-4 ml-2 -mr-1">
                                                        <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd"></path>
                                                    </svg>
                                                </Listbox.Button>
                                                <Transition
                                                    as={Fragment}
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                                        {people.map((person, personIdx) => (
                                                            <Listbox.Option
                                                                key={personIdx}
                                                                className={({ active }) =>
                                                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-neutral-50 text-amber-900' : 'text-gray-900'
                                                                    }`
                                                                }
                                                                value={person}
                                                            >
                                                                {({ selected }) => (
                                                                    <>
                                                                        <span
                                                                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                                }`}
                                                                        >
                                                                            {person.name}
                                                                        </span>
                                                                        {selected ? (
                                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-800">
                                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                            </span>
                                                                        ) : null}
                                                                    </>
                                                                )}
                                                            </Listbox.Option>
                                                        ))}
                                                    </Listbox.Options>
                                                </Transition>
                                            </div>
                                        </Listbox>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 lg:mt-10">
                        <div class="nc-Card11 relative flex flex-col group rounded-3xl overflow-hidden bg-white h-full">
                            <div class="block flex-shrink-0 relative w-full rounded-3xl overflow-hidden aspect-w-4 aspect-h-3">
                                <div>
                                    <div class="nc-PostFeaturedMedia relative w-full h-full">
                                        <img src="https://images.unsplash.com/photo-1581610489881-f316ffcf0424?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" sizes="(max-width: 600px) 480px, 800px" class="object-cover inset-0 w-full h-full" alt="featured" />
                                        <a class="block absolute inset-0 bg-black/20 transition-opacity opacity-0 group-hover:opacity-100" href="/single/this-is-single-slug"></a>
                                    </div>
                                </div>
                            </div>
                            <a class="absolute inset-0" href="/single/this-is-single-slug"></a>
                            <span class="absolute top-3 inset-x-3 ">
                                <div class="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                                    <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-pink-800 bg-pink-100 hover:bg-pink-800" href="/archive/the-demo-archive-slug">Automotive</a>
                                </div>
                            </span>
                            <div class="p-4 flex flex-col space-y-3">
                                <div class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 leading-none text-xs">
                                    <span class="text-neutral-500 font-normal">May 20, 2021</span>
                                </div>
                                <h3 class="nc-card-title block text-base font-semibold text-neutral-900"><span class="line-clamp-2" title="New tools for Black pregnant and postpartum mothers to save lives">New tools for Black pregnant and postpartum mothers to save lives</span></h3>
                                <div class="flex items-end justify-between mt-auto">
                                    <div class="nc-PostCardLikeAndComment flex items-center space-x-2 relative">
                                        <button class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 hover:bg-rose-50 hover:text-rose-600">
                                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span class="ml-1 text-neutral-900">34</span>
                                        </button>
                                        <a class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors hover:bg-teal-50 hover:text-teal-600 hidden sm:flex px-3 h-8 text-xs" title="Comments" href="/single/demo-slug#comments">
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
                                        <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


<div class="nc-Card11 relative flex flex-col group rounded-3xl overflow-hidden bg-white h-full">
                            <div class="block flex-shrink-0 relative w-full rounded-3xl overflow-hidden aspect-w-4 aspect-h-3">
                                <div>
                                    <div class="nc-PostFeaturedMedia relative w-full h-full">
                                        <img src="https://images.unsplash.com/photo-1581610489881-f316ffcf0424?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" sizes="(max-width: 600px) 480px, 800px" class="object-cover inset-0 w-full h-full" alt="featured" />
                                        <a class="block absolute inset-0 bg-black/20 transition-opacity opacity-0 group-hover:opacity-100" href="/single/this-is-single-slug"></a>
                                    </div>
                                </div>
                            </div>
                            <a class="absolute inset-0" href="/single/this-is-single-slug"></a>
                            <span class="absolute top-3 inset-x-3 ">
                                <div class="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                                    <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-pink-800 bg-pink-100 hover:bg-pink-800" href="/archive/the-demo-archive-slug">Automotive</a>
                                </div>
                            </span>
                            <div class="p-4 flex flex-col space-y-3">
                                <div class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 leading-none text-xs">
                                    <span class="text-neutral-500 font-normal">May 20, 2021</span>
                                </div>
                                <h3 class="nc-card-title block text-base font-semibold text-neutral-900"><span class="line-clamp-2" title="New tools for Black pregnant and postpartum mothers to save lives">New tools for Black pregnant and postpartum mothers to save lives</span></h3>
                                <div class="flex items-end justify-between mt-auto">
                                    <div class="nc-PostCardLikeAndComment flex items-center space-x-2 relative">
                                        <button class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 hover:bg-rose-50 hover:text-rose-600">
                                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span class="ml-1 text-neutral-900">34</span>
                                        </button>
                                        <a class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors hover:bg-teal-50 hover:text-teal-600 hidden sm:flex px-3 h-8 text-xs" title="Comments" href="/single/demo-slug#comments">
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
                                        <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


<div class="nc-Card11 relative flex flex-col group rounded-3xl overflow-hidden bg-white h-full">
                            <div class="block flex-shrink-0 relative w-full rounded-3xl overflow-hidden aspect-w-4 aspect-h-3">
                                <div>
                                    <div class="nc-PostFeaturedMedia relative w-full h-full">
                                        <img src="https://images.unsplash.com/photo-1581610489881-f316ffcf0424?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" sizes="(max-width: 600px) 480px, 800px" class="object-cover inset-0 w-full h-full" alt="featured" />
                                        <a class="block absolute inset-0 bg-black/20 transition-opacity opacity-0 group-hover:opacity-100" href="/single/this-is-single-slug"></a>
                                    </div>
                                </div>
                            </div>
                            <a class="absolute inset-0" href="/single/this-is-single-slug"></a>
                            <span class="absolute top-3 inset-x-3 ">
                                <div class="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                                    <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-pink-800 bg-pink-100 hover:bg-pink-800" href="/archive/the-demo-archive-slug">Automotive</a>
                                </div>
                            </span>
                            <div class="p-4 flex flex-col space-y-3">
                                <div class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 leading-none text-xs">
                                    <span class="text-neutral-500 font-normal">May 20, 2021</span>
                                </div>
                                <h3 class="nc-card-title block text-base font-semibold text-neutral-900"><span class="line-clamp-2" title="New tools for Black pregnant and postpartum mothers to save lives">New tools for Black pregnant and postpartum mothers to save lives</span></h3>
                                <div class="flex items-end justify-between mt-auto">
                                    <div class="nc-PostCardLikeAndComment flex items-center space-x-2 relative">
                                        <button class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 hover:bg-rose-50 hover:text-rose-600">
                                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span class="ml-1 text-neutral-900">34</span>
                                        </button>
                                        <a class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors hover:bg-teal-50 hover:text-teal-600 hidden sm:flex px-3 h-8 text-xs" title="Comments" href="/single/demo-slug#comments">
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
                                        <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


<div class="nc-Card11 relative flex flex-col group rounded-3xl overflow-hidden bg-white h-full">
                            <div class="block flex-shrink-0 relative w-full rounded-3xl overflow-hidden aspect-w-4 aspect-h-3">
                                <div>
                                    <div class="nc-PostFeaturedMedia relative w-full h-full">
                                        <img src="https://images.unsplash.com/photo-1581610489881-f316ffcf0424?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" sizes="(max-width: 600px) 480px, 800px" class="object-cover inset-0 w-full h-full" alt="featured" />
                                        <a class="block absolute inset-0 bg-black/20 transition-opacity opacity-0 group-hover:opacity-100" href="/single/this-is-single-slug"></a>
                                    </div>
                                </div>
                            </div>
                            <a class="absolute inset-0" href="/single/this-is-single-slug"></a>
                            <span class="absolute top-3 inset-x-3 ">
                                <div class="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                                    <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-pink-800 bg-pink-100 hover:bg-pink-800" href="/archive/the-demo-archive-slug">Automotive</a>
                                </div>
                            </span>
                            <div class="p-4 flex flex-col space-y-3">
                                <div class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 leading-none text-xs">
                                    <span class="text-neutral-500 font-normal">May 20, 2021</span>
                                </div>
                                <h3 class="nc-card-title block text-base font-semibold text-neutral-900"><span class="line-clamp-2" title="New tools for Black pregnant and postpartum mothers to save lives">New tools for Black pregnant and postpartum mothers to save lives</span></h3>
                                <div class="flex items-end justify-between mt-auto">
                                    <div class="nc-PostCardLikeAndComment flex items-center space-x-2 relative">
                                        <button class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 hover:bg-rose-50 hover:text-rose-600">
                                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span class="ml-1 text-neutral-900">34</span>
                                        </button>
                                        <a class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors hover:bg-teal-50 hover:text-teal-600 hidden sm:flex px-3 h-8 text-xs" title="Comments" href="/single/demo-slug#comments">
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
                                        <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


<div class="nc-Card11 relative flex flex-col group rounded-3xl overflow-hidden bg-white h-full">
                            <div class="block flex-shrink-0 relative w-full rounded-3xl overflow-hidden aspect-w-4 aspect-h-3">
                                <div>
                                    <div class="nc-PostFeaturedMedia relative w-full h-full">
                                        <img src="https://images.unsplash.com/photo-1581610489881-f316ffcf0424?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" sizes="(max-width: 600px) 480px, 800px" class="object-cover inset-0 w-full h-full" alt="featured" />
                                        <a class="block absolute inset-0 bg-black/20 transition-opacity opacity-0 group-hover:opacity-100" href="/single/this-is-single-slug"></a>
                                    </div>
                                </div>
                            </div>
                            <a class="absolute inset-0" href="/single/this-is-single-slug"></a>
                            <span class="absolute top-3 inset-x-3 ">
                                <div class="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                                    <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-pink-800 bg-pink-100 hover:bg-pink-800" href="/archive/the-demo-archive-slug">Automotive</a>
                                </div>
                            </span>
                            <div class="p-4 flex flex-col space-y-3">
                                <div class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 leading-none text-xs">
                                    <span class="text-neutral-500 font-normal">May 20, 2021</span>
                                </div>
                                <h3 class="nc-card-title block text-base font-semibold text-neutral-900"><span class="line-clamp-2" title="New tools for Black pregnant and postpartum mothers to save lives">New tools for Black pregnant and postpartum mothers to save lives</span></h3>
                                <div class="flex items-end justify-between mt-auto">
                                    <div class="nc-PostCardLikeAndComment flex items-center space-x-2 relative">
                                        <button class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 hover:bg-rose-50 hover:text-rose-600">
                                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span class="ml-1 text-neutral-900">34</span>
                                        </button>
                                        <a class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors hover:bg-teal-50 hover:text-teal-600 hidden sm:flex px-3 h-8 text-xs" title="Comments" href="/single/demo-slug#comments">
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
                                        <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


<div class="nc-Card11 relative flex flex-col group rounded-3xl overflow-hidden bg-white h-full">
                            <div class="block flex-shrink-0 relative w-full rounded-3xl overflow-hidden aspect-w-4 aspect-h-3">
                                <div>
                                    <div class="nc-PostFeaturedMedia relative w-full h-full">
                                        <img src="https://images.unsplash.com/photo-1581610489881-f316ffcf0424?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" sizes="(max-width: 600px) 480px, 800px" class="object-cover inset-0 w-full h-full" alt="featured" />
                                        <a class="block absolute inset-0 bg-black/20 transition-opacity opacity-0 group-hover:opacity-100" href="/single/this-is-single-slug"></a>
                                    </div>
                                </div>
                            </div>
                            <a class="absolute inset-0" href="/single/this-is-single-slug"></a>
                            <span class="absolute top-3 inset-x-3 ">
                                <div class="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                                    <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-pink-800 bg-pink-100 hover:bg-pink-800" href="/archive/the-demo-archive-slug">Automotive</a>
                                </div>
                            </span>
                            <div class="p-4 flex flex-col space-y-3">
                                <div class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 leading-none text-xs">
                                    <span class="text-neutral-500 font-normal">May 20, 2021</span>
                                </div>
                                <h3 class="nc-card-title block text-base font-semibold text-neutral-900"><span class="line-clamp-2" title="New tools for Black pregnant and postpartum mothers to save lives">New tools for Black pregnant and postpartum mothers to save lives</span></h3>
                                <div class="flex items-end justify-between mt-auto">
                                    <div class="nc-PostCardLikeAndComment flex items-center space-x-2 relative">
                                        <button class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 hover:bg-rose-50 hover:text-rose-600">
                                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span class="ml-1 text-neutral-900">34</span>
                                        </button>
                                        <a class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors hover:bg-teal-50 hover:text-teal-600 hidden sm:flex px-3 h-8 text-xs" title="Comments" href="/single/demo-slug#comments">
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
                                        <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="nc-Card11 relative flex flex-col group rounded-3xl overflow-hidden bg-white h-full">
                            <div class="block flex-shrink-0 relative w-full rounded-3xl overflow-hidden aspect-w-4 aspect-h-3">
                                <div>
                                    <div class="nc-PostFeaturedMedia relative w-full h-full">
                                        <img src="https://images.unsplash.com/photo-1581610489881-f316ffcf0424?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" sizes="(max-width: 600px) 480px, 800px" class="object-cover inset-0 w-full h-full" alt="featured" />
                                        <a class="block absolute inset-0 bg-black/20 transition-opacity opacity-0 group-hover:opacity-100" href="/single/this-is-single-slug"></a>
                                    </div>
                                </div>
                            </div>
                            <a class="absolute inset-0" href="/single/this-is-single-slug"></a>
                            <span class="absolute top-3 inset-x-3 ">
                                <div class="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                                    <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-pink-800 bg-pink-100 hover:bg-pink-800" href="/archive/the-demo-archive-slug">Automotive</a>
                                </div>
                            </span>
                            <div class="p-4 flex flex-col space-y-3">
                                <div class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 leading-none text-xs">
                                    <span class="text-neutral-500 font-normal">May 20, 2021</span>
                                </div>
                                <h3 class="nc-card-title block text-base font-semibold text-neutral-900"><span class="line-clamp-2" title="New tools for Black pregnant and postpartum mothers to save lives">New tools for Black pregnant and postpartum mothers to save lives</span></h3>
                                <div class="flex items-end justify-between mt-auto">
                                    <div class="nc-PostCardLikeAndComment flex items-center space-x-2 relative">
                                        <button class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 hover:bg-rose-50 hover:text-rose-600">
                                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span class="ml-1 text-neutral-900">34</span>
                                        </button>
                                        <a class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors hover:bg-teal-50 hover:text-teal-600 hidden sm:flex px-3 h-8 text-xs" title="Comments" href="/single/demo-slug#comments">
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
                                        <button class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-[18px] h-[18px]">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>


                </div>

            </div>

            <div class="relative py-16">
                <div class="absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 bg-neutral-50">
                    <span class="sr-only hidden">bg</span>
                </div>
                <div class=" relative">
                    <div class="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900">
                        <div class="text-center w-full max-w-2xl mx-auto">
                            <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold">Top trending topics</h2>
                            <span class="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500">Discover over 100 topics</span>
                        </div>
                    </div>
                    <div class="grid px-4 md:px-16 sm:px-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">

                        <a class="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white rounded-3xl transition-colors" href="/archive/the-demo-archive-slug">
                            <span class="nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute -top-2 sm:top-3 left-3 text-indigo-800 bg-indigo-100"> #1 </span>
                            <div class="relative flex-shrink-0 w-20 h-20 rounded-full shadow-lg overflow-hidden z-0">
                                <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=550&amp;q=80" alt="categories" sizes="80px" class="object-cover  absolute inset-0 w-full h-full" />
                            </div>
                            <div class="mt-3">
                                <h2 class="text-base font-semibold">Garden</h2>
                                <span class="block mt-1 text-sm text-neutral-500">13 Articles</span>
                            </div>
                        </a>
                        <a class="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white rounded-3xl transition-colors" href="/archive/the-demo-archive-slug">
                            <span class="nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute -top-2 sm:top-3 left-3 text-indigo-800 bg-indigo-100"> #1 </span>
                            <div class="relative flex-shrink-0 w-20 h-20 rounded-full shadow-lg overflow-hidden z-0">
                                <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=550&amp;q=80" alt="categories" sizes="80px" class="object-cover  absolute inset-0 w-full h-full" />
                            </div>
                            <div class="mt-3">
                                <h2 class="text-base font-semibold">Garden</h2>
                                <span class="block mt-1 text-sm text-neutral-500">13 Articles</span>
                            </div>
                        </a>
                        <a class="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white rounded-3xl transition-colors" href="/archive/the-demo-archive-slug">
                            <span class="nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute -top-2 sm:top-3 left-3 text-indigo-800 bg-indigo-100"> #1 </span>
                            <div class="relative flex-shrink-0 w-20 h-20 rounded-full shadow-lg overflow-hidden z-0">
                                <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=550&amp;q=80" alt="categories" sizes="80px" class="object-cover  absolute inset-0 w-full h-full" />
                            </div>
                            <div class="mt-3">
                                <h2 class="text-base font-semibold">Garden</h2>
                                <span class="block mt-1 text-sm text-neutral-500">13 Articles</span>
                            </div>
                        </a>
                        {/* <!-- Add other cards similarly --> */}
                    </div>
                </div>
                <div class="text-center mx-auto mt-10 md:mt-16">
                    <button disabled="" class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-blue-100 hover:bg-blue-200 text-blue-900 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6">
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Show me more
                    </button>
                </div>
            </div>



            {/* ************Panel For Category********** */}

            <Transition appear show={isOpenCategory} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModalCategory}>
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
                                <Dialog.Panel className="w-full mx-1 md:mx-12 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                    >
                                        <div class=" text-center pb-4 relative border-b border-neutral-100 md:pb-5 ">
                                            <h3 class="text-base font-semibold text-neutral-900 mx-5" id="headlessui-dialog-title-:r2e:" data-headlessui-state="open">Discover other categories</h3>

                                            <button class="w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 absolute left-2 top-1/2 transform -translate-y-1/2 sm:left-4 focus:outline-none" onClick={closeModalCategory}>
                                                <span class="sr-only">Close</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-5 h-5">
                                                    <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </div>

                                    </Dialog.Title>
                                    <div class="py-4  md:py-5">
                                        <div class="grid gap-6 sm:grid-cols-2 sm:py-2 md:gap-8 md:grid-cols-3 lg:grid-cols-4 xl:md:grid-cols-5">
                                            <a class="nc-CardCategory1 flex items-center " href="/archive/the-demo-archive-slug">
                                                <div class="relative flex-shrink-0 w-12 h-12 rounded-lg mr-4 overflow-hidden">
                                                    <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=550&amp;q=80" alt="" sizes="80px" class="object-cover absolute inset-0 w-full h-full" />
                                                </div>
                                                <div>
                                                    <h2 class="text-sm nc-card-title text-neutral-900  sm:text-base font-medium sm:font-semibold">Garden</h2>
                                                    <span class="text-xs block mt-[2px] text-neutral-500">13 Articles</span>
                                                </div>
                                            </a>
                                            <a class="nc-CardCategory1 flex items-center " href="/archive/the-demo-archive-slug">
                                                <div class="relative flex-shrink-0 w-12 h-12 rounded-lg mr-4 overflow-hidden">
                                                    <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=550&amp;q=80" alt="" sizes="80px" class="object-cover absolute inset-0 w-full h-full" />
                                                </div>
                                                <div>
                                                    <h2 class="text-sm nc-card-title text-neutral-900  sm:text-base font-medium sm:font-semibold">Garden</h2>
                                                    <span class="text-xs block mt-[2px] text-neutral-500">13 Articles</span>
                                                </div>
                                            </a>
                                            <a class="nc-CardCategory1 flex items-center " href="/archive/the-demo-archive-slug">
                                                <div class="relative flex-shrink-0 w-12 h-12 rounded-lg mr-4 overflow-hidden">
                                                    <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=550&amp;q=80" alt="" sizes="80px" class="object-cover absolute inset-0 w-full h-full" />
                                                </div>
                                                <div>
                                                    <h2 class="text-sm nc-card-title text-neutral-900  sm:text-base font-medium sm:font-semibold">Garden</h2>
                                                    <span class="text-xs block mt-[2px] text-neutral-500">13 Articles</span>
                                                </div>
                                            </a>
                                            <a class="nc-CardCategory1 flex items-center " href="/archive/the-demo-archive-slug">
                                                <div class="relative flex-shrink-0 w-12 h-12 rounded-lg mr-4 overflow-hidden">
                                                    <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=550&amp;q=80" alt="" sizes="80px" class="object-cover absolute inset-0 w-full h-full" />
                                                </div>
                                                <div>
                                                    <h2 class="text-sm nc-card-title text-neutral-900  sm:text-base font-medium sm:font-semibold">Garden</h2>
                                                    <span class="text-xs block mt-[2px] text-neutral-500">13 Articles</span>
                                                </div>
                                            </a>
                                            <a class="nc-CardCategory1 flex items-center " href="/archive/the-demo-archive-slug">
                                                <div class="relative flex-shrink-0 w-12 h-12 rounded-lg mr-4 overflow-hidden">
                                                    <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=550&amp;q=80" alt="" sizes="80px" class="object-cover absolute inset-0 w-full h-full" />
                                                </div>
                                                <div>
                                                    <h2 class="text-sm nc-card-title text-neutral-900  sm:text-base font-medium sm:font-semibold">Garden</h2>
                                                    <span class="text-xs block mt-[2px] text-neutral-500">13 Articles</span>
                                                </div>
                                            </a>
                                            <a class="nc-CardCategory1 flex items-center " href="/archive/the-demo-archive-slug">
                                                <div class="relative flex-shrink-0 w-12 h-12 rounded-lg mr-4 overflow-hidden">
                                                    <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=550&amp;q=80" alt="" sizes="80px" class="object-cover absolute inset-0 w-full h-full" />
                                                </div>
                                                <div>
                                                    <h2 class="text-sm nc-card-title text-neutral-900  sm:text-base font-medium sm:font-semibold">Garden</h2>
                                                    <span class="text-xs block mt-[2px] text-neutral-500">13 Articles</span>
                                                </div>
                                            </a>

                                        </div>
                                    </div>



                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>


            {/* ************Panel For Tags********** */}

            <Transition appear show={isOpenTag} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModalTag}>
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
                                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                    >
                                        <div class=" text-center pb-4 relative border-b border-neutral-100 md:pb-5 ">
                                            <h3 class="text-base font-semibold text-neutral-900 mx-5" id="headlessui-dialog-title-:r2e:" data-headlessui-state="open">Discover other tags</h3>

                                            <button class="w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 absolute left-2 top-1/2 transform -translate-y-1/2 sm:left-4 focus:outline-none" onClick={closeModalTag}>
                                                <span class="sr-only">Close</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-5 h-5">
                                                    <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </div>

                                    </Dialog.Title>
                                    <div class="py-4 px-6 md:py-5">
                                        <div class="flex flex-wrap">
                                            <a class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 py-2 px-3 rounded-lg md:py-2.5 md:px-4 mr-2 mb-2" href="/archive/the-demo-archive-slug">Garden<span class="text-xs font-normal"> (13)</span></a>
                                            <a class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 py-2 px-3 rounded-lg md:py-2.5 md:px-4 mr-2 mb-2" href="/archive/the-demo-archive-slug">Jewelry<span class="text-xs font-normal"> (16)</span></a>
                                            <a class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 py-2 px-3 rounded-lg md:py-2.5 md:px-4 mr-2 mb-2" href="/archive/the-demo-archive-slug">Industrial<span class="text-xs font-normal"> (15)</span></a>
                                            <a class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 py-2 px-3 rounded-lg md:py-2.5 md:px-4 mr-2 mb-2" href="/archive/the-demo-archive-slug">Health<span class="text-xs font-normal"> (15)</span></a>
                                            <a class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 py-2 px-3 rounded-lg md:py-2.5 md:px-4 mr-2 mb-2" href="/archive/the-demo-archive-slug">Money<span class="text-xs font-normal"> (15)</span></a>
                                            <a class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 py-2 px-3 rounded-lg md:py-2.5 md:px-4 mr-2 mb-2" href="/archive/the-demo-archive-slug">Beauty<span class="text-xs font-normal"> (15)</span></a>
                                            <a class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 py-2 px-3 rounded-lg md:py-2.5 md:px-4 mr-2 mb-2" href="/archive/the-demo-archive-slug">Design<span class="text-xs font-normal"> (15)</span></a>
                                            <a class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 py-2 px-3 rounded-lg md:py-2.5 md:px-4 mr-2 mb-2" href="/archive/the-demo-archive-slug">Computer<span class="text-xs font-normal"> (15)</span></a>
                                            <a class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 py-2 px-3 rounded-lg md:py-2.5 md:px-4 mr-2 mb-2" href="/archive/the-demo-archive-slug">Sience<span class="text-xs font-normal"> (15)</span></a>
                                            <a class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 py-2 px-3 rounded-lg md:py-2.5 md:px-4 mr-2 mb-2" href="/archive/the-demo-archive-slug">LifeStyle<span class="text-xs font-normal"> (15)</span></a>
                                            <a class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 py-2 px-3 rounded-lg md:py-2.5 md:px-4 mr-2 mb-2" href="/archive/the-demo-archive-slug">Creativity<span class="text-xs font-normal"> (15)</span></a>
                                        </div>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            <div className="mb-[90px] w-72">
            </div>
        </>
    )
}
