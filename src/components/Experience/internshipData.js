import tesLogo from '../../images/Experience/tes_logo.png';
import shopeeLogo from '../../images/Experience/shopee_logo.png';
import questLogo from '../../images/Experience/quest_logo.png';

import pythonLogo from '../../images/Skills/python.png';
import prestoLogo from '../../images/Skills/prestosql.png';
import tableauLogo from '../../images/Skills/tableau.svg';
import powerbiLogo from '../../images/Skills/powerbi.png';
import pandasLogo from '../../images/Skills/pandas.png';
import scikitLogo from '../../images/Skills/scikit.png';
import matplotlibLogo from '../../images/Skills/matplotlib.png';
import seabornLogo from '../../images/Skills/seaborn.png';


const internshipData = [
    {
        id: 1, 
        companyName: "TES",
        role: "Data Analyst Intern",
        internshipPeriod: "Jan 2023 - Jun 2023",
        description: [
            "Trained machine learning models such as Linear Regression, XGBoost, CatBoost, Random Forest, K Nearest Neighbours, to predict customer value and generate revenue insights for the Sales Team",
            "Designed and implemented PowerBI dashboards for tracking AWS costs, facilitating cost management and analysis",
            "Automated monthly Excel report generation using Python, resulting in a 50% reduction in man-hours",
            "Implemented Python scripts to streamline monthly data verification of Group Financial Storyboards, enhancing efficiency and accuracy"
        ],
        companyLogo: tesLogo,
        toolsUsed: [
            // "Python",
            // "SQL",
            "AWS",
            // "PowerBI",
            "Data Analytics",
            "Machine Learning"
        ],
        toolIcons: [
            {
                id: 1, 
                skillName: "Pandas",
                skillLogo: pandasLogo
            },
            {
                id: 2, 
                skillName: "Matplotlib",
                skillLogo: matplotlibLogo
            },
            {
                id: 3, 
                skillName: "Seaborn",
                skillLogo: seabornLogo
            },
            {
                id: 4, 
                skillName: "Scikit-Learn",
                skillLogo: scikitLogo
            },
            {
                id: 5, 
                skillName: "Python",
                skillLogo: pythonLogo
            },
            {
                id: 6, 
                skillName: "PrestoSQL",
                skillLogo: prestoLogo
            },
            {
                id: 7, 
                skillName: "PowerBI",
                skillLogo: powerbiLogo
            },
        ]
    },
    {
        id: 2, 
        companyName: "Shopee",
        role: "Business Intelligence Intern",
        internshipPeriod: "Sep 2022 - Dec 2022",
        description: [
            "Automated monitoring of key business metrics by developing SQL scripts to support to business operation teams",
            "Developed workflows to track buyer delivery collection lapses, streamlining operations and improving data processing efficiency by over 20%",
        ],
        companyLogo: shopeeLogo,
        toolsUsed: [
            // "SQL",
            "Business Intelligence"
        ],
        toolIcons: [
            {
                id: 1, 
                skillName: "PrestoSQL",
                skillLogo: prestoLogo
            }
        ]
    },
    {
        id: 3, 
        companyName: "Quest",
        role: "Data Analyst Intern",
        internshipPeriod: "May 2022 - Jul 2022",
        description: [
            "Spearheaded tracking of KPIs using descriptive analytical techniques with Python for growth, marketing, and product teams",
            "Performed Cohort Analysis using Tableau to optimise data-driven decision-making for customer acquisition, activation, and retention strategies",
            "Conducted data extraction & data cleaning with Pandas, building pipelines and reducing data processing time by over 50%"
        ],
        companyLogo: questLogo,
        toolsUsed: [
            // "Python",
            // "Tableau",
            "Data Analytics"
        ],
        toolIcons: [
            {
                id: 1, 
                skillName: "Pandas",
                skillLogo: pandasLogo
            },
            {
                id: 2, 
                skillName: "Matplotlib",
                skillLogo: matplotlibLogo
            },
            {
                id: 3, 
                skillName: "Seaborn",
                skillLogo: seabornLogo
            },
            {
                id: 4, 
                skillName: "Tableau",
                skillLogo: tableauLogo
            }
        ]
    }
]

export default internshipData