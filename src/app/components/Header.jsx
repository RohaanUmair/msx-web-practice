'use client';
import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMenu } from "react-icons/md";



function Header() {
    const path = usePathname();

    const navs = [
        {
            name: 'Home',
            href: '/'
        }, {
            name: 'Services',
            href: '/services'
        }, {
            name: 'Courses',
            href: '/courses'
        }
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


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
        <header className={`max-sm:bg-white flex gap-7 items-center w-full justify-between px-20 fixed h-[100px] transition-colors duration-300 max-sm:h-[80px] max-sm:px-8 ${isScrolled ? "bg-white text-black shadow-lg" : "bg-transparent text-white max-sm:shadow-lg"} z-50`}>
            <Image src="/logo.png" alt="logo" width={130} height={130} className={`max-sm:h-20 max-sm:w-20 max-sm: ${isScrolled ? "" : "sm:invert"}`} />

            <nav className="flex gap-16 items-center max-sm:hidden">
                {
                    navs.map((nav, i) => {
                        return (
                            <Link href={nav.href} key={i}>
                                <p className="hover:underline text-lg">{nav.name}</p>
                            </Link>
                        )
                    })
                }
                <FaSearch className="max-sm:hidden" />
                <div className="flex items-center gap-2 max-sm:hidden">
                    <FaPhoneAlt />
                    <p>0331-8106045</p>
                </div>
            </nav>


            <button className="max-sm:hidden bg-gradient-to-r from-purple-500 to-purple-400 text-white px-3 py-3 rounded text-base hover:from-white hover:to-white hover:text-purple-500 hover:border hover:border-purple-500">Free AI Consultation</button>

            <MdMenu className="sm:hidden text-3xl cursor-pointer text-black" onClick={() => setIsMenuOpen(!isMenuOpen)} />

            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg sm:hidden">
                    <nav className="flex flex-col items-start p-4">
                        {navs.map((nav, index) => (
                            <Link href={nav.href} key={index}>
                                <p className="py-2 pl-4 pr-6 text-black hover:bg-gray-200 w-full">{nav.name}</p>
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Header;