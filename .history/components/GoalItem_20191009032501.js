import React from 'react';
import { View, Tex, StyleSheet } from 'react-native';

const GoalItem = props => {
   return ( 
   <View style={styles.listItem}>
   <Text>{itemData.item.value}</Text>
   );
};

const styles = StyleSheet.create({});

export default GoalItem;
