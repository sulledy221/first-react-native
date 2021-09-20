import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Notes from "./Notes";

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header}>First React Native</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <Notes />
      </ScrollView>
      <View styles={styles.footer}>
        <TextInput
          style={styles.textInput}
          placeholder="add a Todo..."
          placeholderTextColor="#eee"
        ></TextInput>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  header: {
    backgroundColor: "#3d3d3d",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#ddd",
    paddingTop: 40,
    fontSize: 36,
    padding: 20,
    fontWeight: "500",
    width: 390,
    color: "#FFD700",
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: "stretch",
    color: "#FFD700",
    padding: 20,
    backgroundColor: "#252525",
    borderTopWidth: 2,
    borderTopColor: "#ededed",
    fontSize: 32,
    width: 390,
  },
  addButton: {
    position: "absolute",
    zIndex: 11,
    right: 20,
    bottom: 100,
    backgroundColor: "#3d3d3d",
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  addButtonText: {
    color: "#FFD700",
    fontSize: 26,
    fontWeight: "700",
  },
});
