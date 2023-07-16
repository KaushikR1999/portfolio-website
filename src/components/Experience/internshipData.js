import tesLogo from '../../images/Experience/tes_logo.png';
import shopeeLogo from '../../images/Experience/shopee_logo.png';
import questLogo from '../../images/Experience/quest_logo.png';


const internshipData = [
    {
        id: 1, 
        companyName: "TES",
        role: "Data Analyst Intern",
        internshipPeriod: "Jan 2023 - Jun 2023",
        description: [
            "Automated manual Excel processes using Python, resulting in a 50% reduction in man-hours",
            "Enhanced and maintained Group Financial Storyboards for the Finance Department using PowerBI",
            "Implemented Python scripts to streamline monthly data verification processes, enhancing efficiency and accuracy",
            "Researched and authored a paper on customer value prediction utilising machine learning models"
        ],
        companyLogo: tesLogo,
        toolsUsed: [
            "SQL",
            "Python",
            "AWS",
            "PowerBI",
            "Data Analytics",
            "Machine Learning"
        ]
    },
    {
        id: 2, 
        companyName: "Shopee",
        role: "Business Intelligence Intern",
        internshipPeriod: "Sep 2022 - Dec 2022",
        description: [
            "Devised end-to-end dashboards using SQL to monitor key business metrics to support business operation teams",
            "Managed migration of data workflows, improving data processing by over 20%"
        ],
        companyLogo: shopeeLogo,
        toolsUsed: [
            "SQL",
            "Business Intelligence"
        ]
    },
    {
        id: 3, 
        companyName: "Quest",
        role: "Data Analyst Intern",
        internshipPeriod: "May 2022 - Jul 2022",
        description: [
            "Spearheaded tracking of KPIs using Python for growth, marketing, and product teams",
            "Designed and implemented several Tableau dashboards to support data-driven decision-making in improving customer acquisition, activation & retention",
            "Built pipelines for data extraction & cleaning, reducing data processing time by over 50%"
        ],
        companyLogo: questLogo,
        toolsUsed: [
            "Python",
            "Tableau",
            "Data Analytics"
        ]
    }
]

export default internshipData