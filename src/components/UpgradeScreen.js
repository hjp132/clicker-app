import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import UpgradeItem from '../components/UpgradeItem';

const UpgradeScreen = () => {
    return (
        <View>

            <Text style={styles.upgradeTitle}>Upgrades:</Text>

            <View style={styles.upgradeContainer}>
                <UpgradeItem
                    title='test'
                    cost='10'

                />

                <UpgradeItem
                    title='test2'
                    cost='50'
                />

                <UpgradeItem
                    title='test2'
                    cost='30'
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