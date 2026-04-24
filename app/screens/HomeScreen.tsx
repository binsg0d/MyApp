import AddEventForm from "@/components/AddEventForm";
import ListItem from "@/components/ListItem";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { events as initialEvents } from "../data/events";
import { styles } from "../styles/homeScreen.styles";
import { EventItem } from "../types/Event";
import { RootStackParamList } from "../types/Navigation";

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const [count, setCount] = useState<number>(0);

  const [events, setEvents] = useState<EventItem[]>(initialEvents);

  const addEvent = (newEvent: Omit<EventItem, "id">) => {
    const eventToAdd: EventItem = {
      id: Date.now(),
      ...newEvent,
    };
    setEvents((prevEvents) => [eventToAdd, ...prevEvents])
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wydarzenia</Text>

      <AddEventForm onAddEvent={addEvent} />

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
            speaker={item.speaker}
            onPress={() =>
              navigation.navigate("Details", {
                title: item.title,
                description: item.description,
                hour: item.hour,
                location: item.location,
                category: item.category,
                speaker: item.speaker,
              })
            }
          />
        )}
      />
    </View>
  );
}