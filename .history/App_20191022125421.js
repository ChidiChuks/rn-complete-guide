import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  
  const addGoalHandler = () => {
    setCourserGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: enteredGoal } ]);
  };

  return (
    <View style={styles.screen} >
     
  );
};

const styles = StyleSheet.create ({
  screen: {
    padding: 50
  }  
});
