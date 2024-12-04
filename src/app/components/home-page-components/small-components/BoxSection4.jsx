function Box({ heading, text, br }) {
    return (
        <div className={`flex flex-col h-40 w-full justify-center max-sm:w-1/2 ${br? "border-r border-gray-400": ""}`}>
            <h1 className="text-blue-950 text-5xl font-bold text-center">{heading}</h1>
            <p className=" text-center">{text}</p>
        </div>
    )
}

export default Box;