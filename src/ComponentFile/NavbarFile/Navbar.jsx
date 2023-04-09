import React, { useState } from 'react';
import './NavStyle.css';
import { Transition } from '@headlessui/react';
import ActiveLink from './ActiveLink';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className=' sticky top-0 z-50 '>
            <nav className="nav-style">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex w-full justify-between items-center">
                            <div className="flex-shrink-0">
                                <h2>Job-hunter</h2>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <ActiveLink
                                        to="/"
                                        className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Home
                                    </ActiveLink>

                                    <ActiveLink
                                        to="/statistics"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Statistics
                                    </ActiveLink>

                                    <ActiveLink
                                        to="/aboutUs"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        About-Us
                                    </ActiveLink>



                                    <ActiveLink
                                        to="/dashboard"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Dashboard
                                    </ActiveLink>
                                </div>
                            </div>
                            <button className=' text-1xl md:3xl nav-button-style hidden md:block'>Start Applay</button>

                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
                                <ActiveLink
                                    to="/"
                                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Home
                                </ActiveLink>
                                <ActiveLink
                                    to="/Statistics"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Statistics
                                </ActiveLink>

                                <ActiveLink
                                    to="/aboutUs"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    About-Us
                                </ActiveLink>

                                <ActiveLink
                                    to="/contact"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Contact
                                </ActiveLink>
                                <ActiveLink
                                    to="/dashboard"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Dashboard
                                </ActiveLink>


                                <button className=' text-1xl md:3xl button-style'>Start Applay</button>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>

        </div>
        // <div>
        //     <nav className="nav-style">
        //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        //             <div className="flex items-center justify-between h-16">
        //                 <div className="flex w-full justify-between items-center">
        //                     <div className="flex-shrink-0">
        //                         <img
        //                             className="h-8 w-8"
        //                             src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
        //                             alt="Workflow"
        //                         />
        //                     </div>
        //                     <div className="hidden md:block">
        //                         <div className="ml-10 flex items-baseline space-x-4">
        //                             <ActiveLinkctiveRoute
        //                                 to="/"
        //                                 className=" hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        //                             >
        //                                 Home
        //                             </ActiveLinkctiveRoute>

        //                             <ActiveLinkctiveRoute
        //                                 to="/aboutUs"
        //                                 className=" hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        //                             >
        //                                 About-Us
        //                             </ActiveLinkctiveRoute>

        //                             <ActiveLinkctiveRoute
        //                                 to=""
        //                                 className=" hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        //                             >
        //                                 Projects
        //                             </ActiveLinkctiveRoute>

        //                             <ActiveLinkctiveRoute
        //                                 to=""
        //                                 className=" hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        //                             >
        //                                 Calendar
        //                             </ActiveLinkctiveRoute>

        //                             <ActiveLinkctiveRoute
        //                                 to=""
        //                                 className=" hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        //                             >
        //                                 Reports
        //                             </ActiveLinkctiveRoute>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="-mr-2 flex md:hidden">
        //                     <button
        //                         type="button"
        //                         className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        //                         aria-controls="mobile-menu"
        //                         aria-expanded="false"
        //                     >
        //                         <span className="sr-only">Open main menu</span>

        //                         <svg
        //                             className="block h-6 w-6"
        //                             xmlns="http://www.w3.org/2000/svg"
        //                             fill="none"
        //                             viewBox="0 0 24 24"
        //                             stroke="currentColor"
        //                             aria-hidden="true"
        //                         >
        //                             <path
        //                                 stroke-linecap="round"
        //                                 stroke-linejoin="round"
        //                                 stroke-width="2"
        //                                 d="M4 6h16M4 12h16M4 18h16"
        //                             />
        //                         </svg>

        //                         <svg
        //                             className="hidden h-6 w-6"
        //                             xmlns="http://www.w3.org/2000/svg"
        //                             fill="none"
        //                             viewBox="0 0 24 24"
        //                             stroke="currentColor"
        //                             aria-hidden="true"
        //                         >
        //                             <path
        //                                 stroke-linecap="round"
        //                                 stroke-linejoin="round"
        //                                 stroke-width="2"
        //                                 d="M6 18L18 6M6 6l12 12"
        //                             />
        //                         </svg>
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="md:hidden" id="mobile-menu">
        //             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        //                 <ActiveLink
        //                     href="#"
        //                     className=" text-white block px-3 py-2 rounded-md text-base font-medium"
        //                 >
        //                     Dashboard
        //                 </ActiveLink>

        //                 <ActiveLink
        //                     href="#"
        //                     className=" hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        //                 >
        //                     Team
        //                 </ActiveLink>

        //                 <ActiveLink
        //                     href="#"
        //                     className=" hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        //                 >
        //                     Projects
        //                 </ActiveLink>

        //                 <ActiveLink
        //                     href="#"
        //                     className=" hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        //                 >
        //                     Calendar
        //                 </ActiveLink>

        //                 <ActiveLink
        //                     href="#"
        //                     className=" hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        //                 >
        //                     Reports
        //                 </ActiveLink>
        //             </div>
        //         </div>
        //     </nav>


        // </div>
    );
};

export default Navbar;