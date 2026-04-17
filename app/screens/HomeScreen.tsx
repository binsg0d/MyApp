import ListItem from "@/components/ListItem";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Button, FlatList, Text, View } from "react-native";
import { events } from "../data/events";
import { styles } from "../styles/homeScreen.styles";
import { RootStackParamList } from "../types/Navigation";

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Smart Campus</Text>
      <Text style={styles.subtitle}>Moja pierwsza aplikacja mobilna</Text>

      <Button title="Zwiększ" onPress={() => setCount(count + 1)} />
      <Text>Licznik: {count}</Text>

      <FlatList
        style={styles.list}
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            description={item.description}
            hour={item.hour}
            location={item.location}
            category={item.category}
            onPress={() =>
              navigation.navigate("Details", {
                title: item.title,
                description: item.description,
                hour: item.hour,
                location: item.location,
              })
            }
          />
        )}
      />
    </View>
  );
}