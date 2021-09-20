import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header}>First React Native</Text>
      </View>
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
    paddingTop: 20,
  },
  headerText: {
    color: "#FFD700",
    fontSize: 36,
    padding: 26,
    fontWeight: "500",
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
