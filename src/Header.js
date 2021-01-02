import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View, StatusBar } from "react-native";

function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={{
          uri:
            "data:image/png;base64,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"
        }}
        resizeMode="contain"
        style={styles.logo}
      />
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    marginTop: StatusBar.currentHeight
  },
  logo: {
    height: 80
  }
});
