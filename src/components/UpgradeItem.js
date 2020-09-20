import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const UpgradeItem = props => {
    console.log(props)
    return (
        <View style={styles.UpgradeItemContainer}>
            <Text style={styles.UpgradeItemTitle}>{props.title}</Text>
            <Text style={styles.UpgradeItemCost}>{props.cost}</Text>
        </View>


    )
}

const styles = StyleSheet.create({
    UpgradeItemTitle: {
        color: 'black',
        fontSize: 15
    },
    UpgradeItemCost: {
        color: 'black',
        fontSize: 15
    },
    UpgradeItemContainer: {
        backgroundColor: 'purple',
        width: 50
    }
});
export default UpgradeItem;