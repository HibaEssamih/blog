import React, { Fragment } from 'react'
import { shopbann, getfree, banner1, Hero1, topic1, topic2, topic3, topic4, topic5, topic6, topic7, topic8, topic9, topic10, topic11 } from '../../../assets'
import Carousel from '../Carousel';
import { Popover, Transition } from '@headlessui/react'

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
                                            <div class="relative inline-block text-left" data-headlessui-state="">
                                                <button class="flex-shrink-0 flex items-center justify-center focus:outline-none h-9 w-9 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full" title="More" id="headlessui-menu-button-:rel:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div>
                                                <Popover class="relative  text-left" data-headlessui-state="">
                                                    <Popover.Button class="text-neutral-500 flex items-center justify-center rounded-full h-9 w-9 bg-neutral-100 hover:bg-neutral-200 focus:outline-none" title="More" id="headlessui-menu-button-:rem:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="h-5 w-5">
                                                            <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd"></path>
                                                        </svg>
                                                    </Popover.Button>
                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-300 transform"
                                                        enterFrom="opacity-0 translate-y-1"
                                                        enterTo="opacity-100 translate-y-0"
                                                        leave="transition ease-in duration-200 transform"
                                                        leaveFrom="opacity-100 translate-y-0"
                                                        leaveTo="opacity-0 translate-y-1"
                                                    >
                                                        <Popover.Panel class="absolute origin-top-right right-0 w-56 mt-2 bg-white rounded-2xl divide-y divide-neutral-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-30">
                                                            <div class="px-1 py-3 text-sm text-neutral-6000" role="none">
                                                                <div data-menu-item-id="copylink" id="headlessui-menu-item-:rfa:" role="menuitem" tabindex="-1" data-headlessui-state="">
                                                                    <button class="flex items-center rounded-xl w-full px-3 py-2 hover:bg-neutral-100 hover:text-neutral-900 truncate focus:outline-none">
                                                                        <div>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"></path>
                                                                            </svg>
                                                                        </div>
                                                                        <span class="ml-3">Copy link</span>
                                                                    </button>
                                                                </div>
                                                                <div data-menu-item-id="commentThisArticle" id="headlessui-menu-item-:rfb:" role="menuitem" tabindex="-1" data-headlessui-state="">
                                                                    <button class="flex items-center rounded-xl w-full px-3 py-2 hover:bg-neutral-100 hover:text-neutral-900 truncate focus:outline-none">
                                                                        <div>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"></path>
                                                                            </svg>
                                                                        </div>
                                                                        <span class="ml-3">Comment this article</span>
                                                                    </button>
                                                                </div>
                                                                <div data-menu-item-id="hideThisAuthor" id="headlessui-menu-item-:rfc:" role="menuitem" tabindex="-1" data-headlessui-state="">
                                                                    <button class="flex items-center rounded-xl w-full px-3 py-2 hover:bg-neutral-100 hover:text-neutral-900 truncate focus:outline-none">
                                                                        <div>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"></path>
                                                                            </svg>
                                                                        </div>
                                                                        <span class="ml-3">Hide this author</span>
                                                                    </button>
                                                                </div>
                                                                <div data-menu-item-id="reportThisArticle" id="headlessui-menu-item-:rfd:" role="menuitem" tabindex="-1" data-headlessui-state="">
                                                                    <button class="flex items-center rounded-xl w-full px-3 py-2 hover:bg-neutral-100 hover:text-neutral-900 truncate focus:outline-none">
                                                                        <div>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11-.732a9 9 0 01-6.085.711l-.108.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"></path>
                                                                            </svg>
                                                                        </div>
                                                                        <span class="ml-3">Report this article</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>

                                                </Popover>
                                                <div class="nc-NcModal"></div>
                                                <div class="nc-NcModal"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header >
                <div class="">
                    <div class="my-10 sm:my-12 relative aspect-w-16 aspect-h-12 md:aspect-h-9 lg:aspect-h-6">
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
                                    <textarea class=" border p-3 block w-full text-sm rounded-xl border-neutral-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50   " rows="4" placeholder="Add to discussion" required=""></textarea>
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
                                                <div className="relative inline-block text-left" data-headlessui-state="">
                                                    <button className="p-2 text-neutral-500 flex items-center justify-center rounded-lg hover:text-neutral-800 sm:hover:bg-neutral-100 focus:outline-none" title="More" id="headlessui-menu-button-:rc:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-6 w-6">
                                                            <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd"></path>
                                                        </svg>
                                                    </button>
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
                                                <div className="relative inline-block text-left" data-headlessui-state="">
                                                    <button className="p-2 text-neutral-500 flex items-center justify-center rounded-lg hover:text-neutral-800 sm:hover:bg-neutral-100 focus:outline-none" title="More" id="headlessui-menu-button-:rc:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-6 w-6">
                                                            <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd"></path>
                                                        </svg>
                                                    </button>
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
                                                <div className="relative inline-block text-left" data-headlessui-state="">
                                                    <button className="p-2 text-neutral-500 flex items-center justify-center rounded-lg hover:text-neutral-800 sm:hover:bg-neutral-100 focus:outline-none" title="More" id="headlessui-menu-button-:rc:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-6 w-6">
                                                            <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd"></path>
                                                        </svg>
                                                    </button>
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
                                                <div className="relative inline-block text-left" data-headlessui-state="">
                                                    <button className="p-2 text-neutral-500 flex items-center justify-center rounded-lg hover:text-neutral-800 sm:hover:bg-neutral-100 focus:outline-none" title="More" id="headlessui-menu-button-:rc:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-6 w-6">
                                                            <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd"></path>
                                                        </svg>
                                                    </button>
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
