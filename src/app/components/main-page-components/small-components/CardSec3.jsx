function CardSec3({ icon, title, desc }) {
    return (
        <div className="sm:w-1/4 max-sm:w-1/2 flex flex-col items-center border px-5 py-12 rounded-xl gap-5 text-center hover:bg-gray-100" style={{boxShadow: '1px 1px 4px #999'}}>
            <div className="bg-black h-20 w-20 rounded-full flex items-center justify-center text-white text-5xl">

                <div>
                    {icon}
                </div>

            </div>

            <h3 className="text-xl font-semibold">{title}</h3>

            <p className="text-sm">{desc}</p>
        </div>
    )
}

export default CardSec3;