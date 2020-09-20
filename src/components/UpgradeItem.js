import { HitTestResultTypes } from 'expo/build/AR';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, StyleSheet, View, Button } from "react-native";
import { setNumber, getClickNumber } from "../hooks/index";








const UpgradeItem = props => {


    const [clickerValue, setValue] = useState(0)
    useEffect(() => {
        setValue(getClickNumber())
    })


    return (
        // onPress={() => buyUpgrade(props, clickerValue, setValue)}
        <View  >
            <TouchableOpacity style={styles.UpgradeItemContainer}
                onPress={() => {
                    // setValue(clickerValue - props.cost)
                    // console.log('points:' + clickerValue + ' cost:' + props.cost)
                    // console.log('now it is:' + clickerValue)
                    buyUpgrade(props, clickerValue, setValue)
                }}>
                <Text style={styles.UpgradeItemTitle} >{props.title}</Text>
                <Text style={styles.UpgradeItemCost}>{props.cost}</Text>
            </TouchableOpacity>
        </View>


    )
}

function buyUpgrade(props, clickerValue, setValue) {
    let cost = props.cost
    if (clickerValue > cost) {
        //the default one that this thing is using 
        setValue(clickerValue - cost)
        // // -- this one is a wild guess ignore this line ithink
        // setNumber(clickerValue)
        console.log('Cost:' + cost + ', clickerValue: ' + clickerValue)
        console.log("You can afford that item")
    } else {
        console.log("You can't afford that item")
    }

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
        backgroundColor: 'red',
        width: 50,
        margin: 0,
        padding: 5

    }
});
export default UpgradeItem;