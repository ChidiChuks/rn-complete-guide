import React from 'react';

const GoalInput = props => {
  return (
    <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
        <Button title="ADD" onPress={addGoalHandler} />
     </View>
     <FlatList data={courseGoals} renderItem={itemData => <GoalItem title={itemData.item.value} /> } />
    </View> quy 
  );
};

export default GoalInput;