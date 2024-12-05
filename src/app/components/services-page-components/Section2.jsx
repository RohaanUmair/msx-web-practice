import Image from "next/image";
import Heading from "./small-components/Heading";

function Section2() {
    return (
        <div className="w-full pb-24 bg-white sm:px-24 flex items-center max-sm:flex-col max-sm:mt-6">
            <div className="w-1/2 flex flex-col gap-8 max-sm:w-[90%]">
            <Heading text={"Drive Unstoppable Business Success Through AI!"} />

                <p className="text-gray-600 leading-7 text-base max-sm:text-sm">
                    Maximize your business potential with our exceptional AI Development
                    Services. Our customer-centric and passionate team of engineers is
                    committed to delivering tailored solutions that exceed your
                    expectations.
                </p>

                <p className="text-gray-600 leading-7 text-base max-sm:text-sm">
                    We leverage our expertise in machine learning, deep learning, and AI
                    development to deliver exceptional solutions in NLP, computer vision,
                    predictive analytics, generative AI, AI chatbot development, and more.
                </p>

                <p className="text-gray-600 leading-7 text-base max-sm:text-sm">
                    Our AI-based solutions offer a clear pathway to success, helping
                    businesses improve decision-making, automate operations, save time,
                    and boost profits. Partner with MSX Solutions – AI Experts in
                    Pakistan, to seamlessly integrate, scale, and access data-driven
                    insights, leading to exceptional business outcomes.
                </p>

                <button className="max-sm:mx-auto max-sm:mb-8 text-white px-3 py-3 rounded text-base w-52 bg-gradient-to-r from-purple-500 to-purple-400 hover:from-white hover:to-white hover:text-purple-500 hover:border hover:border-purple-500">
                    Get A Free Quote
                </button>
            </div>

            <div>
                <Image
                    src="/home-section-img.webp"
                    alt="img"
                    width={600}
                    height={600}
                />
            </div>
        </div>
    );
}

export default Section2;
