import React from 'react'

export const ChangePassword = () => {
    return (
        <>
            <div class="max-w-4xl mx-auto pt-2 sm:pt-10 pb-14 lg:pb-22">
                <div class="space-y-10 sm:space-y-12">
                    <h2 class="text-2xl sm:text-3xl font-semibold">Update your password</h2>
                    <div class="max-w-xl space-y-6">
                        <div>
                            <label class="nc-Label text-base font-medium text-neutral-900" data-nc-id="Label">Current password</label>
                            <input type="password" class="block w-full border-neutral-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"/>
                        </div>
                        <div>
                            <label class="nc-Label text-base font-medium text-neutral-900" data-nc-id="Label">New password</label>
                            <input type="password" class="block w-full border-neutral-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5" />
                        </div>
                        <div>
                            <label class="nc-Label text-base font-medium text-neutral-900" data-nc-id="Label">Confirm password</label>
                            <input type="password" class="block w-full border-neutral-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5" />
                        </div>
                        <div class="pt-2">
                            <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 disabled:bg-opacity-90 bg-gray-900 hover:bg-gray-800 text-gray-50 shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-6000">
                                Update password
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
