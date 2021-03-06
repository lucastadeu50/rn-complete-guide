import React, { useState } from 'react';
import {
  StyleSheet, Text, Button, View, TextInput,
  ScrollView,
  FlatList
} from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoal }])
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} value={setEnteredGoal} />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
        <FlatList keyExtractor={(item, index) => item.id} data={courseGoals} renderItem={itemData => <GoalItem title={itemData.item.value}/>} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
