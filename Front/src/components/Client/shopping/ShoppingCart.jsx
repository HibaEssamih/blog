import React from 'react'
import { shopbann, getfree, banner1, Hero1, topic1, topic2, topic3, topic4, topic5, topic6, topic7, topic8, topic9, topic10 } from '../../../assets'


export const ShoppingCart = () => {
    return (
        <>
            <div className='mx-4 md:mx-20 sm:mx-9'>

                <main class="container py-12 lg:pb-24 lg:pt-16 ">
                    <div class="mb-12 sm:mb-16">
                        <h2 class="block text-2xl sm:text-3xl lg:text-4xl font-semibold">Shopping Cart</h2>
                        <div class="block mt-3 sm:mt-5 text-xs sm:text-sm font-medium text-gray-700">
                            <a href="/">Homepage</a>
                            <span class="text-xs mx-1 sm:mx-1.5">/</span>
                            <a href="/">Clothing Categories</a>
                            <span class="text-xs mx-1 sm:mx-1.5">/</span>
                            <span class="underline">Shopping Cart</span>
                        </div>
                    </div>
                    <hr class="border-gray-200 my-10 xl:my-12"></hr>
                    <div class="flex flex-col lg:flex-row">
                        <div class="w-full lg:w-[60%] xl:w-[55%] divide-y divide-gray-200 ">
                            <div class="relative flex py-8 sm:py-10 xl:py-12 first:pt-0 last:pb-0">
                                <div class="relative h-36 w-24 sm:w-32 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                                    <img src={topic3} alt="Rey Nylon Backpack" class="h-full w-full object-cover" />
                                    <a class="absolute inset-0" href="/product-detail"></a>
                                </div>
                                <div class="ml-3 sm:ml-6 flex flex-1 flex-col">
                                    <div>
                                        <div class="flex justify-between ">
                                            <div class="flex-[1.5] ">
                                                <h3 class="text-base font-semibold">
                                                    <a href="/product-detail">Rey Nylon Backpack</a>
                                                </h3>
                                                <div class="mt-1.5 sm:mt-2.5 flex text-sm text-gray-600">
                                                    <div class="flex items-center space-x-1.5">
                                                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                                                    </div>

                                                </div>
                                                <div class="mt-3 flex justify-between w-full sm:hidden relative">
                                                    <div class="">
                                                        <div class="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium h-full">
                                                            <span class="text-green-500 !leading-none">$74.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="hidden flex-1 sm:flex justify-end">
                                                <div class="mt-0.5">
                                                    <div class="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                                                        <span class="text-green-500 !leading-none">$74.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex mt-auto pt-4 items-end justify-between text-sm">
                                        <div class="rounded-full flex items-center justify-center py-1.5 text-xs text-gray-700  ">
                                            <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-pink-800 bg-pink-100 hover:bg-pink-800" href="/archive/the-demo-archive-slug">Planner</a>
                                        </div>
                                        <a href="##" class="relative flex items-center mt-3 font-medium text-blue-800 hover:text-blue-700 text-sm">
                                            <span>Remove</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="relative flex py-8 sm:py-10 xl:py-12 first:pt-0 last:pb-0">
                                <div class="relative h-36 w-24 sm:w-32 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                                    <img src={topic7} alt="Rey Nylon Backpack" class="h-full w-full object-cover" />
                                    <a class="absolute inset-0" href="/product-detail"></a>
                                </div>
                                <div class="ml-3 sm:ml-6 flex flex-1 flex-col">
                                    <div>
                                        <div class="flex justify-between ">
                                            <div class="flex-[1.5] ">
                                                <h3 class="text-base font-semibold">
                                                    <a href="/product-detail">Rey Nylon Backpack</a>
                                                </h3>
                                                <div class="mt-1.5 sm:mt-2.5 flex text-sm text-gray-600">
                                                    <div class="flex items-center space-x-1.5">
                                                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                                                    </div>

                                                </div>
                                                <div class="mt-3 flex justify-between w-full sm:hidden relative">
                                                    <div class="">
                                                        <div class="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium h-full">
                                                            <span class="text-green-500 !leading-none">$74.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="hidden flex-1 sm:flex justify-end">
                                                <div class="mt-0.5">
                                                    <div class="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                                                        <span class="text-green-500 !leading-none">$74.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex mt-auto pt-4 items-end justify-between text-sm">
                                        <div class="rounded-full flex items-center justify-center py-1.5 text-xs text-gray-700  ">
                                            <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-yellow-800 bg-yellow-100 hover:bg-yellow-800" href="/archive/the-demo-archive-slug">Industrial</a>
                                        </div>
                                        <a href="##" class="relative  flex items-center mt-3 font-medium text-blue-800 hover:text-blue-700 text-sm">
                                            <span>Remove</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="relative flex py-8 sm:py-10 xl:py-12 first:pt-0 last:pb-0">
                                <div class="relative h-36 w-24 sm:w-32 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                                    <img src={topic2} alt="Rey Nylon Backpack" class="h-full w-full object-cover" />
                                    <a class="absolute inset-0" href="/product-detail"></a>
                                </div>
                                <div class="ml-3 sm:ml-6 flex flex-1 flex-col">
                                    <div>
                                        <div class="flex justify-between ">
                                            <div class="flex-[1.5] ">
                                                <h3 class="text-base font-semibold">
                                                    <a href="/product-detail">Rey Nylon Backpack</a>
                                                </h3>
                                                <div class="mt-1.5 sm:mt-2.5 flex text-sm text-gray-600">
                                                    <div class="flex items-center space-x-1.5">
                                                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                                                    </div>

                                                </div>
                                                <div class="mt-3 flex justify-between w-full sm:hidden relative">
                                                    <div class="">
                                                        <div class="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium h-full">
                                                            <span class="text-green-500 !leading-none">$74.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="hidden flex-1 sm:flex justify-end">
                                                <div class="mt-0.5">
                                                    <div class="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                                                        <span class="text-green-500 !leading-none">$74.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex mt-auto pt-4 items-end justify-between text-sm">
                                        <div class="rounded-full flex items-center justify-center py-1.5 text-xs text-gray-700  ">
                                            <a class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 hover:bg-red-800" href="/archive/the-demo-archive-slug">Electronics</a>
                                        </div>
                                        <a href="##" class="relative  flex items-center mt-3 font-medium text-blue-800 hover:text-blue-700 text-sm">
                                            <span>Remove</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="border-t lg:border-t-0 lg:border-l border-gray-200  my-10 lg:my-0 lg:mx-10 xl:mx-16 2xl:mx-20 flex-shrink-0"></div>
                        <div class="flex-1">
                            <div class="sticky top-28">
                                <h3 class="text-lg font-semibold">Order Summary</h3>
                                <div class="mt-7 text-sm text-gray-500 divide-y divide-gray-200/70">
                                    <div class="flex justify-between pb-4">
                                        <span>Subtotal</span>
                                        <span class="font-semibold text-gray-900">$249.00</span>
                                    </div>
                                    <div class="flex justify-between py-4">
                                        <span>Shipping estimate</span>
                                        <span class="font-semibold text-gray-900">$5.00</span>
                                    </div>
                                    <div class="flex justify-between py-4">
                                        <span>Tax estimate</span>
                                        <span class="font-semibold text-gray-900">$24.90</span>
                                    </div>
                                    <div class="flex justify-between font-semibold text-gray-900 text-base pt-4">
                                        <span>Order total</span>
                                        <span>$276.00</span>
                                    </div>
                                </div>
                                <a class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 ttnc-ButtonBlue disabled:bg-opacity-90 bg-gray-900 hover:bg-gray-800 text-gray-50 shadow-xl mt-8 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600" rel="noopener noreferrer" href="/checkout">Checkout</a>
                                <div class="mt-5 text-sm text-gray-500 flex items-center justify-center">
                                    <p class="block relative pl-5">
                                        <svg class="w-4 h-4 absolute -left-1 top-0.5" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M12 8V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M11.9945 16H12.0035" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                        Learn more
                                        <a target="_blank" rel="noopener noreferrer" href="##" class="text-gray-900 underline font-medium">Taxes</a>
                                        <span> and </span>
                                        <a target="_blank" rel="noopener noreferrer" href="##" class="text-gray-900 underline font-medium">Shipping</a>  information
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </main>
            </div>
        </>
    )
}
