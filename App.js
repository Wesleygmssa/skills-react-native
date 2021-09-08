import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewAddSkill(){
    setMySkills(oldSate =>  [...oldSate, newSkill])
  }

  return (
    <>
      <Vew style={styles.container}>
        <Text style={styles.title}>React-native</Text>

        <TextInput
          style={styles.input}
          placeholder="New skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />

        <TouchableOpacity 
        style={styles.button} 
        activeOpacity={0.7} 
        onPress={handleAddNewAddSkill}>
          <Text style={styles.button}>Add</Text>
        </TouchableOpacity>

        <Text style={[styles.title, {marginVertical: 50}]}>
          My Skills
        </Text>

     {
       mySkills.map(skill => (
        <TouchableOpacity key={skill} style={StyleSheet.buttonSkill}>
         <Text style={styles.textSkill}>
             {skill}
          </Text>
      </TouchableOpacity>
       ))
      
     }
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
  },
  buttonSkill:{
    backgroundColor: '1f1e25',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 10,

  },
  textSkill:{
    color: #fff,
    fontSize: 22,
    fontWeight: 22,
    fontWeight: 'bold',
  }
});
