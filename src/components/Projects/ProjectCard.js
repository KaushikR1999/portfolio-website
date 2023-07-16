import '../../App.css';

export default function Project(props) {

    return (

        <div className="min-w-48 min-h-48 max-w-96 shadow-lg p-10">
            <p className="text-center font-bold">{props.project.projectTitle}</p>
            <p>{props.project.projectDescription}</p>
        </div>

    )
}