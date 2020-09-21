import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';
import { Text, StyleSheet, View, Button } from "react-native";
import { setNumber, getClickNumber } from "../hooks/index";

const UpgradeItem = props => {
    const [clickerValue, setValue] = useState(0)
    useEffect(() => {
        setValue(getClickNumber())
    })



    return (

        <View  >
            <TouchableOpacity style={styles.UpgradeItemContainer}
                onPress={
                    () => {
                        props.buyUpgrade(props.cost, props.upgrade)

                    }
                    // props.buyUpgrade(props.cost)

                }
            >
                <Text style={styles.UpgradeItemTitle} >{props.title}</Text>
                <Text style={styles.UpgradeItemDesc} >{props.description}</Text>
                <Text style={styles.UpgradeItemCost}>Cost: {props.cost}</Text>
            </TouchableOpacity>
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
        backgroundColor: 'white',
        width: 300,
        height: 80,
        marginHorizontal: 50,
        marginVertical: 10,
        padding: 5,
        borderWidth: 2,
        borderColor: 'black',
    },
    UpgradeItemDesc: {
    },
    Hidden: {
        display: 'none'
    }
});
export default UpgradeItem;