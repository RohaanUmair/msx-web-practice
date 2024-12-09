function page({ params }) {
    return (
        <div className="pt-[100px] bg-black text-white w-full">
            <h1>{`Course: ${params.courseDetail} from ${params.courseName} Section`}</h1>
        </div>
    )
}

export default page;