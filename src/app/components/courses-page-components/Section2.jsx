import Card from "../courses-page-components/small-components/Card";
import { MdManageAccounts } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { BsPersonRaisedHand } from "react-icons/bs";
import Card2 from "../courses-page-components/small-components/Card2";
import SwitchBgImgsSection from "../services-page-components/small-components/SwitchBgImgsSection";



function Section2() {
    return (
        <div className="max-sm:px-4 sm:px-24 sm:py-11 w-full max-sm:py-8">
            <div className="flex items-center flex-col w-full mb-12">
                <h1 className="text-purple-500 font-semibold max-sm:font-normal text-base max-sm:mb-3">Courses we offer</h1>
                <h2 className="max-sm:text-2xl max-sm:leading-6 w-[90%] text-4xl font-semibold max-sm:text-center text-center">Delivering Excellency in Training through Innovative and Interactive sessions.</h2>
            </div>

            <SwitchBgImgsSection />
        </div>
    )
}

export default Section2;