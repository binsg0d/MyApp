import { Pressable, StyleSheet, Text } from "react-native";

type ListItemProps = {
    title: string;
    description: string;
    hour: string;
    location: string;
    onPress?: () => void;
    isNotActive?: boolean;
};

export default function ListItem({ title, description, hour, location, onPress }: ListItemProps) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed, hovered }) => [
                styles.container,
                (pressed || hovered) && styles.highlightedContainer
            ]}
        >
            <Text style={styles.title}>{title}</Text>
            <Text>{description}</Text>
            <Text>{hour}</Text>
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
        opacity: .7,
    },
});
