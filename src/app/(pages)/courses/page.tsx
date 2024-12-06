import Section1 from "../../components/courses-page-components/Section1.jsx";
import Section2 from "../../components/courses-page-components/Section2.jsx";

export default function Courses() {
    return (
        <div className="flex justify-center flex-col w-full max-w-screen-2xl">
            <Section1 />
            <Section2 />
        </div>
    )
}