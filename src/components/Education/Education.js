import EducationCard from './EducationCard';
import educationData from './educationData';
import '../../App.css';

export default function Education() {

    const educationComponents = educationData.map(
        education => {
            return (
                <EducationCard key={education.id} education={education} />
            )
        }
    )

    return (
        <div id="education" className="pt-20 pb-10">
            <h1 className="text-center text-3xl md:text-4xl font-bold">Education</h1>
            {educationComponents}
        </div>
    )
}