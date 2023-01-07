import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import quote from "./data.js";

export default function App() {
  // const { height, width } = Dimensions.get("window");
  const random_number = Math.floor(Math.random() * 6 + 1);
  // console.log("random number is ; ", random_number);

  var sel_quote = quote.filter(
    (selected_quote) => random_number == selected_quote.id
  );
  const selected = sel_quote[0];
  //   console.log(selected);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quote of the day</Text>
      <Text style={styles.body}>
        <Text style={styles.quote}>
          <Text style={styles.title}>{"\n"}Quote :</Text> {selected.quote}
        </Text>

        <Text style={styles.content}>
          <Text style={styles.title}>{"\n"}ID :</Text> {selected.id}
        </Text>
        <Text style={styles.content}>
          <Text style={styles.title}>{"\n"}Author :</Text> {selected.author}
        </Text>
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0C10",
    alignItems: "center",
    justifyContent: "center",
    // flexDirection: "row",
    // alignItems: "center",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#C5C6C7",
    // flex-direction:
    // flexWrap: "row warp",
    // alignItems: "flex-start",
  },
  body: {
    // width: 120,
    // display: "flex",
    // flexDirection: "column-reverse",
    // alignItems: "center",
    // alignContent: "center",
  },
  content: {
    fontSize: 14,
    color: "#45A29E",
    alignContent: "center",
    justifyContent: "center",
    // alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  quote: {
    fontsize: 16,
    color: "#66FCF1",
  },
});
