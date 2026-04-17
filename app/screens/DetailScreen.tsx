import { RouteProp } from "@react-navigation/native";
import { Text, View } from "react-native";
import { styles } from "../styles/detailScreen.styles";
import { RootStackParamList } from "../types/Navigation";

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;

type DetailsScreenProps = {
    route: DetailsScreenRouteProp;
};

export default function DetailsScreen({ route }: DetailsScreenProps) {
    const { title, description, hour, location } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text>{description}</Text>
            <Text>{hour}</Text>
            <Text>{location}</Text>
        </View>
    );
}