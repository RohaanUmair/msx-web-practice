'use client';
import Image from "next/image";
import Link from "next/link"
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMenu } from "react-icons/md";



function Header() {
    const navs = [
        {
            name: 'Services',
            href: '/services'
        }, {
            name: 'Salesforce',
            href: '/salesforce'
        }, {
            name: 'Industries',
            href: '/industries'
        }, {
            name: 'Portfolio',
            href: '/portfolio'
        }, {
            name: 'Company',
            href: '/company'
        }, {
            name: 'Resource',
            href: '/resource'
        },
    ];

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    return (
        <header className={`max-sm:bg-white flex gap-7 items-center w-full justify-center px-20 fixed h-[100px] transition-colors duration-300 max-sm:h-[80px] max-sm:px-8 max-sm:justify-between ${isScrolled ? "bg-white text-black shadow-lg" : "bg-transparent text-white"} z-50`}>
            <Image src="/logo.png" alt="logo" width={130} height={130} className={`max-sm:h-20 max-sm:w-20 max-sm: ${isScrolled ? "" : "sm:invert"}`} />

            <nav className="flex gap-8 items-center max-sm:hidden">
                {
                    navs.map((nav, i) => {
                        return (
                            <Link href={nav.href} key={i}>
                                <p className="hover:underline">{nav.name}</p>
                            </Link>
                        )
                    })
                }
            </nav>
            <FaSearch className="max-sm:hidden" />

            <div className="flex items-center gap-2 max-sm:hidden">
                <FaPhoneAlt />
                <p>0333-1234512</p>
            </div>

            <button className="max-sm:hidden bg-gradient-to-r from-purple-500 to-purple-400 text-white px-3 py-3 rounded text-base hover:from-white hover:to-white hover:text-purple-500 hover:border hover:border-purple-500">Free AI Consultation</button>

            <MdMenu className="sm:hidden text-3xl cursor-pointer text-black" />
        </header>
    )
}

export default Header;