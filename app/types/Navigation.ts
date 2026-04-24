import { EventCategory } from "./Event";

export type RootStackParamList = {
    Home: undefined;
    Details: {
        title: string;
        description: string;
        hour: string;
        location: string;
        category: EventCategory;
        speaker: string;
    };
};