import React from 'react'
import { shopbann, getfree, banner1, Hero1, topic1, topic2, topic3, topic4, topic5, topic6, topic7, topic8, topic9, topic10 } from '../../../assets'


export const MyOrders = () => {
    return (
        <>
            <div class="max-w-4xl mx-auto pt-2 sm:pt-10 pb-14 lg:pb-22">
                <div class="space-y-10 sm:space-y-12">
                    <h2 class="text-2xl sm:text-3xl font-semibold">Order History</h2>
                    <div class="border border-gray-200 rounded-lg overflow-hidden z-0">
                        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 sm:p-8 bg-gray-50">
                            <div>
                                <p class="text-lg font-semibold">#WU3746HGG12</p>
                                <p class="text-gray-500 text-sm mt-1.5 sm:mt-2">
                                    <span>Aug 8, 2023</span>
                                    <span class="mx-2">·</span>
                                    <span class="text-primary-500">Delivered</span>
                                </p>
                            </div>
                            <div class="mt-3 sm:mt-0">
                                <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm font-medium py-2.5 px-4 sm:px-6  ttnc-ButtonSecondary bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000">View Order</button>
                            </div>
                        </div>
                        <div class="border-t border-gray-200 p-2 sm:p-8 divide-y divide-y-gray-200">
                            <div class="flex py-4 sm:py-7 last:pb-0 first:pt-0">
                                <div class="h-24 w-16 sm:w-20 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                                    <img src={topic4} alt="Rey Nylon Backpack" class="h-full w-full object-cover object-center" />
                                </div>
                                <div class="ml-4 flex flex-1 flex-col">
                                    <div>
                                        <div class="flex justify-between ">
                                            <div>
                                                <h3 class="text-base font-medium line-clamp-1">Rey Nylon Backpack</h3>
                                                <p class="mt-1 text-sm text-gray-500">
                                                    <span>Natural</span>
                                                    <span class="mx-2 border-l border-gray-200 h-4"></span>
                                                    <span>XL</span>
                                                </p>
                                            </div>
                                            <div class="mt-0.5 ml-2">
                                                <div class="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                                                    <span class="text-green-500 !leading-none">$33.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-1 items-end justify-between text-sm">
                                        <p class="text-gray-500 flex items-center">
                                            <span class="hidden sm:inline-block">Qty</span>
                                            <span class="inline-block sm:hidden">x</span>
                                            <span class="ml-2">1</span>
                                        </p>
                                        <div class="flex">
                                            <button type="button" class="font-medium text-indigo-600">
                                                Leave review
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex py-4 sm:py-7 last:pb-0 first:pt-0">
                                <div class="h-24 w-16 sm:w-20 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                                    <img src={topic2} alt="Rey Nylon Backpack" class="h-full w-full object-cover object-center" />
                                </div>
                                <div class="ml-4 flex flex-1 flex-col">
                                    <div>
                                        <div class="flex justify-between ">
                                            <div>
                                                <h3 class="text-base font-medium line-clamp-1">Rey Nylon Backpack</h3>
                                                <p class="mt-1 text-sm text-gray-500">
                                                    <span>Natural</span>
                                                    <span class="mx-2 border-l border-gray-200 h-4"></span>
                                                    <span>XL</span>
                                                </p>
                                            </div>
                                            <div class="mt-0.5 ml-2">
                                                <div class="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                                                    <span class="text-green-500 !leading-none">$33.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-1 items-end justify-between text-sm">
                                        <p class="text-gray-500 flex items-center">
                                            <span class="hidden sm:inline-block">Qty</span>
                                            <span class="inline-block sm:hidden">x</span>
                                            <span class="ml-2">1</span>
                                        </p>
                                        <div class="flex">
                                            <button type="button" class="font-medium text-indigo-600">
                                                Leave review
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="border border-gray-200 rounded-lg overflow-hidden z-0">
                        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 sm:p-8 bg-gray-50">
                            <div>
                                <p class="text-lg font-semibold">#WU3746HGG12</p>
                                <p class="text-gray-500 text-sm mt-1.5 sm:mt-2">
                                    <span>Aug 8, 2023</span>
                                    <span class="mx-2">·</span>
                                    <span class="text-primary-500">Delivered</span>
                                </p>
                            </div>
                            <div class="mt-3 sm:mt-0">
                                <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm font-medium py-2.5 px-4 sm:px-6  ttnc-ButtonSecondary bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000">View Order</button>
                            </div>
                        </div>
                        <div class="border-t border-gray-200 p-2 sm:p-8 divide-y divide-y-gray-200">
                            <div class="flex py-4 sm:py-7 last:pb-0 first:pt-0">
                                <div class="h-24 w-16 sm:w-20 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                                    <img src={topic9} alt="Rey Nylon Backpack" class="h-full w-full object-cover object-center" />
                                </div>
                                <div class="ml-4 flex flex-1 flex-col">
                                    <div>
                                        <div class="flex justify-between ">
                                            <div>
                                                <h3 class="text-base font-medium line-clamp-1">Rey Nylon Backpack</h3>
                                                <p class="mt-1 text-sm text-gray-500">
                                                    <span>Natural</span>
                                                    <span class="mx-2 border-l border-gray-200 h-4"></span>
                                                    <span>XL</span>
                                                </p>
                                            </div>
                                            <div class="mt-0.5 ml-2">
                                                <div class="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                                                    <span class="text-green-500 !leading-none">$33.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-1 items-end justify-between text-sm">
                                        <p class="text-gray-500 flex items-center">
                                            <span class="hidden sm:inline-block">Qty</span>
                                            <span class="inline-block sm:hidden">x</span>
                                            <span class="ml-2">1</span>
                                        </p>
                                        <div class="flex">
                                            <button type="button" class="font-medium text-indigo-600">
                                                Leave review
                                            </button>
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
