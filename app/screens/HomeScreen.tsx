import ListItem from "@/components/ListItem";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../(tabs)/index";

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

type EventItem = {
  id: number;
  title: string;
  description: string;
  hour: string;
  location: string;
};

const events: EventItem[] = [
  { id: 1, title: "Wyklad React", description: "Sala A1", hour: "08:00", location: "Płock" },
  { id: 2, title: "Wyklad React 2", description: "Sala A2", hour: "09:00", location: "Warszawa" },
  { id: 3, title: "Wyklad React 3", description: "Sala A3", hour: "10:00", location: "Kraków" },
  { id: 4, title: "Wyklad React 4", description: "Sala A4", hour: "11:00", location: "Gdańsk" },
  { id: 5, title: "Wyklad React 5", description: "Sala A5", hour: "12:00", location: "Wrocław" },
  { id: 6, title: "Wyklad React 6", description: "Sala A6", hour: "13:00", location: "Poznań" },
  { id: 7, title: "Wyklad React 7", description: "Sala A7", hour: "14:00", location: "Szczecin" },
  { id: 8, title: "Wyklad React 8", description: "Sala A8", hour: "15:00", location: "Łódź" },
  { id: 9, title: "Wyklad React 9", description: "Sala A9", hour: "16:00", location: "Bydgoszcz" },
  { id: 10, title: "Wyklad React 10", description: "Sala A10", hour: "17:00", location: "Lublin" },
  { id: 11, title: "Wyklad React 11", description: "Sala A11", hour: "18:00", location: "Katowice" },
  { id: 12, title: "Wyklad React 12", description: "Sala A12", hour: "19:00", location: "Rzeszów" },
  { id: 13, title: "Wyklad React 13", description: "Sala A13", hour: "20:00", location: "Toruń" },
  { id: 14, title: "Wyklad React 14", description: "Sala A14", hour: "21:00", location: "Opole" },
  { id: 15, title: "Wyklad React 15", description: "Sala A15", hour: "08:30", location: "Kielce" },
  { id: 16, title: "Wyklad React 16", description: "Sala A16", hour: "09:30", location: "Olsztyn" },
  { id: 17, title: "Wyklad React 17", description: "Sala A17", hour: "10:30", location: "Zielona Góra" },
  { id: 18, title: "Wyklad React 18", description: "Sala A18", hour: "11:30", location: "Gorzów Wielkopolski" },
  { id: 19, title: "Wyklad React 19", description: "Sala A19", hour: "12:30", location: "Białystok" },
  { id: 20, title: "Wyklad React 20", description: "Sala A20", hour: "13:30", location: "Toruń" },
];

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
            onPress={() => navigation.navigate("Details", { title: item.title, description: item.description, hour: item.hour, location: item.location })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    paddingTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 16,
  },
  list: {
    flex: 1,
    width: "100%",
    marginTop: 12,
  },
  item: {
    backgroundColor: "#fff",
    padding: 12,
    marginHorizontal: 16,
    marginBottom: 10,
    borderRadius: 8,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemLocation: {
    color: "#666",
    marginBottom: 6,
  },
});