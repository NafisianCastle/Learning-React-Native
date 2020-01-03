import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LibraryList from "./src/components/LibraryList";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./src/reducers";

export default function App() {
  return (
    <Provider store={createStore(reducers)}>
      <View style={styles.container}>
        <LibraryList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 120
  }
});
