import Image from "next/image";

function Heading({ text }) {
    return (
        <div className="flex gap-2 items-start sm:-translate-x-10  max-sm:w-full max-sm:text-center max-sm:items-start max-sm:-translate-x-5">
            <Image src={'/heading-icon.webp'} className="object-contain translate-y-2 max-sm:scale-75" alt="vector" width={30} height={30} />
            <h1 className="text-4xl text-black max-sm:text-xl max-sm:text-left">{text}</h1>
        </div>
    )
}

export default Heading;