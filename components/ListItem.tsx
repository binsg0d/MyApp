import { Pressable, StyleSheet, Text } from "react-native";

type ListItemProps = {
    title: string;
    description: string;
    location: string;
};

export default function ListItem({ title, description, location }: ListItemProps) {
    return (
        <Pressable
            style={({ pressed, hovered }) => [
                styles.container,
                (pressed || hovered) && styles.highlightedContainer
            ]}
        >
            <Text style={styles.title}>{title}</Text>
            <Text>{description}</Text>
            <Text>{location}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    // dodajemy styl podświetlenia do ListItem
    highlightedContainer: {
        backgroundColor: '#fff3cd',
    },
});
