import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [itemList, setItemList] = useState([
    {
      id: 1,
      item: 'Rice'
    },
    {
      id: 2,
      item: 'Eggs'
    },
    {
      id: 3,
      item: 'Beans'
    },
  ]);
  return (
    <View style={styles.container}>
      <Text> ShoppingList </Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
