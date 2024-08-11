import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import Link from "next/link";
import Image from "next/image";

export default function MobileNavigation({ links }: { links: { href: string, label: string }[] }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            {/* Mobile Header */}
            <div className="lg:hidden w-full shadow z-10 bg-[#fbfafe] fixed top-0">
                <div className="p-2 md:p-4 flex w-full justify-between items-center">
                    <Link href="#" className="pl-2">
                        <Image width={110} src={"/logo.svg"} alt="ShangeIt Logo" height={20} className="w-[94px] h-auto md:w-[110px]" />
                    </Link>
                    <button type="button" className="lg:hidden -m-2.5 p-2.5 dark-text dark:text-white"
                        onClick={() => setSidebarOpen(true)}>
                        <HamburgerMenuIcon className="size-7 text-black" aria-hidden="true" />
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog as="div" className="lg:hidden relative z-[999]" onClose={() => setSidebarOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-700 bg-opacity-90 transition-opacity" />
                    </Transition.Child>
                    <div className="fixed inset-0 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                <div className={`flex grow flex-col gap-y-6 bg-white overflow-y-auto pl-8 pr-10 pt-7`}>
                                    <Image width={130} src={"/logo.svg"} alt="ShangeIt Logo" height={20} className="w-[110px] h-auto md:w-[130px]" />
                                    <ul className='flex flex-col space-y-4'>
                                        {
                                            links.map((link, index) => (
                                                <li key={index}>
                                                    <Link href={link.href} className='font-normal hover:font-semibold text-black text-sm' onClick={()=> {
                                                        setSidebarOpen(false);
                                                    }}>
                                                        {link.label}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
}