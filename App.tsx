import React from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from "react-native";
import { CalculadoraScreens } from "./src/screens/CalculadoraScreens";
import { styles } from './src/Theme/appTheme';

 const App = () => {

  return (
    <SafeAreaView style= {styles.fondo}>
      <StatusBar
      backgroundColor= 'black'
      barStyle= "light-content" />
    <CalculadoraScreens/>
    </SafeAreaView>
  )

}
export default App
