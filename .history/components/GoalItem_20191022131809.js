import React from 'react';
import { View, Text, StyleSheet, Touchable } from 'react-native';

const GoalItem = props => {
   return ( 
   <View style={styles.listItem}>
   <Text>{props.title}</Text>
   );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  }
});

export default GoalItem;
