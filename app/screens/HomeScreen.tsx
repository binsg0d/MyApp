import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../(tabs)/index";

type HomeScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};
export default function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista Wydarzeń</Text>
            <Button
                title="Przejdź do szczegółów"
                onPress={() => navigation.navigate("Details", {
                    title: "Wykład React",
                    description: "Sala GM-46, 9:45",
                })}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
});