import { HitTestResultTypes } from 'expo/build/AR';
import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Button } from "react-native";
import { setNumber, getClickNumber } from "../hooks/index";








const UpgradeItem = props => {


    const [clickerValue, setValue] = useState(0)
    useEffect(() => {
        setValue(getClickNumber())
    })


    return (
        <View style={styles.UpgradeItemContainer} >
            <Text style={styles.UpgradeItemTitle} onPress={() => buyUpgrade(props, clickerValue, setValue)}>{props.title}</Text>
            <Text style={styles.UpgradeItemCost}>{props.cost}</Text>
        </View>


    )
}

function buyUpgrade(props, clickerValue, setValue) {
    let cost = props.cost
    setValue(clickerValue - cost)
    console.log('Cost:' + cost + ', clickerValue: ' + clickerValue)
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