import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
  return (
    <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
        <Button title="ADD" onPress={addGoalHandler} />
     </View>
     <FlatList data={courseGoals} renderItem={itemData => <GoalItem title={itemData.item.value} /> } />
    </View> 
  );
};

export default GoalInput;