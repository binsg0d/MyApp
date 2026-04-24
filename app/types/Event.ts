export type EventCategory =
  | "Wykład"
  | "Warsztaty"
  | "Seminarium"
  | "Hackathon"
  | "Obrony"
  | "Spotkanie"
  | "Targi"
  | "Ćwiczenia"
  | "Integracja";

export type EventItem = {
  id: number;
  title: string;
  description: string;
  hour: string;
  location: string;
  category: EventCategory;
  speaker: string;
};