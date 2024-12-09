import Image from "next/image";
import { MdFacebook } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";


function Footer() {
    const services = ['Predictive Modelling', 'Chat GPT Integration', 'Natural Language Processing', 'Machine Learning', 'Computer Vision', 'Big Data Analysis'];
    const getInTouch = [
        { text: '0331-8106045', icon: <FaPhoneAlt /> },
        { text: 'support@microsysx.com', icon: <IoMdMail /> },
        { text: 'United Arab Emirates', icon: <FaLocationDot /> },
        { text: 'Pakistan', icon: <FaLocationDot /> }, { text: 'United Kingdom', icon: <FaLocationDot /> },
        { text: 'United States', icon: <FaLocationDot /> }
    ];

    return (
        <footer className="h-[480px] w-full bg-blue-950 text-white max-sm:h-full">
            <div className="py-20 flex justify-between max-sm:gap-7 sm:px-24 max-sm:flex-col max-sm:px-8 max-sm:py-7">

                <div className="flex flex-col gap-5 max-sm:gap-2">
                    <Image src="/logo.png" alt="logo" width={130} height={130} className="invert -translate-x-3" />

                    <h3 className="-translate-y-5 text-lg">Shaping technology for the future</h3>

                    <div className="flex text-black gap-3">
                        <Icons component={<MdFacebook className="text-xl" />} />
                        <Icons component={<FaLinkedin className="text-xl" />} />
                        <Icons component={<IoLogoInstagram className="text-xl" />} />
                        <Icons component={<FaXTwitter className="text-xl" />} />
                        <Icons component={<FaYoutube className="text-xl" />} />
                    </div>
                </div>


                <ul className="flex flex-col gap-2">
                    <ul className="font-bold text-xl mb-3">Services</ul>
                    {
                        services.map((service, index) => {
                            return (
                                <li key={index} className="sm:font-semibold">{service}</li>
                            )
                        })
                    }
                </ul>


                <ul className="flex flex-col gap-2">
                    <ul className="font-bold text-xl mb-3">Get In Touch</ul>
                    {
                        getInTouch.map((item, index) => {
                            return (
                                <div className="flex items-center gap-2" key={index}>
                                    {item.icon}
                                    <li className="font-">{item.text}</li>
                                </div>
                            )
                        })
                    }
                </ul>


                <div className="flex flex-col">
                    <label htmlFor="email" className="font-bold text-xl mb-3">Join Our NewLetter</label>

                    <div className="flex">
                        <input type="email" className="bg-white rounded-s-lg text-sm outline-none h-12 px-4" placeholder="Enter Email" id="email" />
                        <button className="bg-gradient-to-r from-purple-500 h-12 px-4 text-sm rounded-e-lg to-purple-400">SUBMIT</button>
                    </div>
                </div>

            </div>

            <div className="h-[80px] border-t border-gray-500 px-24 flex items-center justify-between w-full max-sm:flex-col max-sm:px-0 max-sm:py-3 max-sm:text-sm">
                <div>
                    <p>
                        2024 <span className="text-purple-400">MSX Solutions</span>. All Rights Reserved.
                    </p>
                </div>

                <div className="flex gap-12">
                    <p>Career</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;


function Icons({ component }) {
    return (
        <div className="h-6 rounded w-6 flex items-center justify-center bg-blue-200">
            {component}
        </div>
    )
}