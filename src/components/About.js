import imageSrc from '../images/About/kaushik_quest.png'

export default function About() {
    return (
        <div id="about" className="pt-56">
        <div className="text-center text-3xl md:text-4xl font-bold">About Me</div>
        <div className="grid grid-cols-1 md:grid-cols-2 font-medium px-10 md:px-30 py-10">
            <div className="w-40 h-40 justify-self-center rounded-full overflow-hidden border-2 border-orange-500">
                    <img
                        className="object-cover w-full h-full"
                        src={imageSrc}
                        alt="Kaushik"
                    />
                </div>
                <div className="pt-5 md:pt-0 text-sm space-y-2">
                    <p>Hi, I am Lakshminaryanan <span className="font-extrabold">Kaushik</span> Rangaraj, an Information Systems major entering my final year at the National University of Singapore (NUS).</p>
                    <p>With a strong foundation in <span className="font-extrabold">Data Science & Analytics</span>, nurtured through diverse internship experiences, I have honed my skills in leveraging data to drive insights and make informed business decisions.</p> 
                    <p>Passionate about solving complex problems, I thrive on using data-driven approaches and cutting-edge technologies to tackle real-world challenges and achieve impactful results.</p>
                </div>
            </div>
        </div>
    )
}