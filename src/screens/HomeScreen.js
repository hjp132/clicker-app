import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import UpgradeScreen from '../components/UpgradeScreen';
import { setNumber, getClickNumber } from "../hooks/index";



const HomeScreen = () => {

  function randomName() {
    setNumber(clickerValue + 1)
    setClickNumber(getClickNumber())
    console.log(clickerValue)
  }

  const [clickerValue, setClickNumber] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clicker App</Text>
      {/* cant seem to get this to work VV but I can get the line on line 11 to work without the stylesheet?? */}
      {/* <View stlye={styles.clickerBox}></View>  */}
      <View>
        <TouchableOpacity>
          <Text style={styles.clickBtn} onPress={randomName}>
            {clickerValue}
          </Text>
        </TouchableOpacity>
      </View>
      <UpgradeScreen />





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
  }

});

export default HomeScreen;

