import InternshipCard from './InternshipCard';
import internshipData from './internshipData';
import '../../App.css'

export default function Internship(props) {

    const internshipComponents = internshipData.map(
        internship => {
            return (
                <InternshipCard key={internship.id} internship={internship} />
            )
        }
    )

    return (
        <div id="experience" className="pt-20">
            <h1 className="text-center text-3xl md:text-4xl font-bold">Experience</h1>
            {internshipComponents}
        </div>
    )
}