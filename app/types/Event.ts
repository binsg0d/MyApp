export type EventCategory =
    | "wykład"
    | "warsztaty"
    | "seminarium"
    | "hackathon"
    | "obrony"
    | "spotkanie"
    | "targi"
    | "ćwiczenia"
    | "integracja";

export type EventItem = {
    id: number;
    title: string;
    description: string;
    hour: string;
    location: string;
    category: EventCategory;
};