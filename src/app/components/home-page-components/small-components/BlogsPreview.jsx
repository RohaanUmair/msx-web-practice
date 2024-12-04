import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

function BlogsPreview({ title, desc, imgSrc }) {
    return (
        <div className="flex h-[28%] px-5 rounded-md items-center gap-3" style={{ boxShadow: '1px 1px 10px 1px #999' }}>
            <div className="h-4/5">
                <Image src={imgSrc} alt="thumbnail" style={{width: 200, height: 100}} width={175} height={99} className="rounded" />
            </div>

            <div className="flex flex-col gap-1 ">
                <h1 className="font-bold text-lg text-blue-950">{title}</h1>
                <p className="">{desc}</p>
                <button className="flex items-center text-purple-700">Read More <IoIosArrowRoundForward className="text-2xl" /></button>
            </div>
        </div>
    )
}

export default BlogsPreview;