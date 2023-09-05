// import Butter from 'buttercms';
export type WorkExperience = {
    dateStarted: Date;
    dateStopped: Date | null;
    title: string;
    subtitle: string;
    detailedText: string;
    detailedPoints: string[];
};

export type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export type Category = {
    name: string;
    slug: string;
}

export type Categories = Category[];
