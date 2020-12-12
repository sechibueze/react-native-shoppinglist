import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Item = ({ item, onRemove }) => {

    return (
        <View style={ styles.itemRow }>
            <Text style={ styles.itemText }> { item.item } </Text>
            <TouchableOpacity onPress={() => onRemove( item.id)} style={styles.removeBtn}>
                <Text style={styles.removeicon}> X </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Item;

const styles = StyleSheet.create({
    itemRow: {
        width: '80%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignContent: "center",
        alignSelf: "center",
        marginVertical: 8,
        paddingHorizontal: 5,
    },
    itemText: {
        alignSelf: "center",
    },
    removeBtn: {
        backgroundColor: 'red',
        color: 'white',
        padding: 5,
        borderRadius: 100/2,
    },
    removeicon: {
    color: '#fff'

    }
});