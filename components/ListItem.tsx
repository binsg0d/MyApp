import { Pressable, Text, View } from "react-native";
import { styles } from "../app/styles/listItem.styles";

type ListItemProps = {
    title: string;
    description: string;
    hour: string;
    location: string;
    category: string;
    speaker: string;
    onPress?: () => void;
};

export default function ListItem({ title, description, hour, location, category, speaker, onPress }: ListItemProps) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed, hovered }) => [
                styles.container,
                (pressed || hovered) && styles.highlightedContainer,
            ]}
        >
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{category}</Text>
                </View>
            </View>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.meta}>
                <Text style={styles.metaText}>🕐 {hour}</Text>
                <Text style={styles.metaText}>📍 {location}</Text>
                {speaker ? <Text style={styles.metaText}>🎤 {speaker}</Text> : null}
            </View>
        </Pressable>
    );
}
