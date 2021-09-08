import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

export default function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState([]);
  const [gretting, setGretting] = useState("");

  function handleAddNewAddSkill() {
    setMySkills((oldSate) => [...oldSate, newSkill]);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGretting("Good morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting("Good afternoon");
    } else {
      setGretting("Good night");
    }
  }, []);

  return (
    <>
      <Vew style={styles.container}>
        <Text style={styles.title}>Welcome, Wesley - React-native</Text>
        <Text style={styles.greetings}>{gretting}</Text>

        <TextInput
          style={styles.input}
          placeholder="New skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />

        <Button onPress={handleAddNewAddSkill} />

        <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

        {/* Obsverção pensando em performa-se utilizar flatList
         * ScroolView Renderiza todos elementos
         */}
        {/* <ScrollView showsVerticalScrollIndicator={false}>
          {mySkills.map((skill) => (
            <SkillCard key={skill} skill={skill} />
          ))}
        </ScrollView> */}

        {/* Outra forma de fazer lista no reaact */}
        <FlatList
          data={mySkills}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <SkillCard skill={item} />}
        />
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
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
  greetings: {
    color: "#fff",
  },
});
