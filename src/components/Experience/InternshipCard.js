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
            <div className="pt-5 md:pt-0 md:justify-start md:pr-20">
                <p className="font-semibold text-center md:text-start text-emerald-200">{props.internship.role}</p>
                <ul className="justify-center pt-5 list-disc space-y-2">
                    {props.internship.description.map((item, index) => (
                        <li className="text-sm" key={index}>{item}</li>
                    ))}
                </ul>

                {/* Internship skills */}
                <ul className="flex flex-wrap justify-items-start space-x-2 pt-5">
                    {props.internship.toolsUsed.map((item, index) => (
                        <li className="text-xs shadow-xl bg-teal-600 rounded-xl p-1.5 mt-1" key={index}>{item}</li>
                    ))}
                </ul>
            </div>

        </div>
    )
}