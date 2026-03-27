import { RouteProp } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../(tabs)/index";

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;

type DetailsScreenProps = {
    route: DetailsScreenRouteProp;
};
export default function DetailsScreen({ route }: DetailsScreenProps) {
    const { title, description } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text>{description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
});