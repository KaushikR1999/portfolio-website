import githubLogo from '../images/Footer/github.png';
import linkedinLogo from '../images/Footer/linkedin.png';
import emailLogo from '../images/Footer/envelope.png';

export default function Footer() {
    return (
        <footer className="p-5 bg-gray-900 justify-center">
            {/* <div>
                <h1 className="text-center font-medium text-2xl">Kaushik Rangaraj</h1>
            </div> */}
            <div className="p-5 justify-center flex flex-row">
                <a href="https://github.com/KaushikR1999">
                    <div className="w-8 h-8 mr-5 border-solid border-2 rounded-full border-white bg-white flex items-center justify-center">
                        <img className="w-5 h-5" src={githubLogo} alt="Github" />
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/kaushik-rangaraj/">
                    <div className="w-8 h-8 mr-5 border-solid border-2 rounded-full border-white bg-white flex items-center justify-center">
                        <img className="w-5 h-5" src={linkedinLogo} alt="Linkedin" />
                    </div>
                </a>

                <a href="mailto:kaushikrangaraj@u.nus.edu">
                    <div className="w-8 h-8 mr-5 border-solid border-2 rounded-full border-white bg-white flex items-center justify-center">
                        <img className="w-5 h-5" src={emailLogo} alt="Email" />
                    </div>
                </a>

            </div>
        </footer>
    )
}