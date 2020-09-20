import React, { useState } from "react";
import { NativeModules } from "react-native";

let clickNumber


function getClickNumber() {
    return clickNumber
}
function setNumber(number) {
    clickNumber = number
}

module.exports = {
    setNumber,
    getClickNumber
}



// export const clickerValue = clickerNumber;
// export const setValue = assignValue;
// export const test1 = test
// export let clickerValue = 1

