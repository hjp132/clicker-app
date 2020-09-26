import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';
import { Text, StyleSheet, View, Button } from "react-native";
import { setNumber, getClickNumber } from "../hooks/index";




const screen = Dimensions.get('window');

const UpgradeItem = props => {
    const [clickerValue, setValue] = useState(0)
    useEffect(() => {
        setValue(getClickNumber())
    })

    const [visible, setVisible] = useState(true);



    if (visible) {
        return (


            <TouchableOpacity style={styles.UpgradeItemContainer}

                onPress={
                    () => {
                        let buy = props.buyUpgrade(props.cost, props.upgrade)
                        setVisible(buy)

                    }
                    // props.buyUpgrade(props.cost)

                }
            >
                <View style={styles.section1}>
                    <Text style={styles.UpgradeItemTitle} >{props.title}</Text>
                    <Text style={styles.UpgradeItemDesc} >{props.description}</Text>
                </View>
                <View style={styles.section2}>
                    <Text style={styles.UpgradeItemCost}>Cost: {props.cost}</Text>
                </View>


            </TouchableOpacity>
        )
    }

    else {
        return (
            <View></View>
        )
    }
}




const styles = StyleSheet.create({
    UpgradeItemTitle: {
        color: '#B9AAFF',
        fontSize: 17
    },
    UpgradeItemCost: {
        color: '#B9AAFF',
        fontSize: 14,
    },
    UpgradeItemContainer: {
        width: screen.width / 1.25,
        maxHeight: 100,
        marginHorizontal: 50,
        marginVertical: 10,
        padding: 5,
        borderWidth: 2,
        borderColor: '#B9AAFF',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 10
    },
    UpgradeItemDesc: {
        color: '#B9AAFF'
    },
    Hidden: {
        display: 'none'
    },
    section1: {
        flex: 1,
        justifyContent: 'center',

        width: '70%',
        alignItems: 'center',



    },
    section2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'



    }
});
export default UpgradeItem;