import React, { Component } from "react";

import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { Tractor } from "./components/tractor";
import { DisplayState } from "./constants";

type State = {
  displayState: DisplayState;
};

export default class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      displayState: DisplayState.TRACTOR_VIEW,
    };
  }

  componentDidMount() {}

  renderContent() {
    const { displayState } = this.state;
    switch (displayState) {
      case DisplayState.TRACTOR_VIEW:
        return <Tractor />;
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>{this.renderContent()}</ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
