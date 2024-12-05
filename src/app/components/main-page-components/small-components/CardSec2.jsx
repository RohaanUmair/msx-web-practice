function CardSec2({ title, text }) {
    return (
        <div className="w-1/2 bg-gray-800 bg-opacity-40 text-center px-9 flex flex-col gap-5 py-9 max-sm:py-6 max-sm:px-7 max-sm:w-full">
            <h1 className="text-purple-500 text-4xl font-semibold max-sm:text-xl">{title}</h1>
            <p className="text-white max-sm:text-xs">{text}</p>
        </div>
    )
}

export default CardSec2;