import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { number: "01", name: "Home", href: "/" },
  { number: "02", name: "Stories", href: "/categoryPage" },
  { number: "03", name: "Tools", href: "/tools" },
  { number: "04", name: "The shop", href: "/allProducts" },
  { number: "05", name: "Contact", href: "/contactUs" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Drawerdata = ({ setIsOpen }) => {
  const location = useLocation();
  const closeDrawer = () => setIsOpen?.(false);

  return (
    <nav className="flex min-h-full flex-col" aria-label="Mobile navigation links">
      <div>
        <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#b68a92]">
          Explore the journal
        </p>

        <div className="border-y border-[#6f3440]/10">
          {navigation.map((item, index) => {
            const active = location.pathname === item.href;

            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={closeDrawer}
                aria-current={active ? "page" : undefined}
                style={{ transitionDelay: `${index * 45}ms` }}
                className={classNames(
                  "group grid grid-cols-[34px_1fr_auto] items-center border-b border-[#6f3440]/10 py-[18px] transition-all duration-300 last:border-0",
                  active ? "text-[#762f3c]" : "text-[#352126] hover:pl-2 hover:text-[#762f3c]"
                )}
              >
                <span className="self-start pt-1 text-[8px] font-semibold tracking-[0.16em] text-[#b78e95]">
                  {item.number}
                </span>

                <span className="font-serif text-[clamp(28px,8vw,38px)] leading-none tracking-[-0.035em]">
                  {item.name}
                </span>

                <span
                  aria-hidden="true"
                  className={classNames(
                    "grid h-8 w-8 place-items-center rounded-full border border-[#74333f]/15 text-sm transition-all duration-300",
                    active
                      ? "rotate-45 bg-[#762f3c] text-white"
                      : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:rotate-45 group-hover:bg-[#762f3c] group-hover:text-white group-hover:opacity-100"
                  )}
                >
                  ↗
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-auto pt-10">
        <div className="relative mb-7 overflow-hidden rounded-[26px] border border-white/60 bg-gradient-to-br from-[#f6e6e2] to-[#efe2d8] p-5 shadow-[0_18px_50px_rgba(83,39,48,0.08)]">
          <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full border border-[#9c6570]/15" />
          <span className="mb-4 block text-[8px] font-semibold uppercase tracking-[0.25em] text-[#9a6972]">
            This week’s edit
          </span>
          <p className="mb-2 font-serif text-[25px] leading-none text-[#3a2027]">
            A softer way to live,
            <br />one story at a time.
          </p>
          <p className="mt-4 max-w-[270px] text-xs leading-5 text-[#765e64]">
            Beauty, wellness, culture and intentional living—thoughtfully curated.
          </p>
        </div>

        <Link
          to="/login"
          onClick={closeDrawer}
          className="group flex w-full items-center justify-between overflow-hidden rounded-full bg-[#702c39] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_15px_35px_rgba(112,44,57,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#481b25]"
        >
          <span>Enter your account</span>
          <ArrowUpRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </nav>
  );
};

export default Drawerdata;
