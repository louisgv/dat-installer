import xs from "xstream";
import { h } from "@cycle/native-screen";
import { Platform, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default function main(sources) {
  const vdom$ = xs.of(
    h(View, { style: styles.container }, [
      h(Text, { style: styles.welcome }, "Dat Installer"),
      h(
        Text,
        { style: styles.instructions },
        "Double tap R to reload, or shake"
      )
    ])
  );

  return {
    screen: vdom$
  };
}
