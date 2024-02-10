import React from 'react'
import { shopbann, aboutHero, getfree, banner1, Hero1, topic1, topic2, topic3, topic4, topic5, topic6, topic7, topic8, topic9, topic10 } from '../../assets'


export const AboutUs = () => {
    return (
        <>
            <div class="relative px-16">
                <div class="nc-BgGlassmorphism absolute inset-x-0 top-0 min-h-0 pl-10 py-32 flex flex-col overflow-hidden z-0" data-nc-id="BgGlassmorphism">
                    <span class="bg-[#ef233c] w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-20 lg:w-96 lg:h-9w-96"></span>
                    <span class="bg-[#04868b] w-80 h-80 ml-10 -mt-10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 lg:w-96 lg:h-9w-96 nc-animation-delay-2000"></span>
                </div>
                <div class="container py-16 lg:py-28 space-y-16 lg:space-y-28">
                    <div class="nc-SectionHero relative">
                        <div class="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
                            <div class="w-screen max-w-full xl:max-w-lg space-y-5 lg:space-y-7">
                                <h2 class="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl">👋 About Us.</h2>
                                <span class="block text-base xl:text-lg text-neutral-6000">We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world.</span>
                            </div>
                            <div class="flex-grow">
                                <img src={aboutHero} class="w-full" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="nc-SectionFounder relative">
                        <div class="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900">
                            <div class="max-w-2xl">
                                <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold">⛱ Founder</h2>
                                <span class="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500">We’re impartial and independent, and every day we create distinctive, world-class programmes and content</span>
                            </div>
                        </div>
                        <div class="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 xl:gap-x-8">
                           
                        </div>

                    </div>

                    {/* <!-- Other sections go here without dark classes --> */}
                </div>
            </div>

        </>
    )
}
