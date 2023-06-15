export interface TypingTextProps {
    title: string | any;
    textStyles?: string;

};
export interface ExploreCardProps {
    title: string;
    id: string | number;
    imgUrl: string;
    index: number;
    active: string;
    handleClick: any;
};

export interface InsightCardProps {
    title: string;
    imgUrl: string;
    index: number;
    subtitle: string;
};
export interface NewFeaturesProps {
    title: string;
    imgUrl: string;
    subtitle: string;
};

export interface StartStepsProps {
    number: string;
    text: string;
};