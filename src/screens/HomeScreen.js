import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Button, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import UpgradeScreen from '../components/UpgradeScreen';
import { setNumber, getClickNumber } from "../hooks/index";
import UpgradeItem from '../components/UpgradeItem';


const screen = Dimensions.get('window');

const HomeScreen = (props) => {

  const [clickerValue, setClickNumber] = useState(0)
  const [autoClickerValue, setAutoClickerNumber] = useState(0);


  useEffect(() => {
    const autoClkr = setInterval(() => {
      setNumber(clickerValue + autoClickerValue)

      setClickNumber(getClickNumber())
    }, 3000)

    return () => clearInterval(autoClkr)
  })

  function btnClicked() {
    setNumber(clickerValue + 10)
    setClickNumber(getClickNumber())
    console.log(clickerValue)
  }

  function autoClicker() {
    setAutoClickerNumber(autoClickerValue + 20)


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
      upgrade()
    }
  }




  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Clicker App</Text>
      <View>
        <TouchableOpacity style={styles.clickBtn} onPress={btnClicked}>
          <Text style={styles.clickText} >
            {clickerValue}
          </Text>
        </TouchableOpacity>
      </View>
      {/* <UpgradeScreen /> */}
      <View>
        <Text style={styles.upgradeTitle}>Upgrades:</Text>
        <View>
          <UpgradeItem
            title='bad auto clicker'
            description='clicks it for you!'
            cost={3}
            buyUpgrade={buytheUpgrade}
            upgrade={autoClicker}


          />
          <UpgradeItem
            title='Clickier buttons'
            description='more click value'
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
    backgroundColor: 'grey',
    flex: 1,
    backgroundColor: '#07121B',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: '#B9AAFF',
    marginBottom: 20
  },
  clickBtn: {
    borderWidth: 10,
    borderColor: '#B9AAFF',
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  upgradeTitle: {
    color: '#B9AAFF',
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10
  },
  clickText: {
    fontSize: 30,
    color: '#B9AAFF',
  }

});

export default HomeScreen;

