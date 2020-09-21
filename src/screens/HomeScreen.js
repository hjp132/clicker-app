import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Button, timer } from "react-native";
import { TouchableOpacity } from "react-native";
import UpgradeScreen from '../components/UpgradeScreen';
import { setNumber, getClickNumber } from "../hooks/index";
import UpgradeItem from '../components/UpgradeItem';



const HomeScreen = (props) => {

  function btnClicked() {
    setNumber(clickerValue + 1)
    setClickNumber(getClickNumber())
    console.log(clickerValue)
  }

  function buytheUpgrade(cost, upgrade) {
    if (clickerValue < cost) {
      console.log('you cant afford this upgrade')
      return
    } else {
      console.log('can afford, upgrade purchased')
      setNumber(clickerValue - cost)
      setClickNumber(getClickNumber())
      console.log(clickerValue)

      // calls the upgrade function the user buys
      // upgrade()
    }
  }











  const [clickerValue, setClickNumber] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Clicker App</Text>
      <View>
        <TouchableOpacity onPress={btnClicked}>
          <Text style={styles.clickBtn}>
            {clickerValue}
          </Text>
        </TouchableOpacity>
      </View>
      {/* <UpgradeScreen /> */}
      <View>
        <Text style={styles.upgradeTitle}>Upgrades:</Text>
        <View>
          <UpgradeItem
            title='Second rate auto clicker'
            description='clicks it for you!'
            cost={10}
            buyUpgrade={buytheUpgrade}


          />
          <UpgradeItem
            title='Clickier buttons'
            description='increases click value per click'
            cost={30}
            buyUpgrade={buytheUpgrade}
          />
          <UpgradeItem
            title='Cooler clicker'
            description='what does this do??'
            cost={100}
            buyUpgrade={buytheUpgrade}
          />
        </View>

      </View>








    </View>

  )
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'grey'
  },
  clickBtn: {
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'grey',
    marginTop: 10
  },
  upgradeTitle: {
    color: 'white',
    fontSize: 18,
    textAlign: "center",
    marginTop: 20
  }

});

export default HomeScreen;

