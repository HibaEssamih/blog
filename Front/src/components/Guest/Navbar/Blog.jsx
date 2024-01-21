import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Blog() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 hover:text-purple px-3 py-4 text-15px font-normal space-links items-center">
                    Blogs
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-50 text-gray-800 mx-2 rounded-md' : 'text-gray-800',
                                        'block px-4 mx-2 py-2 text-sm'
                                    )}
                                >
                                    Health
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-50 text-gray-800 mx-2 rounded-md' : 'text-gray-800',
                                        'block px-4 mx-2 py-2 text-sm'
                                    )}
                                >
                                    Beauty
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-50 text-gray-800 mx-2 rounded-md' : 'text-gray-800',
                                        'block px-4 mx-2 py-2 text-sm'
                                    )}
                                >
                                    Money
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-50 text-gray-800 mx-2 rounded-md' : 'text-gray-800',
                                        'block px-4 mx-2 py-2 text-sm'
                                    )}
                                >
                                    Fitness
                                </a>
                            )}
                        </Menu.Item>
                       
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
