import '../../App.css';

export default function Education(props) {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 font-medium px-10 md:px-30 py-10">

            <div className="justify-self-center">
                <img className="w-40 h-30" src={props.education.schoolLogo} alt={props.education.school}></img>
                <p className="pt-5 text-center text-sm text-sky-400">{props.education.duration}</p>
            </div>

            <div className="pt-2 md:pt-0 md:pr-20">
                <ul className="items-start pt-2 list-disc space-y-2">
                    {props.education.description.map((item, index) => (
                        <li className="text-sm" key={index}>{item}</li>
                    ))} 
                </ul>
            </div>
            
        </div>
    )
}