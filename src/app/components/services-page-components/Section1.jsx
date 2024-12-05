function Section1() {
    return (
        <div className="h-screen w-full pt-[100px] flex flex-col items-center justify-center gap-9 text-white sm:mb-24">
            <h1 className="text-6xl sm:w-[60%] text-center font-bold leading-snug max-sm:text-2xl ">
                Your Trusted AI Development Company
            </h1>

            <h2 className="w-[45%] text-2xl text-center max-sm:text-xl max-sm:w-[90%]">
                We build meaningful AI Healthcare Solutions to shape the future of your
                business
            </h2>

            <button className="max-sm:scale-75 text-white px-5 py-3 rounded text-lg bg-gradient-to-r from-purple-500 to-purple-400 hover:from-white hover:to-white hover:text-purple-500 hover:border hover:border-purple-500">
                Get Free AI Consultation
            </button>

            <video
                className="absolute inset-0 w-full h-full object-cover z-[-1]"
                src="/banner-video.mp4"
                autoPlay
                muted
                loop
            />
        </div>
    );
}

export default Section1;
