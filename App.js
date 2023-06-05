import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Alert,
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import randomstring from 'randomstring';
import Header from './components/Header';
import Item from './components/Item';
const generateId = () => randomstring.generate({ length: 5 });
const App = () => {
  const [itemList, setItemList] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [inputFocused, setInputFocused] = useState(false);

  const addNewItem = () => {
    if (!newItem) {
      Alert.alert('Error Message', 'You must enter a value');
      return;
    }
    const _item = {
      id: generateId(),
      item: newItem,
    };
    setItemList((prev) => [_item, ...prev]);

    setNewItem('');
  };

  const removeItem = (id) => {
    const newList = itemList.filter((mono) => mono.id !== id);
    setItemList(newList);
  };
  return (
    <View style={styles.app}>
      <StatusBar style='auto' />
      <Header />
      <View style={styles.addItemWrapper}>
        <TextInput
          value={newItem}
          onChangeText={(text) => setNewItem(text)}
          underlineColorAndroid='transparent'
          onFocus={() => setInputFocused(!inputFocused)}
          onBlur={() => setInputFocused(!inputFocused)}
          style={[styles.textInput, { borderWidth: inputFocused ? 0 : 0 }]}
          placeholder='Enter an item'
        />
        <TouchableOpacity onPress={() => addNewItem()} style={styles.addBtn}>
          <Text style={styles.btnText}> Add </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.flatlist}>
        {itemList.length < 1 ? (
          <Text style={styles.noItem}> No item in list </Text>
        ) : (
          <FlatList
            data={itemList}
            renderItem={({ item }) => (
              <Item item={item} onRemove={removeItem} />
            )}
          />
        )}
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#ddd',
    paddingTop: 20,
    justifyContent: 'flex-start',
  },
  addItemWrapper: {
    // flex: 1,
    width: '80%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: 5,
  },
  textInput: {
    backgroundColor: '#ccc',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 10,
    width: '80%',
    height: 40,
    fontSize: 16,
    fontWeight: 'bold',
    borderWidth: 0,
  },

  addBtn: {
    backgroundColor: 'blue',
    height: 40,
    paddingHorizontal: 10,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  btnText: {
    color: '#f9f9f9',
    textAlign: 'center',
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  noItem: {
    margin: 10,
    padding: 20,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
});
