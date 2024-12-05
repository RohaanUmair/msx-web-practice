function CardSec3({ icon, title, desc }) {
    return (
        <div className="sm:w-1/4 max-sm:scale-95 max-sm:w-1/2 flex flex-col items-center border px-5 py-12 max-sm:px-3 max-sm:py-6 max-sm:gap-2 rounded-xl gap-5 text-center hover:bg-gray-100" style={{ boxShadow: '1px 1px 4px #999' }}>
            <div className="bg-black h-20 w-20 rounded-full flex items-center justify-center text-white text-5xl max-sm:text-4xl max-sm:h-16 max-sm:w-16">
                {icon}
            </div>

            <h3 className="text-xl font-semibold max-sm:text-lg max-sm:leading-tight">{title}</h3>

            <p className="text-sm max-sm:text-xs">{desc}</p>
        </div>
    )
}

export default CardSec3;