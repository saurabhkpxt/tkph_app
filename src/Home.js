import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View, StatusBar } from "react-native";

import { StackActions } from "@react-navigation/native";

export default ({ history }) => (
  <View style={styles.header}>
    <h1>This is home screen!!!</h1>
    <Button
      title="New Calculation"
      onPress={() => {
        console.log(123);
        window.location.replace("/newcalc");
        //history.replace("/newcalc");
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  header: {
    marginTop: StatusBar.currentHeight
  },
  logo: {
    height: 80
  }
});
