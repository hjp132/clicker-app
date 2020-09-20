import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import UpgradeItem from '../components/UpgradeItem';

const UpgradeScreen = () => {
    return (
        <View>

            <Text style={styles.upgradeTitle}>Upgrades:</Text>
            <UpgradeItem
                title='test'
                cost={10}
            />




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
    UpgradeItemTitle: {
        color: 'black',
        fontSize: 20
    },
    UpgradeItemCost: {
        color: 'black',
        fontSize: 20
    }
});

export default UpgradeScreen;