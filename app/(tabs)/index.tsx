import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "../screens/DetailScreen";
import HomeScreen from "../screens/HomeScreen";

export type RootStackParamList = {
  Home: undefined;
  Details: {
    title: string;
    description: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  // const [count, setCount] = useState<number>(0);
  // const events = [
  //   { id: 1, title: "Wyklad React", description: "Sala A1, 10:00", location: "Płock" },
  //   { id: 2, title: "Wyklad React 2", description: "Sala A2, 12:00", location: "Warszawa" },
  //   { id: 3, title: "Wyklad React 3", description: "Sala A3, 14:00", location: "Kraków" },
  //   { id: 4, title: "Wyklad React 4", description: "Sala A4, 16:00", location: "Gdańsk" },
  //   { id: 5, title: "Wyklad React 5", description: "Sala A5, 18:00", location: "Wrocław" },
  //   { id: 6, title: "Wyklad React 6", description: "Sala A6, 20:00", location: "Poznań" },
  //   { id: 7, title: "Wyklad React 7", description: "Sala A7, 22:00", location: "Szczecin" },
  //   { id: 8, title: "Wyklad React 8", description: "Sala A8, 24:00", location: "Łódź" },
  //   { id: 9, title: "Wyklad React 9", description: "Sala A9, 26:00", location: "Bydgoszcz" },
  //   { id: 10, title: "Wyklad React 10", description: "Sala A10, 28:00", location: "Lublin" },
  //   { id: 11, title: "Wyklad React 11", description: "Sala A11, 30:00", location: "Katowice" },
  //   { id: 12, title: "Wyklad React 12", description: "Sala A12, 32:00", location: "Rzeszów" },
  //   { id: 13, title: "Wyklad React 13", description: "Sala A13, 34:00", location: "Toruń" },
  //   { id: 14, title: "Wyklad React 14", description: "Sala A14, 36:00", location: "Opole" },
  //   { id: 15, title: "Wyklad React 15", description: "Sala A15, 38:00", location: "Kielce" },
  //   { id: 16, title: "Wyklad React 16", description: "Sala A16, 40:00", location: "Olsztyn" },
  //   { id: 17, title: "Wyklad React 17", description: "Sala A17, 42:00", location: "Zielona Góra" },
  //   { id: 18, title: "Wyklad React 18", description: "Sala A18, 44:00", location: "Gorzów Wielkopolski" },
  //   { id: 19, title: "Wyklad React 19", description: "Sala A19, 46:00", location: "Białystok" },
  //   { id: 20, title: "Wyklad React 20", description: "Sala A20, 48:00", location: "Toruń" },
  // ]
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
//     <View
//       style={styles.container}>
//       <Text style={styles.title}>Smart Campus</Text>
//       <Text style={styles.subtitle}>Moja pierwsza aplikacja mobilna</Text>
//       <StatusBar style="auto" />
//       <Button title="Zwiększ" onPress={() => setCount(count + 1)} />
//       <Text>Licznik: {count}</Text>

//       <ScrollView>
//         {events.map((event) => (
//           <ListItem
//             key={event.id}
//             title={event.title}
//             description={event.description}
//             location={event.location}
//           />
//         ))}
//       </ScrollView>
//     </View>
//   );
// }
// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     backgroundColor: '#f2f2f2',
//     alignItems: 'center',
//     justifyContent: 'center',

//   },
//   highlightedContainer: {
//     backgroundColor: '#fff3cd', // zmienia kolor tła, jeśli isHighlighted === true
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//   },

//   subtitle: {
//     fontSize: 16,
//     marginTop: 10,
//   },
// });

