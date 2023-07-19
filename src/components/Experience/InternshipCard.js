import '../../App.css';

export default function Internship(props) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 font-medium px-10 md:px-30 py-10 place-items-center">

            {/* Column to display basic information about internship */}
            <div>
                <img className="w-40 h-30" src={props.internship.companyLogo} alt={props.internship.companyName}></img>
                <p className="pt-5 text-center text-sm text-sky-400">{props.internship.internshipPeriod}</p>
            </div>

            {/* Column to display internship responsibilities */}
            <div className="pt-5 md:pt-0 md:justify-start lg:mr-40">
                <p className="font-semibold text-center md:text-start text-emerald-200">{props.internship.role}</p>
                <ul className="pt-5 list-disc space-y-2">
                    {props.internship.description.map((item, index) => (
                        <li className="text-sm" key={index}>{item}</li>
                    ))}
                </ul>

                {/* Internship skills */}
                {/* <ul className="flex flex-wrap justify-items-start space-x-2 pt-5">
                    {props.internship.toolsUsed.map((item, index) => (
                        <li className="text-xs shadow-xl bg-teal-600 rounded-xl p-1.5 mt-1" key={index}>{item}</li>
                    ))}
                </ul> */}

                {/* <p className="text-xs shadow-xl bg-teal-600 rounded-xl p-1.5 mt-2 max-w-max">Tools Used</p>  */}
                <ul className="flex flex-wrap justify-items-start space-x-2 pt-5">
                    {props.internship.toolIcons.map((item, index) => (
                        <div className="group flex flex-col items-center">
                            <img className="w-10 h-10 transition duration-500 group-hover:scale-75" src={item.skillLogo} alt={item.skillName}></img>
                            <p className="text-xs opacity-0 transition duration-500 group-hover:opacity-100">{item.skillName}</p>
                        </div>
                    ))}
                </ul>

            </div>

        </div>
    )
}