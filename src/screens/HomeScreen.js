import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Button, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import UpgradeScreen from '../components/UpgradeScreen';

import UpgradeItem from '../components/UpgradeItem';



const screen = Dimensions.get('window');

const HomeScreen = (props) => {

  const [clickerValue, setClickNumber] = useState(0)
  const [autoClickerValue, setAutoClickerNumber] = useState(0);
  const [clickedValue, setclickedValue] = useState(1);

  useEffect(() => {


    const autoClkr = setInterval(() => {
      setClickNumber(clickerValue + autoClickerValue)


    }, 1500)
    return () => clearInterval(autoClkr)
  })

  function btnClicked(addedValue) {
    setClickNumber(clickerValue + addedValue)

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
      setClickNumber(clickerValue - cost)
      console.log(clickerValue)
      // calls the upgrade function the user buys
      upgrade()
      return false
    }
  }

  // Can't seem to get this to work 
  // function abbreviateNumber(value) {
  //   var newValue = value;
  //   if (value >= 1000) {
  //     var suffixes = ["", "k", "m", "b", "t"];
  //     var suffixNum = Math.floor(("" + value).length / 3);
  //     var shortValue = '';
  //     for (var precision = 2; precision >= 1; precision--) {
  //       shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(precision));
  //       var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
  //       if (dotLessShortValue.length <= 2) { break; }
  //     }
  //     if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
  //     newValue = shortValue + suffixes[suffixNum];
  //   }
  //   return setClickNumber(newValue);
  // }



  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Clicker App
      </Text>
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
          <UpgradeItem
            title='NeedaNameHere'
            description='2/cps!'
            cost={3}
            buyUpgrade={buytheUpgrade}
            upgrade={() => autoClicker(2)}
          />

          <UpgradeItem
            title='NeedaNameHeres'
            description='3 per click'
            cost={10}
            buyUpgrade={buytheUpgrade}
            upgrade={() => increaseClickedValue(3)}
          />
          <UpgradeItem
            title='NeedaNameHere'
            description='4/cps'
            cost={30}
            buyUpgrade={buytheUpgrade}
            upgrade={() => autoClicker(4)}
          />

          <UpgradeItem
            title='NeedaNameHere'
            description='5 per click'
            cost={100}
            buyUpgrade={buytheUpgrade}
            upgrade={() => increaseClickedValue(5)}
          />

          <UpgradeItem
            title='NeedaNameHere'
            description='5/cps'
            cost={120}
            buyUpgrade={buytheUpgrade}
            upgrade={() => autoClicker(5)}
          />
          <UpgradeItem
            title='NeedaNameHere'
            description='6 per click'
            cost={150}
            buyUpgrade={buytheUpgrade}
            upgrade={() => increaseClickedValue(6)}
          />
          <UpgradeItem
            title='NeedaNameHere'
            description='10/cps'
            cost={160}
            buyUpgrade={buytheUpgrade}
            upgrade={() => autoClicker(10)}
          />
          <UpgradeItem
            title='NeedaNameHere'
            description='50/cps'
            cost={500}
            buyUpgrade={buytheUpgrade}
            upgrade={() => autoClicker(50)}
          />

          <UpgradeItem
            title='NeedaNameHere'
            description='9 per click'
            cost={800}
            buyUpgrade={buytheUpgrade}
            upgrade={() => increaseClickedValue(9)}
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
    marginTop: 30,
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

