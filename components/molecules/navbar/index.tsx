"use client";

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNavigation from '../mobileNav'

export default function Navbar() {
    const links = [
        { href: '#', label: 'About Us' },
        { href: '#', label: 'Contact Us' },
        { href: '#', label: 'FAQ' },
    ]
    return (
        <div>
            <nav className='fixed top-0 left-0 right-0 bg-white hidden lg:flex z-50 items-center xl:px-20 lg:px-16 2xl:px-28 py-2 xl:py-4'>
                <Image width={211} height={58} src="/logo.svg" alt='shange it' className='xl:w-[211px] w-[180px]' />
                <ul className='flex items-center space-x-9 flex-1 justify-center'>
                    {
                        links.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href} className='font-normal hover:font-semibold text-sm'>
                                    {link.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <Link href="#" className='bg-[#FFC567] px-8 py-4 text-white font-normal text-sm rounded-md'>Get Started</Link>
            </nav>
            <MobileNavigation links={links}/>
        </div>
    )
}
