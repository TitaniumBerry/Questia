import { StyleSheet, Text, View } from "react-native";

export default function App() {
  // Variables - boxes that store data
  const playerName = "Hero"; // String (text)
  const level = 1; // Number
  const healthPoints = 50; // Number
  const isAlive = true; // Boolean (true/false)

  return (
    <View style={styles.container}>
      <Text>Player: {playerName}</Text>
      <Text>Level: {level}</Text>
      <Text>HP: {healthPoints}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#628ce8",
    alignItems: "center",
    justifyContent: "center",
  },
});