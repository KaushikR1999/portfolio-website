export default function Header() {
    return (
        <nav className="fixed shadow-xl top-0 w-full p-5 bg-blue-200 font-medium flex flex-row justify-between text-blue-800">
            <a href="/" className="sm:text-2xl py-6">Kaushik Rangaraj</a>
            <ul className="place-items-center flex flex-wrap space-x-2 text-xs sm:text-base">
                <li>
                    <a href="#about">About</a>
                </li>
                <li>    
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#education">Education</a>
                </li>
            </ul>
        </nav>
    )
}