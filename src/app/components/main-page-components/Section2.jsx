import CardSec2 from "./small-components/CardSec2";

function Section2() {
    return (
        <div className="sm:px-24 w-full h-screen bg-cover bg-center flex flex-col gap-6 justify-center max-sm:px-8" style={{backgroundImage: 'url("/msx-bg2.jpg")'}}>
            <CardSec2 title={'Our Mission'} text={'To empower individuals and organizations through innovative software solutions and comprehensive educational programs that foster growth, enhance skills, and drive technological advancement.'} />
            <CardSec2 title={'Our Vision'} text={'To be a leading provider of transformative software development and education, inspiring a community of learners and innovators who shape the future through technology. We envision a world where accessible knowledge and cutting-edge tools enable everyone to achieve their full potential.'} />
        </div>
    )
}

export default Section2;