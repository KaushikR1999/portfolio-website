import SkillCard from "./SkillCard";
import skillData from "./skillData";
import '../../App.css';

export default function Education() {

    const languageComponents = skillData[0].map(
        skill => {
            return (
                <SkillCard key={skill.id} skill={skill} />
            )
        }
    )

    const webdevComponents = skillData[1].map(
        skill => {
            return (
                <SkillCard key={skill.id} skill={skill} />
            )
        }
    )

    const databaseComponents = skillData[2].map(
        skill => {
            return (
                <SkillCard key={skill.id} skill={skill} />
            )
        }
    )

    const datavizComponents = skillData[3].map(
        skill => {
            return (
                <SkillCard key={skill.id} skill={skill} />
            )
        }
    )

    return (
        <div id="skills" className="md:px-10 pt-10">
            <h1 className="text-center text-4xl font-bold">Skills</h1>

            <div className="font-medium pt-10 p-5">
                {/* Programming Languages */}
                <div className="shadow-2xl p-5 mb-5 rounded-lg">
                    <p className="font-bold">Programming Languages</p>
                    <ul className="flex flex-row grid grid-cols-4 pt-5">
                        {languageComponents.map((item, index) => (
                            <li className="" key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                {/* Web Development */}
                <div className="shadow-2xl p-5 mb-5 rounded-lg">
                    <p className="font-bold">Web Development</p>
                    <ul className="flex flex-row grid grid-cols-4 pt-5">
                        {webdevComponents.map((item, index) => (
                            <li className="" key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                {/* Database */}
                <div className="shadow-2xl p-5 mb-5 rounded-lg">
                    <p className="font-bold">Database</p>
                    <ul className="flex flex-row grid grid-cols-4 pt-5">
                        {databaseComponents.map((item, index) => (
                            <li className="" key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                {/* Data Visualisation */}
                <div className="shadow-2xl p-5 mb-5 rounded-lg">
                    <p className="font-bold">Data Visualisation</p>
                    <ul className="flex flex-row grid grid-cols-4 pt-5">
                        {datavizComponents.map((item, index) => (
                            <li className="" key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                
            </div>

        </div>
    
    )
}