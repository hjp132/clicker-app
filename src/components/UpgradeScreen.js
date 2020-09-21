import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import UpgradeItem from '../components/UpgradeItem';
import { buytheUpgrade } from "../screens/HomeScreen";

const UpgradeScreen = () => {
    return (
        <View>

            <Text style={styles.upgradeTitle}>Upgrades:</Text>

            <View style={styles.upgradeContainer}>
                <UpgradeItem
                    title='test'
                    cost={10}
                    buyUpgrade={buytheUpgrade}

                />

                <UpgradeItem
                    title='test2'
                    cost={30}
                    buyUpgrade={buytheUpgrade}
                />

                <UpgradeItem
                    title='test3'
                    cost={40}
                    buyUpgrade={buytheUpgrade}
                />
            </View>







        </View>
        // <View>
        //     <Image source={props.imageSource} />
        //     <Text>{props.title}</Text>
        //     <Text>Image score - {props.imageScore}</Text>
        // </View>


    )
}

const styles = StyleSheet.create({
    upgradeTitle: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 50
    },
    upgradeItem: {

    }
});

export default UpgradeScreen;