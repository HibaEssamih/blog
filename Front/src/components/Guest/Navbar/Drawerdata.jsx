import React from "react";
import { Link } from "react-router-dom";
import Contactus from './Contactus';

const navigation = [
  { name: 'Home', href: '', current: true },
  { name: 'Blogs', href: '', current: false },
  { name: 'Tools', href: '', current: false },
  { name: 'Shop', href: '', current: false },
  { name: 'Join', href: '', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Data = () => {
  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={`/${item.href}`}
                className={classNames(
                  item.current ? ' text-purple' : 'text-black  hover:text-purple',
                  'block  py-2 rounded-md text-base font-normal'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}

            {/* {navigation.map((item) => (
              <li
                key={item.name}
                className={classNames(
                  item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                  'block  py-2 rounded-md text-base font-medium'
                )}
              >
                <Link to={`/${item.href}`}>{item.name}</Link>
              </li>


            ))} */}
            <Contactus />
            <div className="mt-8"></div>
            {/* <button className="bg-white w-full hover:bg-burnt hover:text-white text-black border border-burnt font-medium py-2 px-4 rounded">
              Sign In
            </button> */}
            <button className="bg-white w-full hover:bg-burnt hover:text-white text-burnt border border-burnt font-medium py-2 px-4 rounded">
            Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
