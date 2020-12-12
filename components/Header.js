import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

const Header = () => {

    return (
        <View style={styles.header}>
            <Text style={styles.headerText}> Shopping List </Text>   
        </View>
    );
}
export default Header;

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'dodgerblue',
        
    },
    headerText: {
        color: '#fff',
        paddingVertical: 15,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    }
});
