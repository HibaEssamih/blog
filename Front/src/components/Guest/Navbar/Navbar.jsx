import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { Link, useLocation  } from "react-router-dom";
import React from 'react';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
// import Signdialog from "./Signdialog";
// import Registerdialog from "./Registerdialog";
import { logo } from '../../../assets'
import Blog from './Blog';




const navigation = [
    // { name: 'Home', href: '', current: true },
    // { name: 'Blogs', href: '', current: false },
    { name: 'Tools', href: 'tools', current: false },
    { name: 'Shop', href: 'allProducts', current: false },
    { name: 'Contact Us', href: 'contactUs', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const location = useLocation();

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className=" navbar">
            <>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="relative flex h-20 items-center justify-between">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">

                            {/* LOGO */}

                            <div className="flex flex-shrink-0 items-center">
                                <img
                                    className="imgLogo h-16 block mdt:hidden"
                                    src={logo}
                                    alt="motivog-Logo"
                                />
                                <img
                                    className="imgLogo hidden h-16 mdt:block"
                                    src={logo}
                                    alt="motivog-Logo"
                                />
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:ml-14 ml-4 mdt:block">
                                <div className="flex space-x-4 items-center h-full  ">
                                    <Link
                                    to={`/`}
                                        className={classNames(
                                            location.pathname === '/' ? ' text-burnt' : 'hover:text-burnt',
                                            'px-3 py-4 text-15px font-normal '
                                        )}
                                    >
                                        Home
                                    </Link>

                                    <Blog />


                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={`/${item.href}`}
                                            className={classNames(
                                                location.pathname === `/${item.href}` ? ' text-burnt' : 'hover:text-burnt',
                                                'px-3 py-4 text-15px font-normal '
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}

                                </div>
                            </div>
                        </div>
                        <div className=" inset-y-0 right-0 flex items-center pr-2 static inset-auto ml-6 cursor-pointer">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>

                        </div>




                        {/* REGISTER DIALOG */}

                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
                            <div className='hidden mdt:block'>
                                <Link to="/login">
                                    <button className="bg-burnt hover:bg-[#8d5454] hover:text-white text-white text-15px font-medium ml-8 py-3 px-6 rounded" >
                                        Sign In
                                    </button>
                                </Link>
                            </div>
                        </div>


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block mdt:hidden'>
                            <Bars3Icon className="block h-6 w-6 cursor-pointer" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
