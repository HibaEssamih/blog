import React, { useEffect, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const DrawerLogo = () => (
  <span className="motivo-wordmark">
    <span className="motivo-mark" aria-hidden="true"><i /><i /><i /><i /></span>
    <span className="motivo-name">Motivog</span>
    <span className="motivo-dot" aria-hidden="true" />
  </span>
);

const Drawer = ({ children, isOpen, setIsOpen }) => {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div
      id="mobile-navigation"
      className={`fixed inset-0 z-[1100] ${isOpen ? "visible" : "pointer-events-none invisible"}`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        tabIndex={isOpen ? 0 : -1}
        aria-label="Close navigation menu"
        onClick={() => setIsOpen(false)}
        className={`absolute inset-0 h-full w-full bg-[#251117]/60 backdrop-blur-[5px] transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`absolute right-0 top-0 flex h-full w-[90%] max-w-[430px] flex-col overflow-hidden bg-[#fffaf4] shadow-[-30px_0_90px_rgba(38,12,20,0.25)] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="pointer-events-none absolute -right-28 top-[12%] h-80 w-80 rounded-full border border-[#a56974]/10" />
        <div className="pointer-events-none absolute -right-12 top-[18%] h-52 w-52 rounded-full border border-[#a56974]/10" />
        <div className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-[#e8c7c3]/25 blur-3xl" />

        <div className="relative flex items-center justify-between border-b border-[#6f3440]/10 px-6 py-5">
          <Link to="/" aria-label="Motivog home" onClick={() => setIsOpen(false)}>
            <DrawerLogo />
          </Link>

          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setIsOpen(false)}
            className="grid h-11 w-11 place-items-center rounded-full border border-[#6f3440]/15 text-[#40272d] transition-all duration-300 hover:rotate-90 hover:border-[#702c39] hover:bg-[#702c39] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#702c39]/40"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="relative flex-1 overflow-y-auto px-6 py-8">{children}</div>

        <div className="relative flex items-center justify-between border-t border-[#6f3440]/10 px-6 py-5">
          <p className="text-[8px] uppercase tracking-[0.25em] text-[#8a6f74]">
            Stories for an inspired life
          </p>
          <span className="font-serif text-sm italic text-[#762f3c]">Est. 2026</span>
        </div>
      </aside>
    </div>
  );
};

export default Drawer;
