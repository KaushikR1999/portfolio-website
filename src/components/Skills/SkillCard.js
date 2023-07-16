import '../../App.css';

export default function Skill(props) {

    return (
        <div className="group flex flex-col items-center">

            <img className="w-20 h-20 transition duration-500 group-hover:scale-75" src={props.skill.skillLogo} alt={props.skill.skillName}></img>
            <p className="opacity-0 transition duration-500 group-hover:opacity-100">{props.skill.skillName}</p>

        </div>
    )
}