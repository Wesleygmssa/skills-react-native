import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function Home() {
  return (
    <>
      <Vew style={styles.container}>
        <Text style={styles.title}>React-native</Text>

        <TextInput
          style={styles.input}
          placeholder="New skill"
          placeholderTextColor="#555"
        />

        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.button}>Add</Text>
        </TouchableOpacity>

        <Text style={[styles.title, {marginTop: 50}]}>
          My Skills
        </Text>
      </Vew>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#121015",
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e25",
    color: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: "#A370f7",
    padding: 20,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText:{
    color: #fff,
    fontSize: 17,
    fontWeight: "bold",
  }
});
