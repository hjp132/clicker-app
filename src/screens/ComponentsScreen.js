import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const CompontentsScreen = () => {
    const name = "Harry"
    return ( 
        <View>
            <Text style={styles.textStyle}>This is the components screen</Text>
            <Text> Hi There, {name}!</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default CompontentsScreen;