import { WorkExperience } from "../Types";

const items: WorkExperience[] = [];

const programManager: WorkExperience = {
    dateStarted: new Date(2020, 7, 1), // Months are 0-based in JavaScript
    dateStopped: null,
    title: "Program Manager, R&D",
    subtitle: "Immertec",
    detailedText: "",
    detailedPoints: [
        "Assist the C.T.O. with managing R&D projects related to creating AR/VR/XR experiences.",
        "Helped manage research for discovering new methods to improve performance and decrease resource consumption in the transmission and rendering of 4K V.R. Video.",
        "This research culminated in Immersive Tech, Inc. acquiring a patent (patent pending) which improves performance by 98 times (compared to traditional methods)",
        "Assisted in research for measuring the latency of V.R. video transmission. This research was submitted for IEEE VR 2021 ",
        "Bailey, S.K.T., Ciccone, B., Clagg, J., Chase, C.B., Burns, M.W., Popko, M., Akyuz, B.O., Bansal, K., & Friedland, R. Real-time virtual reality for surgical observation: Design and evaluation. Submitted proceedings to IEEE: V.R. 2021",
    ],
};

const softwareDeveloper: WorkExperience = {
    dateStarted: new Date(2020, 0, 1),
    dateStopped: null,
    title: "Software Developer",
    subtitle: "Immertec",
    detailedText: "",
    detailedPoints: [
        "Help the engineering team to build software using novel technologies based on JavaScript.",
        "Created and formulated the base for a NoSQL database using firebase, which allowed us to connect multiple applications on multiple platforms to talk to one another.",
        "Work on the back-end and front-end application in collaboration with other developers.",
        "Designed and tested the hardware components for our platform. The resulting hardware is a cart capable of streaming up to 8k video in real-time.",
    ],
};

const productManager: WorkExperience = {
    dateStarted: new Date(2020, 0, 1),
    dateStopped: new Date(2020, 7, 1),
    title: "Product Manager, Medoptic",
    subtitle: "Immertec",
    detailedText: "The Stragist",
    detailedPoints: [
        "Researched competitors and helped in mapping out the product timelines.",
        "Maintained compliance with F.D.A. and HIPAA regulations.",
        "Built and helped design the V1 of the Medoptic cart, currently in use at all contracted locations.",
        "Led product R&D while inside live operating rooms and used physician’s feedback to prioritize product development.",
        "Led a team of multinational developers to create Medoptic Mobile App (available in app stores) until transferring development to in-house.",
    ],
};

const networkSecurityEngineer: WorkExperience = {
    dateStarted: new Date(2019, 11, 1),
    dateStopped: null,
    title: "Network Security Engineer",
    subtitle: "Immertec",
    detailedText: "The Guardian",
    detailedPoints: [
        "Created the full architecture for enterprise management of users within the company. The project included setting up RADIUS Servers, Azure Active Directory using Office 365, Azure ADDC, LDAPS Servers, and Single Sign-On for all applications. When finished, all users were able to access everything reliably using their company credentials. Some applications which were set up included Jira, Notion, Gitlab, GitHub, Bitbucket, Lucidchart, and Office 365 suite.",
        "Set up policies for deployment of MacBooks and Windows P.C.s via Mosyle Business and Microsoft Intune respectively. This project included setting up all required policies for our organization to achieve SOC2.",
        "Supported the Director of I.T. in securing and managing deployed I.T. assets.",
        "Created and maintained a security program to reduce the risk of cyber-attacks.",
        "Performed regular risk-assessments and took measures to reduce risk.",
        "Created and maintained policies for compliance with certifications such as SOC2.",
    ],
};

items.push(
    programManager,
    softwareDeveloper,
    productManager,
    networkSecurityEngineer
);

export { items };
