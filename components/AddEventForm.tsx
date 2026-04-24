import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import { EventCategory, EventItem } from "../app/types/Event";

type AddEventFormProps = {
    onAddEvent: (event: Omit<EventItem, "id">) => void;
};

export default function AddEventForm({ onAddEvent }: AddEventFormProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [hour, setHour] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState<EventCategory>("Wykład");
    const [speaker, setSpeaker] = useState("");

    const handleAddEvent = () => {
        if (!title.trim() || !description.trim() || !hour.trim() || !location.trim()) {
            Alert.alert("Błąd", "Wszystkie pola są wymagane.");
            return;
        }
        if (title.trim().length < 3) {
            Alert.alert("Błąd", "Tytuł musi mieć co najmniej 3 znaki.");
            return;
        }

        onAddEvent({ title, description, hour, location, category, speaker });

        setTitle("");
        setDescription("");
        setHour("");
        setLocation("");
        setCategory("Wykład");
        setSpeaker("");
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Tytuł"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Opis"
                value={description}
                onChangeText={setDescription}
            />
            <TextInput
                style={styles.input}
                placeholder="Godzina (np. 10:00)"
                value={hour}
                onChangeText={setHour}
            />
            <TextInput
                style={styles.input}
                placeholder="Miejsce"
                value={location}
                onChangeText={setLocation}
            />
            <TextInput
                style={styles.input}
                placeholder="Prelegent"
                value={speaker}
                onChangeText={setSpeaker}
            />
            <Button title="Dodaj wydarzenie" onPress={handleAddEvent} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        gap: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        fontSize: 14,
    },
});