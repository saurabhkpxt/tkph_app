import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "./Header";
import NewCalc from "./NewCalc";
import Home from "./Home";
import { StatusBar } from "react-native";
import { NativeRouter, Switch, Route } from "react-router-native";

function App() {
  return (
    <NativeRouter>
      <>
        <Switch>
          <Route exact path="/newcalc">
            <Header />
            <NewCalc />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </>
    </NativeRouter>
  );
}

export default App;

const styles = StyleSheet.create({
  app: {
    flexGrow: 1,
    marginTop: StatusBar.currentHeight
  }
});
