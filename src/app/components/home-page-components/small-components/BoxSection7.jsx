import Image from "next/image";

function Box({ imgSrc, stepNumber, heading, text }) {
    return (
        <div className="w-1/5 max-sm:w-1/2 flex flex-col gap-4 max-sm:h-full max-sm:px-2 max-sm:py-1 max-sm:mb-4 max-sm:items-center">
            <Image src={imgSrc} alt="step-number" width={70} height={70} />

            <h3 className="text-gray-500 font-semibold max-sm:text-sm">Step {stepNumber}</h3>

            <h4 className="text-base font-semibold h-12 max-sm:text-sm max-sm:text-center">{heading}</h4>

            <p className="text-gray-500 text-sm leading-[22px] max-sm:hidden">{text}</p>
        </div>
    )
}


export default Box;