import Section2 from "./components/main-page-components/Section2";
import Section1 from "./components/main-page-components/Section1";
import Section3 from "./components/main-page-components/Section3";

function HomePage() {
    return (
        <div className="flex justify-center flex-col max-w-screen-2xl">
            <Section1 />
            <Section2 />
            <Section3 />
        </div>
    )
}

export default HomePage;