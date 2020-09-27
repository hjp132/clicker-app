import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Button, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import UpgradeScreen from '../components/UpgradeScreen';
import { setNumber, getClickNumber } from "../hooks/index";
import UpgradeItem from '../components/UpgradeItem';



const screen = Dimensions.get('window');

// TO DO: 
// add styling for when you can't afford an upgrade, and on purchase remove element somehow ? 'display: none' probably ? 

const HomeScreen = (props) => {

  const [clickerValue, setClickNumber] = useState(0)
  const [autoClickerValue, setAutoClickerNumber] = useState(0);
  const [clickedValue, setclickedValue] = useState(1);

  let visible = true;

  // setclickedValue(clickedValue + 1)
  useEffect(() => {


    const autoClkr = setInterval(() => {
      setNumber(clickerValue + autoClickerValue)

      setClickNumber(getClickNumber())
    }, 1500)

    return () => clearInterval(autoClkr)
  })

  function btnClicked(addedValue) {
    setNumber(clickerValue + addedValue)
    setClickNumber(getClickNumber())
    console.log(clickerValue)
  }

  function increaseClickedValue(newValue) {
    setclickedValue(clickedValue + newValue)
  }

  function autoClicker(addedValue) {
    setAutoClickerNumber(autoClickerValue + addedValue)


  }

  function buytheUpgrade(cost, upgrade) {
    if (clickerValue < cost) {
      console.log('you cant afford this upgrade')
      return true
    } else {
      console.log('can afford, upgrade purchased')
      setNumber(clickerValue - cost)
      setClickNumber(getClickNumber())
      console.log(clickerValue)
      // calls the upgrade function the user buys
      upgrade()
      return false
    }
  }




  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Clicker App</Text>
      <View>
        <TouchableOpacity style={styles.clickBtn} onPress={() => btnClicked(clickedValue)}>
          <Text style={styles.clickText} >
            {clickerValue}
          </Text>
        </TouchableOpacity>
      </View>
      {/* <UpgradeScreen /> */}
      <View style={{ flex: 1 }}>
        <Text style={styles.upgradeTitle}>Upgrades:</Text>
        <ScrollView style={styles.scrollview}>


          {/* {this.state.showButton && <Button onPress={() => this.setState({ showButton: false })}>Hello</Button>} */}

          <UpgradeItem
            title='bad auto clicker'
            description='clicks it for you!'
            cost={3}
            buyUpgrade={buytheUpgrade}
            upgrade={() => autoClicker(5)}
          />

          <UpgradeItem
            title='Clickier buttons'
            description='more click value'
            cost={30}
            buyUpgrade={buytheUpgrade}
            upgrade={() => increaseClickedValue(5)}
          />
          <UpgradeItem
            title='Cooler clicker'
            description='what does this do??'
            cost={100}
            buyUpgrade={buytheUpgrade}
            upgrade={() => autoClicker(10)}
          />

          <UpgradeItem
            title='Cooler clicker'
            description='what does this do??'
            cost={100}
            buyUpgrade={buytheUpgrade}
            upgrade={() => autoClicker(10)}
          />

          <UpgradeItem
            title='Cooler clicker'
            description='what does this do??'
            cost={100}
            buyUpgrade={buytheUpgrade}
            upgrade={() => autoClicker(10)}
          />
          <UpgradeItem
            title='Cooler clicker'
            description='what does this do??'
            cost={100}
            buyUpgrade={buytheUpgrade}
            upgrade={() => autoClicker(10)}
          />
          <UpgradeItem
            title='Cooler clicker'
            description='what does this do??'
            cost={100}
            buyUpgrade={buytheUpgrade}
            upgrade={() => autoClicker(10)}
          />


        </ScrollView>

      </View>









    </View>


  )
};



const styles = StyleSheet.create({
  scrollview: {
    zIndex: 1,
    flex: 1
  },
  container: {
    backgroundColor: 'grey',
    flex: 1,
    backgroundColor: '#07121B',
    alignItems: 'center',
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

