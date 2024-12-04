import Section1 from "./components/home-page-components/Section1";
import Section10 from "./components/home-page-components/Section10";
import Section2 from "./components/home-page-components/Section2";
import Section3 from "./components/home-page-components/Section3";
import Section4 from "./components/home-page-components/Section4";
import Section5 from "./components/home-page-components/Section5";
import Section6 from "./components/home-page-components/Section6";
import Section7 from "./components/home-page-components/Section7";
import Section8 from "./components/home-page-components/Section8";
import Section9 from "./components/home-page-components/Section9";

export default function Home() {
  return (
    <div className="flex justify-center flex-col max-w-screen-2xl max-sm:px-4">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
    </div>
  )
}
